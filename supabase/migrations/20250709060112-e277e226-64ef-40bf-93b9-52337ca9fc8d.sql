
-- Completely fix the RLS policies for events and internships
-- The issue is that the current policies are still blocking insertions

-- First, let's drop all existing policies for events
DROP POLICY IF EXISTS "Anyone can view events" ON public.events;
DROP POLICY IF EXISTS "Authenticated users can create events" ON public.events;
DROP POLICY IF EXISTS "Users can update their own events" ON public.events;
DROP POLICY IF EXISTS "Users can delete their own events" ON public.events;

-- Drop all existing policies for internships
DROP POLICY IF EXISTS "Anyone can view active internships" ON public.internships;
DROP POLICY IF EXISTS "Authenticated users can create internships" ON public.internships;
DROP POLICY IF EXISTS "Users can update their own internships" ON public.internships;
DROP POLICY IF EXISTS "Users can delete their own internships" ON public.internships;

-- Recreate policies for events with proper permissions
CREATE POLICY "Anyone can view events" ON public.events
  FOR SELECT USING (true);

CREATE POLICY "Authenticated users can create events" ON public.events
  FOR INSERT 
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Users can update their own events" ON public.events
  FOR UPDATE 
  USING (auth.uid() = created_by)
  WITH CHECK (auth.uid() = created_by);

CREATE POLICY "Users can delete their own events" ON public.events
  FOR DELETE 
  USING (auth.uid() = created_by);

-- Recreate policies for internships with proper permissions
CREATE POLICY "Anyone can view active internships" ON public.internships
  FOR SELECT USING (is_active = true);

CREATE POLICY "Authenticated users can create internships" ON public.internships
  FOR INSERT 
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Users can update their own internships" ON public.internships
  FOR UPDATE 
  USING (auth.uid() = created_by)
  WITH CHECK (auth.uid() = created_by);

CREATE POLICY "Users can delete their own internships" ON public.internships
  FOR DELETE 
  USING (auth.uid() = created_by);

-- Ensure the set_created_by function exists and works correctly
CREATE OR REPLACE FUNCTION public.set_created_by()
RETURNS TRIGGER AS $$
BEGIN
  NEW.created_by = auth.uid();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Make sure triggers are properly set up
DROP TRIGGER IF EXISTS set_created_by_events ON public.events;
DROP TRIGGER IF EXISTS set_created_by_internships ON public.internships;

CREATE TRIGGER set_created_by_events
  BEFORE INSERT ON public.events
  FOR EACH ROW EXECUTE FUNCTION public.set_created_by();

CREATE TRIGGER set_created_by_internships
  BEFORE INSERT ON public.internships
  FOR EACH ROW EXECUTE FUNCTION public.set_created_by();
