
-- Fix RLS policies for events and internships to allow proper insertion
-- The current policies are too restrictive and don't allow the created_by field to be set properly

-- Drop existing restrictive policies
DROP POLICY IF EXISTS "Authenticated users can create events" ON public.events;
DROP POLICY IF EXISTS "Authenticated users can create internships" ON public.internships;

-- Create new policies that allow authenticated users to insert with proper created_by field
CREATE POLICY "Authenticated users can create events" ON public.events
  FOR INSERT 
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can create internships" ON public.internships
  FOR INSERT 
  WITH CHECK (auth.uid() IS NOT NULL);

-- Ensure the triggers are working properly to set created_by
DROP TRIGGER IF EXISTS set_created_by_events ON public.events;
DROP TRIGGER IF EXISTS set_created_by_internships ON public.internships;

CREATE TRIGGER set_created_by_events
  BEFORE INSERT ON public.events
  FOR EACH ROW EXECUTE FUNCTION public.set_created_by();

CREATE TRIGGER set_created_by_internships
  BEFORE INSERT ON public.internships
  FOR EACH ROW EXECUTE FUNCTION public.set_created_by();
