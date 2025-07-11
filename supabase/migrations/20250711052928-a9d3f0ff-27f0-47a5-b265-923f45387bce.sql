
-- Fix the RLS policies and triggers for events table
-- The issue is that the RLS policy checks created_by before the trigger sets it

-- First, let's update the events table policies to work with the trigger
DROP POLICY IF EXISTS "Authenticated users can create events" ON public.events;

-- Create a new policy that allows INSERT when user is authenticated
-- The trigger will set created_by automatically
CREATE POLICY "Authenticated users can create events" ON public.events
  FOR INSERT 
  WITH CHECK (auth.uid() IS NOT NULL);

-- Ensure the trigger function exists and works properly
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

-- Recreate the trigger to ensure it fires before RLS check
DROP TRIGGER IF EXISTS set_created_by_events ON public.events;
CREATE TRIGGER set_created_by_events
  BEFORE INSERT ON public.events
  FOR EACH ROW EXECUTE FUNCTION public.set_created_by();

-- Also create the event_registrations table for tracking user registrations
CREATE TABLE IF NOT EXISTS public.event_registrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  event_id UUID NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
  registered_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  status TEXT DEFAULT 'registered' CHECK (status IN ('registered', 'attended', 'cancelled')),
  notes TEXT,
  UNIQUE(user_id, event_id)
);

-- Enable RLS on event_registrations
ALTER TABLE public.event_registrations ENABLE ROW LEVEL SECURITY;

-- Create policies for event_registrations
CREATE POLICY "Users can view their own registrations" ON public.event_registrations
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own registrations" ON public.event_registrations
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own registrations" ON public.event_registrations
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own registrations" ON public.event_registrations
  FOR DELETE USING (auth.uid() = user_id);

-- Add trigger for event_registrations
CREATE TRIGGER set_created_by_event_registrations
  BEFORE INSERT ON public.event_registrations
  FOR EACH ROW EXECUTE FUNCTION public.set_created_by();
