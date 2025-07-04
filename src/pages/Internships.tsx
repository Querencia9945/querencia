
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQBot from "@/components/FAQBot";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const Internships = () => {
  const [internships, setInternships] = useLocalStorage('internships', [
    {
      id: 1,
      title: "Software Development Intern",
      company: "TechCorp Solutions",
      location: "Remote / San Francisco, CA",
      duration: "3 months",
      type: "Paid",
      description: "Join our development team to work on cutting-edge web applications using React, Node.js, and cloud technologies.",
      requirements: ["Computer Science or related field", "JavaScript proficiency", "Git experience"],
      deadline: "2024-08-15",
      applied: false
    },
    {
      id: 2,
      title: "Digital Marketing Intern",
      company: "Creative Agency Inc",
      location: "New York, NY",
      duration: "6 months",
      type: "Paid",
      description: "Learn digital marketing strategies, content creation, and social media management in a fast-paced agency environment.",
      requirements: ["Marketing or Communications background", "Social media savvy", "Creative mindset"],
      deadline: "2024-08-01",
      applied: false
    },
    {
      id: 3,
      title: "UX/UI Design Intern",
      company: "Design Studio",
      location: "Remote",
      duration: "4 months",
      type: "Stipend",
      description: "Work alongside experienced designers to create user-centered designs for mobile and web applications.",
      requirements: ["Design portfolio", "Figma/Sketch proficiency", "User research interest"],
      deadline: "2024-07-30",
      applied: false
    },
    {
      id: 4,
      title: "Data Analytics Intern",
      company: "DataInsights Co",
      location: "Chicago, IL",
      duration: "3 months",
      type: "Paid",
      description: "Analyze large datasets, create visualizations, and contribute to data-driven decision making processes.",
      requirements: ["Statistics or Data Science background", "Python/R knowledge", "SQL experience"],
      deadline: "2024-08-10",
      applied: false
    }
  ]);

  const handleApply = (internshipId) => {
    console.log("Applying for internship:", internshipId);
    setInternships(internships => 
      internships.map(internship => 
        internship.id === internshipId 
          ? { ...internship, applied: true }
          : internship
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Internship Opportunities</h1>
          <p className="text-gray-600">Discover exciting internship programs to kickstart your career.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {internships.map((internship) => (
            <Card key={internship.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-1">{internship.title}</CardTitle>
                    <CardDescription className="text-lg font-medium text-green-600">
                      {internship.company}
                    </CardDescription>
                  </div>
                  <Badge variant={internship.type === 'Paid' ? 'default' : 'secondary'}>
                    {internship.applied ? 'Applied' : internship.type}
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                  <span>📍 {internship.location}</span>
                  <span>⏱️ {internship.duration}</span>
                  <span>📅 Apply by {internship.deadline}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{internship.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                    {internship.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-2">
                  <Button 
                    onClick={() => handleApply(internship.id)}
                    className="bg-green-600 hover:bg-green-700"
                    disabled={internship.applied}
                  >
                    {internship.applied ? 'Applied' : 'Apply Now'}
                  </Button>
                  <Button variant="outline">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Why Choose Our Internship Programs?</CardTitle>
            <CardDescription>
              Our internship programs are designed to provide real-world experience and career growth opportunities.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-semibold mb-2">Hands-on Experience</h3>
                <p className="text-sm text-gray-600">Work on real projects with immediate impact</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="font-semibold mb-2">Mentorship</h3>
                <p className="text-sm text-gray-600">Learn from experienced professionals</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="font-semibold mb-2">Career Growth</h3>
                <p className="text-sm text-gray-600">Build skills for future opportunities</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
      <FAQBot />
    </div>
  );
};

export default Internships;
