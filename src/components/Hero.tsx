
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Users, Video, ChartBar } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 pt-20 pb-16">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Create <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Unforgettable</span> Events
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            EventFlow is the all-in-one platform that transforms how you create, manage, and monetize virtual and hybrid events. From ticketing to analytics, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg">
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Feature cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <Calendar className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-white text-lg font-semibold mb-2">Smart Ticketing</h3>
            <p className="text-slate-300 text-sm">Dynamic pricing and seamless payment processing</p>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <Video className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-white text-lg font-semibold mb-2">HD Streaming</h3>
            <p className="text-slate-300 text-sm">Professional-grade streaming with interactive features</p>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <Users className="w-12 h-12 text-emerald-400 mb-4" />
            <h3 className="text-white text-lg font-semibold mb-2">Virtual Networking</h3>
            <p className="text-slate-300 text-sm">AI-powered attendee matching and breakout rooms</p>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <ChartBar className="w-12 h-12 text-orange-400 mb-4" />
            <h3 className="text-white text-lg font-semibold mb-2">Analytics</h3>
            <p className="text-slate-300 text-sm">Real-time insights and post-event reporting</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;
