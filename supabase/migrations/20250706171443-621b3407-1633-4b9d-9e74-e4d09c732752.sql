
-- Add missing RLS policies for events and internships deletion
CREATE POLICY "Users can delete their own events" ON public.events
  FOR DELETE USING (auth.uid() = created_by);

CREATE POLICY "Users can delete their own internships" ON public.internships
  FOR DELETE USING (auth.uid() = created_by);

-- Ensure created_by is set automatically for events
CREATE OR REPLACE FUNCTION public.set_created_by()
RETURNS TRIGGER AS $$
BEGIN
  NEW.created_by = auth.uid();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Add triggers to automatically set created_by
CREATE TRIGGER set_created_by_events
  BEFORE INSERT ON public.events
  FOR EACH ROW EXECUTE FUNCTION public.set_created_by();

CREATE TRIGGER set_created_by_internships
  BEFORE INSERT ON public.internships
  FOR EACH ROW EXECUTE FUNCTION public.set_created_by();

-- Make sure the tables have proper constraints
ALTER TABLE public.events ALTER COLUMN event_date SET NOT NULL;
ALTER TABLE public.internships ALTER COLUMN title SET NOT NULL;
ALTER TABLE public.internships ALTER COLUMN company SET NOT NULL;
