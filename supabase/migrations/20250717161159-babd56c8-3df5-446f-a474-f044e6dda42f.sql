
-- Fix the RLS policies for events table to work with triggers
-- The issue is that RLS checks happen before triggers, so we need to adjust the policy

-- Drop the existing INSERT policy for events
DROP POLICY IF EXISTS "Authenticated users can create events" ON public.events;

-- Create a new INSERT policy that doesn't check created_by (since it will be set by trigger)
CREATE POLICY "Authenticated users can create events" ON public.events
  FOR INSERT 
  WITH CHECK (auth.uid() IS NOT NULL);

-- Ensure the trigger function exists and is properly configured
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

-- Make sure the trigger is properly configured to run BEFORE INSERT
DROP TRIGGER IF EXISTS set_created_by_events ON public.events;
CREATE TRIGGER set_created_by_events
  BEFORE INSERT ON public.events
  FOR EACH ROW EXECUTE FUNCTION public.set_created_by();

-- Also fix the same issue for internships table
DROP POLICY IF EXISTS "Authenticated users can create internships" ON public.internships;

CREATE POLICY "Authenticated users can create internships" ON public.internships
  FOR INSERT 
  WITH CHECK (auth.uid() IS NOT NULL);

-- Ensure trigger for internships works the same way
DROP TRIGGER IF EXISTS set_created_by_internships ON public.internships;
CREATE TRIGGER set_created_by_internships
  BEFORE INSERT ON public.internships
  FOR EACH ROW EXECUTE FUNCTION public.set_created_by();
