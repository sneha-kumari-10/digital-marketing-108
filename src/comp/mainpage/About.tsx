import { Button } from "@/components/ui/button"
import { 
  Users, LineChart, Target, Award, 
  Rocket, Globe, Laptop, Zap, Search
} from "lucide-react"
import { useState, useEffect } from "react"

const About = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const projects = [
    {
      photo: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200",
      title: "E-commerce Growth",
      result: "250% Revenue Increase"
    },
    {
      photo: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c2a2?q=80&w=1200",
      title: "SaaS Marketing",
      result: "10x Lead Generation"
    },
    {
      photo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
      title: "Brand Strategy",
      result: "95% Brand Recognition"
    },
    {
      photo: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200",
      title: "Digital Transformation",
      result: "400% Online Presence"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length)
        setIsAnimating(false)
      }, 500)
    }, 5000)

    return () => clearInterval(interval)
  }, [projects.length])

  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "500+", label: "Projects Delivered" },
    { number: "95%", label: "Client Retention" },
    { number: "150M+", label: "Ad Spend Managed" },
  ]

  const values = [
    {
      icon: Rocket,
      title: "Growth-Driven",
      description: "We focus on scalable strategies that deliver measurable business growth and ROI."
    },
    {
      icon: Target,
      title: "Data-Focused",
      description: "Every decision is backed by analytics and real-time market insights."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Expand your business globally with our international marketing expertise."
    },
    {
      icon: Zap,
      title: "Fast Results",
      description: "Quick implementation with rapid optimization for maximum performance."
    }
  ]

  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4F46E510_1px,transparent_1px),linear-gradient(to_bottom,#4F46E510_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 bottom-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
          <div className="aspect-[1400/678] w-[87.5rem] bg-gradient-to-tr from-purple-500/30 to-blue-500/30 opacity-20"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        {/* Header Section */}
        <header className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center rounded-full border border-purple-500/20 px-4 py-1.5 text-sm font-medium bg-purple-500/5 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">Why Choose Us</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Transforming Businesses Through
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600"> Digital Excellence</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We combine creative strategy with data-driven insights to help businesses 
            scale their digital presence and achieve unprecedented growth.
          </p>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat) => (
            <div 
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/20 transition-all duration-300 hover:transform hover:scale-105"
            >
              <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
                {stat.number}
              </h3>
              <p className="text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">
              Your Partner in 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600"> Digital Success</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              As a leading digital marketing agency, we've helped hundreds of businesses 
              transform their online presence and achieve remarkable growth. Our data-driven 
              approach ensures that every strategy we implement is optimized for maximum ROI.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: Search, text: "SEO Mastery" },
                { icon: Users, text: "Social Growth" },
                { icon: LineChart, text: "Performance Marketing" },
                { icon: Laptop, text: "Digital Innovation" }
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 group">
                  <item.icon className="h-6 w-6 text-purple-600 transition-transform group-hover:scale-110" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-4 pt-4">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                View Case Studies
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-purple-500/20 hover:border-purple-500/40"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <div 
              className={`aspect-square rounded-2xl overflow-hidden transition-transform duration-500 ${
                isAnimating ? 'scale-105 opacity-80' : 'scale-100 opacity-100'
              }`}
            >
              <img 
                src={projects[currentProjectIndex].photo} 
                alt={projects[currentProjectIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-medium text-lg">{projects[currentProjectIndex].title}</p>
                <p className="text-purple-200">{projects[currentProjectIndex].result}</p>
              </div>
            </div>
            {/* Floating Achievement Card */}
            <div 
              className="absolute -bottom-6 -right-6 bg-white/95 dark:bg-gray-900/95 p-6 rounded-xl shadow-lg border border-purple-500/10 max-w-[250px] backdrop-blur-sm hover:scale-105 transition-transform"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="font-semibold">Top Rated</p>
                  <p className="text-sm text-purple-600">Agency 2024</p>
                </div>
              </div>
              <div className="h-2 bg-purple-500/10 rounded-full">
                <div 
                  className="h-full w-[95%] bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="space-y-12">
          <header className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
            <p className="text-muted-foreground">
              Driven by innovation and focused on delivering measurable results
            </p>
          </header>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div 
                key={value.title}
                className="p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/20 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className="h-12 w-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                  <value.icon className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-8">Client Success Stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { text: "Their strategic approach helped us achieve a 300% increase in online sales.", author: "Sarah Chen, E-commerce Director" },
              { text: "The ROI we've seen from their campaigns has been exceptional. Best in the industry!", author: "Mike Johnson, CEO" },
              { text: "They transformed our digital presence and helped us become an industry leader.", author: "Alex Thompson, Marketing Head" }
            ].map((testimonial) => (
              <figure 
                key={testimonial.author}
                className="p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/20 transition-all duration-300 hover:transform hover:scale-105"
              >
                <blockquote className="text-sm text-muted-foreground mb-4">{testimonial.text}</blockquote>
                <figcaption className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
                  - {testimonial.author}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
