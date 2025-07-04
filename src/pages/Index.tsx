
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQBot from "@/components/FAQBot";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
      <Header />
      
      {/* Hero Section - Ultra Classy Design */}
      <section className="relative py-32 px-4 min-h-screen flex items-center justify-center overflow-hidden">
        {/* Sophisticated background patterns */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Elegant geometric patterns */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute top-20 left-20 w-96 h-96 border border-emerald-200 rounded-full"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 border border-emerald-300 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-emerald-100 rounded-full"></div>
          </div>
          
          {/* Subtle gradient mesh */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/20 via-transparent via-transparent to-slate-50/20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
          
          {/* Floating elegant elements */}
          <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-emerald-400/40 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-slate-400/40 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 right-1/6 w-1.5 h-1.5 bg-emerald-300/40 rounded-full animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Sophisticated Logo Design */}
          <div className="mb-16 animate-fade-in">
            {/* Premium Logo Container */}
            <div className="w-72 h-72 mx-auto mb-16 relative group">
              {/* Subtle rotating rings */}
              <div className="absolute inset-0 rounded-full border border-emerald-200/30 animate-spin opacity-60" style={{animationDuration: '20s'}}></div>
              <div className="absolute inset-4 rounded-full border border-slate-200/40 animate-spin opacity-40" style={{animationDirection: 'reverse', animationDuration: '25s'}}></div>
              
              {/* Main sophisticated logo circle */}
              <div className="w-full h-full rounded-full bg-gradient-to-br from-white via-emerald-50/30 to-white shadow-2xl border border-emerald-100/50 flex items-center justify-center relative overflow-hidden group-hover:shadow-3xl transition-all duration-700">
                {/* Elegant decorative elements */}
                <div className="absolute -top-6 -right-6 text-emerald-600/70 text-2xl transform rotate-45 animate-bounce opacity-80" style={{animationDelay: '0s', animationDuration: '3s'}}>🌿</div>
                <div className="absolute -bottom-6 -left-6 text-emerald-700/70 text-2xl transform -rotate-45 animate-bounce opacity-80" style={{animationDelay: '1s', animationDuration: '3s'}}>🌿</div>
                <div className="absolute top-8 -left-8 text-emerald-600/60 text-xl transform -rotate-12 animate-bounce opacity-70" style={{animationDelay: '2s', animationDuration: '3s'}}>🌿</div>
                <div className="absolute bottom-8 -right-8 text-emerald-700/60 text-xl transform rotate-12 animate-bounce opacity-70" style={{animationDelay: '3s', animationDuration: '3s'}}>🌿</div>
                
                {/* Refined sparkles */}
                <div className="absolute top-14 right-14 text-amber-400/60 text-sm animate-ping opacity-60" style={{animationDuration: '3s'}}>✨</div>
                <div className="absolute bottom-14 left-14 text-amber-300/60 text-sm animate-ping opacity-60" style={{animationDelay: '1.5s', animationDuration: '3s'}}>✨</div>
                
                {/* Center content with premium typography */}
                <div className="text-center z-10 relative">
                  <h2 className="text-emerald-800 font-bold text-xl tracking-[0.3em] mb-2 font-serif">QUERENCIA</h2>
                  <p className="text-slate-600 text-sm tracking-[0.2em] font-light">Be your own strength</p>
                </div>
                
                {/* Sophisticated Q backdrop */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-emerald-800/8 font-serif text-[160px] leading-none">Q</div>
                </div>
                
                {/* Premium glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500/10 to-slate-500/10 blur-2xl opacity-60"></div>
              </div>
            </div>
            
            {/* Elegant main heading */}
            <div className="space-y-8">
              <h1 className="text-7xl font-serif font-bold bg-gradient-to-r from-slate-800 via-emerald-800 to-slate-900 bg-clip-text text-transparent mb-4 tracking-wider leading-tight">
                QUERENCIA
              </h1>
              <p className="text-2xl text-slate-700 mb-12 font-light tracking-[0.1em] max-w-2xl mx-auto leading-relaxed">
                Discover your inner sanctuary of strength and growth
              </p>
              
              {/* Premium CTA Button */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 via-slate-600 to-emerald-700 rounded-full blur-lg opacity-25 group-hover:opacity-40 transition-all duration-500"></div>
                <Button 
                  size="lg"
                  onClick={() => navigate('/events')}
                  className="relative bg-gradient-to-r from-emerald-700 to-slate-800 hover:from-emerald-800 hover:to-slate-900 text-white text-lg px-14 py-7 rounded-full font-medium tracking-[0.1em] shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 border border-white/20"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    BEGIN YOUR JOURNEY
                    <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-full"></div>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Refined floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-emerald-400/50 rounded-full animate-ping" style={{animationDuration: '4s'}}></div>
          <div className="absolute top-2/3 right-1/3 w-0.5 h-0.5 bg-slate-400/50 rounded-full animate-ping" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-emerald-300/50 rounded-full animate-ping" style={{animationDelay: '3s', animationDuration: '6s'}}></div>
        </div>
      </section>

      {/* Premium Statistics Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-50/50 to-emerald-50/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="group transform hover:scale-105 transition-all duration-500 p-8 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl">
              <h3 className="text-6xl font-serif font-bold bg-gradient-to-br from-emerald-700 to-slate-800 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">4</h3>
              <p className="text-lg text-slate-700 font-light tracking-wide">Cities Reached</p>
            </div>
            <div className="group transform hover:scale-105 transition-all duration-500 p-8 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl">
              <h3 className="text-6xl font-serif font-bold bg-gradient-to-br from-emerald-700 to-slate-800 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">100+</h3>
              <p className="text-lg text-slate-700 font-light tracking-wide">Students Empowered</p>
            </div>
            <div className="group transform hover:scale-105 transition-all duration-500 p-8 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl">
              <h3 className="text-6xl font-serif font-bold bg-gradient-to-br from-emerald-700 to-slate-800 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">10+</h3>
              <p className="text-lg text-slate-700 font-light tracking-wide">Success Stories</p>
            </div>
          </div>
        </div>
      </section>

      {/* Elegant Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-white/80 to-emerald-50/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold bg-gradient-to-r from-slate-800 to-emerald-800 bg-clip-text text-transparent mb-12 tracking-wide">CONNECT WITH US</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-4xl mx-auto">
            <div className="text-left transform hover:scale-105 transition-all duration-500 p-8 rounded-2xl bg-white/30 backdrop-blur-sm border border-white/20 shadow-lg">
              <h3 className="text-2xl font-serif font-bold text-slate-800 mb-3 tracking-wide">
                Ready to begin your 
                <span className="bg-gradient-to-r from-emerald-700 to-slate-800 bg-clip-text text-transparent block">transformative journey?</span>
              </h3>
            </div>
            
            <div className="text-right transform hover:scale-105 transition-all duration-500 p-8 rounded-2xl bg-white/30 backdrop-blur-sm border border-white/20 shadow-lg">
              <div className="mb-6 group">
                <p className="text-sm font-medium text-slate-700 mb-1 tracking-wide uppercase">Email</p>
                <p className="text-lg text-slate-800 group-hover:text-emerald-700 transition-colors duration-300 font-light">contact@querencia.org</p>
              </div>
              <div className="group">
                <p className="text-sm font-medium text-slate-700 mb-1 tracking-wide uppercase">Phone</p>
                <p className="text-lg text-slate-800 group-hover:text-emerald-700 transition-colors duration-300 font-light">+91 9365477568</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Features Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-50/30 to-emerald-50/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center bg-gradient-to-r from-slate-800 to-emerald-800 bg-clip-text text-transparent mb-16 tracking-wide">
            Explore Our Offerings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-translate-y-2 bg-white/60 backdrop-blur-sm border-emerald-100/50 group overflow-hidden" onClick={() => navigate('/events')}>
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="bg-gradient-to-r from-emerald-700 to-slate-800 bg-clip-text text-transparent group-hover:from-emerald-800 group-hover:to-slate-900 transition-all duration-300 font-serif">Events Management</CardTitle>
                <CardDescription className="group-hover:text-emerald-700 transition-colors duration-300 font-light">
                  Discover transformative events, register for exclusive sessions, and track your journey of growth.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <Button variant="ghost" className="text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50 group-hover:scale-105 transition-all duration-300 font-medium tracking-wide">
                  Explore Events →
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-translate-y-2 bg-white/60 backdrop-blur-sm border-emerald-100/50 group overflow-hidden" onClick={() => navigate('/internships')}>
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="bg-gradient-to-r from-emerald-700 to-slate-800 bg-clip-text text-transparent group-hover:from-emerald-800 group-hover:to-slate-900 transition-all duration-300 font-serif">Internships</CardTitle>
                <CardDescription className="group-hover:text-emerald-700 transition-colors duration-300 font-light">
                  Unlock career opportunities and advance your professional journey with our curated programs.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <Button variant="ghost" className="text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50 group-hover:scale-105 transition-all duration-300 font-medium tracking-wide">
                  View Opportunities →
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-translate-y-2 bg-white/60 backdrop-blur-sm border-emerald-100/50 group overflow-hidden" onClick={() => navigate('/testimonials')}>
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="bg-gradient-to-r from-emerald-700 to-slate-800 bg-clip-text text-transparent group-hover:from-emerald-800 group-hover:to-slate-900 transition-all duration-300 font-serif">Success Stories</CardTitle>
                <CardDescription className="group-hover:text-emerald-700 transition-colors duration-300 font-light">
                  Be inspired by testimonials from our community and their transformative journeys with Querencia.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <Button variant="ghost" className="text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50 group-hover:scale-105 transition-all duration-300 font-medium tracking-wide">
                  Read Stories →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <FAQBot />
    </div>
  );
};

export default Index;
