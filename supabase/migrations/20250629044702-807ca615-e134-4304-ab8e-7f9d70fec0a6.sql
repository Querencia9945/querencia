
-- Add user_name column to testimonials table to store the name of the person giving the testimonial
ALTER TABLE public.testimonials ADD COLUMN user_name TEXT;
