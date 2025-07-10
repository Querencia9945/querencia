
-- Fix RLS policies and triggers for events table completely
-- The issue is that created_by is being set by trigger but RLS is checking it before the trigger runs

-- First, let's make sure the created_by column allows NULL temporarily during INSERT
-- and then gets set by the trigger

-- Drop existing policies and recreate them properly
DROP POLICY IF EXISTS "Anyone can view events" ON public.events;
DROP POLICY IF EXISTS "Authenticated users can create events" ON public.events;
DROP POLICY IF EXISTS "Users can update their own events" ON public.events;
DROP POLICY IF EXISTS "Users can delete their own events" ON public.events;

-- Create new policies that work with the trigger system
CREATE POLICY "Anyone can view events" ON public.events
  FOR SELECT USING (true);

-- For INSERT, we only check if user is authenticated, not the created_by field
-- because it will be set by the trigger
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

-- Recreate the trigger function with proper security
CREATE OR REPLACE FUNCTION public.set_created_by()
RETURNS TRIGGER AS $$
BEGIN
  -- Set created_by to the current authenticated user
  NEW.created_by = auth.uid();
  -- Also set updated_at for consistency
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Drop and recreate the trigger
DROP TRIGGER IF EXISTS set_created_by_events ON public.events;
DROP TRIGGER IF EXISTS update_events_updated_at ON public.events;

-- Create trigger that sets created_by and updated_at on INSERT
CREATE TRIGGER set_created_by_events
  BEFORE INSERT ON public.events
  FOR EACH ROW EXECUTE FUNCTION public.set_created_by();

-- Create trigger that sets updated_at on UPDATE
CREATE TRIGGER update_events_updated_at
  BEFORE UPDATE ON public.events
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- Also fix the same issue for internships table
DROP POLICY IF EXISTS "Anyone can view active internships" ON public.internships;
DROP POLICY IF EXISTS "Authenticated users can create internships" ON public.internships;
DROP POLICY IF EXISTS "Users can update their own internships" ON public.internships;
DROP POLICY IF EXISTS "Users can delete their own internships" ON public.internships;

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

-- Create trigger for internships
DROP TRIGGER IF EXISTS set_created_by_internships ON public.internships;
DROP TRIGGER IF EXISTS update_internships_updated_at ON public.internships;

CREATE TRIGGER set_created_by_internships
  BEFORE INSERT ON public.internships
  FOR EACH ROW EXECUTE FUNCTION public.set_created_by();

CREATE TRIGGER update_internships_updated_at
  BEFORE UPDATE ON public.internships
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();
