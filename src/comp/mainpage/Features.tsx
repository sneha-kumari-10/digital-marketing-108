import { Button } from "@/components/ui/button"
import {
  Search,
  FileText,
  Share2,
  MousePointer2,
  Mail,
  BarChart,
  Target,
  Brain
} from "lucide-react"
import { useState } from "react"

const Features = () => {
  const [activeService, setActiveService] = useState(0)

  const mainFeatures = [
    {
      icon: Search,
      title: "Search Engine Optimization",
      description: "Optimize your website to rank higher on search engine results pages (SERPs).",
      color: "from-blue-500/20 to-cyan-500/20 dark:from-blue-500/10 dark:to-cyan-500/10",
      stats: { metric: "85%", label: "Organic Traffic Increase" }
    },
    {
      icon: FileText,
      title: "Content Marketing",
      description: "Create and distribute valuable content to attract and engage your target audience.",
      color: "from-purple-500/20 to-pink-500/20 dark:from-purple-500/10 dark:to-pink-500/10",
      stats: { metric: "3x", label: "Engagement Rate" }
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Engage audiences and promote products across major social platforms.",
      color: "from-green-500/20 to-emerald-500/20 dark:from-green-500/10 dark:to-emerald-500/10",
      stats: { metric: "200%", label: "Social Reach Growth" }
    }
  ]

  const marketingServices = [
    {
      icon: MousePointer2,
      title: "Pay-Per-Click (PPC)",
      description: "Strategic ad campaigns with measurable ROI and real-time optimization",
      metrics: ["Average 300% ROI", "Targeted Reach", "Real-time Analytics"]
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Personalized email campaigns that convert subscribers into customers",
      metrics: ["45% Open Rate", "3.5% CTR", "Marketing Automation"]
    },
    {
      icon: Brain,
      title: "AI-Powered Marketing",
      description: "Leverage artificial intelligence for smarter marketing decisions",
      metrics: ["Predictive Analytics", "Smart Segmentation", "Automated Optimization"]
    }
  ]

  const interactiveFeatures = [
    {
      title: "SEO Score Simulator",
      description: "Test your website's SEO health with our real-time analyzer",
      action: "Try Now"
    },
    {
      title: "Content Strategy Builder",
      description: "Create your custom content calendar and distribution plan",
      action: "Start Building"
    },
    {
      title: "Campaign ROI Calculator",
      description: "Calculate potential returns on your marketing investments",
      action: "Calculate"
    }
  ]

  return (
    <section id="services" className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4F46E510_1px,transparent_1px),linear-gradient(to_bottom,#4F46E510_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute right-0 top-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
          <div className="aspect-[1400/678] w-[87.5rem] bg-gradient-to-tr from-purple-500/30 to-blue-500/30 opacity-20"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center rounded-full border border-purple-500/20 px-4 py-1.5 text-sm font-medium bg-purple-500/5 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">Digital Marketing Excellence</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Comprehensive
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600"> Marketing Solutions</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Transform your digital presence with our cutting-edge marketing services designed 
            to drive growth and maximize ROI.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {mainFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className="relative group cursor-pointer"
              onClick={() => setActiveService(index)}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className={`relative p-8 rounded-3xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-purple-500/10 hover:border-purple-500/20 transition-all duration-300 ${
                activeService === index ? 'border-purple-500/40 shadow-lg' : ''
              }`}>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-7 w-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <div className="flex items-center gap-2 text-purple-600">
                  <BarChart className="h-4 w-4" />
                  <span className="text-sm font-medium">{feature.stats.metric} {feature.stats.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Features */}
        <div className="relative mb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-3xl backdrop-blur-xl"></div>
          <div className="relative grid md:grid-cols-3 gap-8 p-8 rounded-3xl">
            {interactiveFeatures.map((feature) => (
              <div key={feature.title} className="text-center group">
                <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <Button 
                    variant="outline"
                    className="border-purple-500/20 hover:border-purple-500/40 group-hover:bg-gradient-to-r from-purple-600 to-blue-600 group-hover:text-white transition-all duration-300"
                  >
                    {feature.action}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Marketing Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {marketingServices.map((service) => (
            <div
              key={service.title}
              className="p-6 rounded-xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg border border-purple-500/10 hover:border-purple-500/20 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                  <service.icon className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold">{service.title}</h3>
              </div>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <div className="space-y-2">
                {service.metrics.map((metric, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-purple-600" />
                    <span className="text-sm">{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold">
            Start Your Digital Marketing Journey!
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your digital presence? Our team of experts will help you 
            create a customized strategy that drives results.
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              Get Started Now
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-purple-500/20 hover:border-purple-500/40"
            >
              View Success Stories
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
