
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutSection = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Querencia</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            A comprehensive platform designed to connect people, foster professional growth, 
            and create meaningful experiences through events and opportunities.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto py-12 px-4">
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                To create a vibrant ecosystem where professionals, students, and organizations 
                can connect, learn, and grow together. We believe in the power of community 
                and the importance of providing accessible opportunities for career development 
                and personal growth.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-green-600">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                To become the leading platform that bridges the gap between talent and 
                opportunity, fostering a world where everyone has access to the resources, 
                connections, and experiences they need to achieve their professional aspirations.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* What We Do */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-3xl text-center text-gray-900 mb-6">What We Do</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎪</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Event Management</h3>
                <p className="text-gray-600">
                  We organize and facilitate various events including workshops, seminars, 
                  networking sessions, and professional development programs.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💼</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Career Opportunities</h3>
                <p className="text-gray-600">
                  We connect talented individuals with internship programs and career 
                  opportunities that align with their skills and aspirations.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🌐</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Community Building</h3>
                <p className="text-gray-600">
                  We foster a supportive community where members can share experiences, 
                  seek guidance, and build lasting professional relationships.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Our Values */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-3xl text-center text-gray-900 mb-6">Our Values</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-blue-600 mb-2">Innovation</h4>
                <p className="text-sm text-gray-600">
                  We embrace new ideas and technologies to continuously improve our platform.
                </p>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-green-600 mb-2">Inclusivity</h4>
                <p className="text-sm text-gray-600">
                  We welcome everyone regardless of background, experience, or career stage.
                </p>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-purple-600 mb-2">Excellence</h4>
                <p className="text-sm text-gray-600">
                  We strive for the highest quality in everything we do and deliver.
                </p>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-orange-600 mb-2">Growth</h4>
                <p className="text-sm text-gray-600">
                  We are committed to the continuous growth and development of our community.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center text-gray-900">Get In Touch</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-4">
              <p className="text-gray-700">
                Have questions or want to learn more about what we do? We'd love to hear from you!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">hello@querencia.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Office Hours</h4>
                  <p className="text-gray-600">Mon-Fri, 9AM-6PM EST</p>
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
