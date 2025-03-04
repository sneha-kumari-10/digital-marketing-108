import { Button } from "@/components/ui/button"
import { 
  ArrowRight, Target, 
  TrendingUp, Globe, Users, MessageCircle, 
  LineChart
} from "lucide-react"
import { useState, useEffect } from "react"

const Hero = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
      title: "Digital Strategy",
      desc: "Data-driven marketing solutions"
    },
    {
      url: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1200",
      title: "Social Media",
      desc: "Engaging content that converts"
    },
    {
      url: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=1200",
      title: "SEO Excellence",
      desc: "Rank higher, grow faster"
    },
    {
      url: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200",
      title: "Analytics",
      desc: "Real-time performance tracking"
    }
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length)
        setIsAnimating(false)
      }, 500)
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length])

  const features = [
    { 
      icon: TrendingUp, 
      label: "Growth Focus", 
      desc: "10x Your Revenue",
      color: "text-emerald-600"
    },
    { 
      icon: Globe, 
      label: "Global Reach", 
      desc: "Worldwide Impact",
      color: "text-blue-600"
    },
    { 
      icon: Target, 
      label: "Precision", 
      desc: "Targeted Campaigns",
      color: "text-purple-600"
    },
  ]

  const trustIndicators = [
    { number: "500+", label: "Happy Clients" },
    { number: "95%", label: "Success Rate" },
    { number: "150M+", label: "Ad Spend Managed" },
  ]

  return (
    <section id="hero" role="banner" aria-label="Digital Marketing Services" className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4F46E510_1px,transparent_1px),linear-gradient(to_bottom,#4F46E510_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute right-0 top-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
          <div className="aspect-[1400/678] w-[87.5rem] bg-gradient-to-tr from-purple-500/30 to-blue-500/30 opacity-20"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-purple-500/20 px-4 py-1.5 text-sm font-medium bg-purple-500/5 animate-pulse">
                <span className="text-purple-600 dark:text-purple-400" role="text">🚀 Limited Time Offer</span>
                <span className="mx-2 text-purple-600 dark:text-purple-400">•</span>
                <span className="text-purple-600 dark:text-purple-400">Free Marketing Audit</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
                Supercharge Your <br />
                Digital <span className="relative inline-block dark:text-white text-black">
                  Growth
                  <div className="absolute -bottom-2 left-0 w-full h-2 bg-purple-500/20 dark:bg-purple-400/20 rounded-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 dark:from-purple-400 dark:to-blue-400 rounded-full animate-pulse opacity-40"></div>
                  </div>
                </span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Transform your online presence with data-driven strategies. We help businesses 
                scale through innovative digital marketing solutions that deliver real results.
              </p>

              {/* Service Pills */}
              <div className="flex flex-wrap gap-2" role="list">
                {[
                  "SEO Optimization", 
                  "Social Media", 
                  "Content Marketing", 
                  "PPC Campaigns",
                  "Email Marketing",
                  "Analytics"
                ].map((service) => (
                  <span 
                    key={service}
                    role="listitem"
                    className="px-3 py-1 rounded-full text-sm bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-700 dark:text-purple-300 hover:scale-105 transition-transform cursor-pointer"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 py-6">
              {trustIndicators.map((item) => (
                <div 
                  key={item.label}
                  className="text-center p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/20 transition-all hover:transform hover:scale-105"
                >
                  <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">{item.number}</h3>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 group"
              >
                Get Started Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="group border-purple-500/20 hover:border-purple-500/40"
              >
                View Case Studies
                <span className="ml-2 text-purple-600 transition-transform group-hover:translate-x-1">→</span>
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {features.map((feature) => (
                <div 
                  key={feature.label}
                  className="flex items-center gap-3 p-4 rounded-lg border border-purple-500/10 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:border-purple-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5 group"
                >
                  <feature.icon className={`h-8 w-8 ${feature.color} transition-transform group-hover:scale-110`} />
                  <div>
                    <p className="font-semibold">{feature.label}</p>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right content */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 mix-blend-multiply"></div>
              <img 
                src={images[currentImageIndex].url}
                alt={images[currentImageIndex].title}
                className={`w-full h-full object-cover transition-all duration-500 ${
                  isAnimating ? "scale-105 opacity-80" : "scale-100 opacity-100"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-medium text-lg">{images[currentImageIndex].title}</p>
                  <p className="text-sm text-white/80">{images[currentImageIndex].desc}</p>
                </div>
              </div>
            </div>

            {/* Image indicators */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentImageIndex === index 
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 w-6" 
                      : "bg-purple-500/30 hover:bg-purple-500/50"
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>

            {/* Floating cards */}
            <div className="absolute -bottom-6 -left-6 bg-white/95 dark:bg-gray-900/95 p-4 rounded-xl shadow-lg border border-purple-500/10 max-w-[200px] hover:scale-105 transition-transform hover:border-purple-500/20 hover:shadow-xl backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <MessageCircle className="h-10 w-10 text-purple-600" />
                <div>
                  <p className="font-medium">24/7 Support</p>
                  <p className="text-sm text-muted-foreground">Always here to help</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white/95 dark:bg-gray-900/95 p-4 rounded-xl shadow-lg border border-purple-500/10 hover:scale-105 transition-transform hover:border-purple-500/20 hover:shadow-xl backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-purple-600" />
                <p className="font-medium">Expert Team</p>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <LineChart className="h-5 w-5 text-purple-600" />
                <p className="font-medium">ROI Focused</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
