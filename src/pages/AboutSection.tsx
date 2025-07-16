
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutSection = () => {
  const handleCurriculumOverview = () => {
    // This will be implemented when PDF is provided
    console.log("Curriculum overview clicked");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Querencia</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-4">
            Ready to make something big together?
          </p>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-bold">
            Let's make you your own strength.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto py-12 px-4">
        {/* About Querencia */}
        <Card className="mb-12 border-green-200">
          <CardContent className="p-8">
            <p className="text-gray-700 leading-relaxed mb-6">
              At Querencia, we're here to help you unlock your potential. In India, especially in tier 2 and tier 3 cities, high school and university students often miss out on the mentorship and skills they need to thrive in today's fast-paced world. That's where we step in.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              We host skill development summits, covering a vast arena of skills such as public speaking and communication, writing to publish, linkedin mastery and AI awareness. Our primary curriculum, named the Querencia Skill Development Summit consists of 6 courses, namely Entrepreneurship and Startup Simulation, Public Speaking, Design Thinking, Financial and Media Literacy, Acing Speaking Competitions (WSDC, MUNs, debates, parliaments etc.), leadership and soft skills. You can find a comprehensive guide of the same below.
            </p>
            <div className="mb-6">
              <Button 
                onClick={handleCurriculumOverview}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                General Curriculum Overview
              </Button>
            </div>
            <p className="text-sm text-gray-600 italic">
              Note - The curriculum and mentors are adjusted keeping in mind the requirements of the school. The above mentioned curriculum is a generalised curriculum that we suggest to be undertaken by schools.
            </p>
          </CardContent>
        </Card>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-2xl text-green-600">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                At Querencia, we believe every young person deserves the tools to lead. Our mission is to:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Equip students with world class training in 21st century skills such as leadership, financial literacy, public speaking etc</li>
                <li>• Empower youth to find their voice and use it - for advocacy, impact and change</li>
                <li>• Engage communities through transformative initiatives like youth parliaments, slum education drives and women empowerment summit</li>
                <li>• Elevate untapped talent by offering mentorship and real world opportunities</li>
              </ul>
              <p className="text-gray-700 font-semibold mt-4">
                In short, our mission is to make teenagers their own strength.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-2xl text-green-600">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                To become India's most powerful youth-led movement for skill development - nurturing confident, compassionate changemakers from every corner of the country.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* What We Do */}
        <Card className="mb-12 border-green-200">
          <CardHeader>
            <CardTitle className="text-3xl text-center text-gray-900 mb-6">What We Do</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-6 text-center">
              At Querencia, we help young people discover the power of their voice—and use it to change the world.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8 text-center">
              We are a youth-led organization revolutionizing how students across India learn public speaking, leadership, and life skills through real, hands-on experiences.
            </p>
            
            <h3 className="text-xl font-semibold mb-6 text-gray-900">Our Key Initiatives:</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🎤</span>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Public Speaking & Communication Training</h4>
                  <p className="text-gray-600">Workshops, courses, and bootcamps that help students speak with clarity, confidence, and conviction.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-2xl">🗳</span>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Youth Parliaments & Debates</h4>
                  <p className="text-gray-600">Simulated parliamentary sessions that encourage critical thinking, policymaking, and civic engagement.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-2xl">👩‍🏫</span>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Slum Education & Community Teaching</h4>
                  <p className="text-gray-600">Bringing quality education and skill-building to underprivileged children through on-ground volunteering.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-2xl">♀️</span>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Women Empowerment Summits</h4>
                  <p className="text-gray-600">Creating safe spaces for dialogue, leadership training, and mentorship for young women.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-2xl">🐾</span>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Social Impact Drives</h4>
                  <p className="text-gray-600">From feeding stray dogs to donation campaigns, we turn compassion into action.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-2xl">🌐</span>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Skill Development Summits</h4>
                  <p className="text-gray-600">Covering digital literacy, financial literacy, coding, entrepreneurship, and more—preparing students for a future-ready world. Typically happening in cohorts for each individual school but online cohorts are also available.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <Card className="border-green-200">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-gray-900">Get In Touch</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-4">
              <p className="text-gray-700">
                Have questions or want to learn more about what we do? We'd love to hear from you!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">querencia.tgf@gmail.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-600">+91 9365477568</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default AboutSection;
