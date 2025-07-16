
-- Create events table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.events (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  event_date TIMESTAMP WITH TIME ZONE NOT NULL,
  location TEXT,
  max_attendees INTEGER,
  created_by UUID,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create internships table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.internships (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  company TEXT NOT NULL,
  description TEXT,
  requirements TEXT,
  location TEXT,
  type TEXT DEFAULT 'full-time',
  application_deadline TIMESTAMP WITH TIME ZONE,
  is_active BOOLEAN DEFAULT true,
  created_by UUID,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable Row Level Security on both tables
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.internships ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for events
CREATE POLICY IF NOT EXISTS "Anyone can view events" ON public.events
  FOR SELECT USING (true);

CREATE POLICY IF NOT EXISTS "Authenticated users can create events" ON public.events
  FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY IF NOT EXISTS "Users can update their own events" ON public.events
  FOR UPDATE USING (auth.uid() = created_by)
  WITH CHECK (auth.uid() = created_by);

CREATE POLICY IF NOT EXISTS "Users can delete their own events" ON public.events
  FOR DELETE USING (auth.uid() = created_by);

-- Create RLS policies for internships
CREATE POLICY IF NOT EXISTS "Anyone can view active internships" ON public.internships
  FOR SELECT USING (is_active = true);

CREATE POLICY IF NOT EXISTS "Authenticated users can create internships" ON public.internships
  FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY IF NOT EXISTS "Users can update their own internships" ON public.internships
  FOR UPDATE USING (auth.uid() = created_by)
  WITH CHECK (auth.uid() = created_by);

CREATE POLICY IF NOT EXISTS "Users can delete their own internships" ON public.internships
  FOR DELETE USING (auth.uid() = created_by);

-- Create function to automatically set created_by field
CREATE OR REPLACE FUNCTION public.set_created_by()
RETURNS TRIGGER AS $$
BEGIN
  NEW.created_by = auth.uid();
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create function to update updated_at field
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for events table
DROP TRIGGER IF EXISTS set_created_by_events ON public.events;
CREATE TRIGGER set_created_by_events
  BEFORE INSERT ON public.events
  FOR EACH ROW EXECUTE FUNCTION public.set_created_by();

DROP TRIGGER IF EXISTS handle_updated_at_events ON public.events;
CREATE TRIGGER handle_updated_at_events
  BEFORE UPDATE ON public.events
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- Create triggers for internships table
DROP TRIGGER IF EXISTS set_created_by_internships ON public.internships;
CREATE TRIGGER set_created_by_internships
  BEFORE INSERT ON public.internships
  FOR EACH ROW EXECUTE FUNCTION public.set_created_by();

DROP TRIGGER IF EXISTS handle_updated_at_internships ON public.internships;
CREATE TRIGGER handle_updated_at_internships
  BEFORE UPDATE ON public.internships
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();
