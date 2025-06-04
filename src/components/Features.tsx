
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Features = () => {
  const features = [
    {
      title: "Event Creation Studio",
      description: "Build stunning events with our drag-and-drop interface. Choose from professional templates or create custom designs that match your brand.",
      image: "/api/placeholder/600/400",
      benefits: ["Custom branding", "Template library", "Mobile responsive", "SEO optimized"]
    },
    {
      title: "Smart Ticketing System",
      description: "Maximize revenue with dynamic pricing, early bird discounts, and group rates. Integrate with popular payment processors for seamless transactions.",
      image: "/api/placeholder/600/400",
      benefits: ["Dynamic pricing", "Payment integration", "Tax handling", "Refund management"]
    },
    {
      title: "Professional Streaming",
      description: "Deliver crystal-clear HD streaming with multi-camera support, screen sharing, and interactive polls to keep your audience engaged.",
      image: "/api/placeholder/600/400",
      benefits: ["4K streaming", "Multi-camera", "Screen sharing", "Interactive polls"]
    },
    {
      title: "Speaker Management Hub",
      description: "Streamline speaker coordination with automated reminders, green room functionality, and session management tools.",
      image: "/api/placeholder/600/400",
      benefits: ["Speaker profiles", "Green room", "Session scheduling", "Automated reminders"]
    },
    {
      title: "Virtual Networking",
      description: "Foster meaningful connections with AI-powered attendee matching, virtual coffee chats, and digital business card exchanges.",
      image: "/api/placeholder/600/400",
      benefits: ["AI matching", "Breakout rooms", "Chat features", "Digital cards"]
    },
    {
      title: "Advanced Analytics",
      description: "Track engagement in real-time and generate comprehensive post-event reports to measure success and plan future events.",
      image: "/api/placeholder/600/400",
      benefits: ["Real-time data", "Engagement metrics", "Revenue tracking", "Custom reports"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Everything You Need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Succeed</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From initial planning to post-event analysis, EventFlow provides all the tools you need to create memorable experiences and drive results.
          </p>
        </div>

        <div className="space-y-20">
          {features.map((feature, index) => (
            <div key={feature.title} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <Card className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 border-0 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-slate-400">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">{index + 1}</span>
                      </div>
                      <p className="text-lg font-medium">Feature Preview</p>
                    </div>
                  </div>
                </Card>
              </div>
              
              <div className="lg:w-1/2 space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900">{feature.title}</h3>
                <p className="text-lg text-slate-600 leading-relaxed">{feature.description}</p>
                
                <div className="grid grid-cols-2 gap-4">
                  {feature.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                      <span className="text-slate-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
