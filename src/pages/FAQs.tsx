
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FAQs = () => {
  const faqs = [
    {
      question: "How do I register for events?",
      answer: "You can register for events by visiting the Events page, selecting an event you're interested in, and clicking the 'Register' button. You'll need to be logged in to complete the registration process."
    },
    {
      question: "What types of internships are available?",
      answer: "We offer internships in various fields including technology, marketing, business development, design, and more. Visit our Internships page to see current opportunities and application requirements."
    },
    {
      question: "How do I mark my attendance for events?",
      answer: "After attending an event, you can fill out the attendance form in your dashboard. This helps us track participation and may be required for certain programs or certifications."
    },
    {
      question: "Can I cancel my event registration?",
      answer: "Yes, you can cancel your registration up to 24 hours before the event starts. Please contact our support team or use the cancellation option in your dashboard."
    },
    {
      question: "How do I access my dashboard?",
      answer: "After logging in, you'll be automatically redirected to your dashboard. You can also access it anytime by clicking the 'Dashboard' button in the top navigation bar."
    },
    {
      question: "What is the difference between visitor and employee accounts?",
      answer: "Visitor accounts can register for events, mark attendance, and manage personal tasks. Employee accounts have additional privileges like creating events, managing content, and accessing analytics."
    },
    {
      question: "How do I get notified about new events?",
      answer: "Make sure your email notifications are enabled in your profile settings. We'll send you updates about new events, registration deadlines, and other important announcements."
    },
    {
      question: "Who can I contact for technical support?",
      answer: "For technical issues, please reach out to our support team through the contact information in the footer, or email us directly at support@querencia.com."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h1>
          <p className="text-gray-600">Find answers to common questions about using Querencia.</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Common Questions</CardTitle>
            <CardDescription>
              Browse through our most frequently asked questions to find the help you need.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Still need help?</CardTitle>
            <CardDescription>
              If you couldn't find the answer you're looking for, don't hesitate to reach out to our team.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Our support team is here to help you with any questions or issues you might have. 
              You can contact us through the following methods:
            </p>
            <div className="space-y-2 text-sm">
              <p><strong>Email:</strong> support@querencia.com</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM EST</p>
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default FAQs;
