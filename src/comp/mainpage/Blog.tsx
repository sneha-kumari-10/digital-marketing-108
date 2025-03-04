import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Search,
  LayoutGrid,
  LayoutList,
  ChevronLeft,
  ChevronRight,
  Calendar,
  User2
} from "lucide-react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Blog = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("latest")

  const featuredPosts = [
    {
      id: 1,
      title: "The Future of AI in Digital Marketing",
      image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?q=80&w=1200",
      excerpt: "Discover how artificial intelligence is revolutionizing digital marketing strategies and customer engagement.",
      category: "AI & Technology",
      date: "2024-03-15",
      author: "Sarah Chen, AI Specialist"
    },
    {
      id: 2,
      title: "Social Media Marketing Trends 2024",
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1200",
      excerpt: "Explore the latest social media strategies that are driving engagement and conversions.",
      category: "Social Media",
      date: "2024-03-14",
      author: "Mike Johnson, Social Media Expert"
    },
    {
      id: 3,
      title: "SEO Strategies That Actually Work",
      image: "https://images.unsplash.com/photo-1571844307880-751c6d86f3f3?q=80&w=1200",
      excerpt: "Learn about proven SEO techniques that will boost your website's ranking in 2024.",
      category: "SEO",
      date: "2024-03-13",
      author: "Alex Thompson, SEO Strategist"
    }
  ]

  const blogPosts = [
    {
      id: 4,
      title: "Content Marketing Mastery",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200",
      excerpt: "Essential strategies for creating content that engages and converts your target audience.",
      category: "Content Strategy",
      date: "2024-03-12",
      author: "Emma White, Content Director"
    },
    {
      id: 5,
      title: "Email Marketing Automation",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1200",
      excerpt: "Maximize your ROI with smart email automation and personalization techniques.",
      category: "Email Marketing",
      date: "2024-03-11",
      author: "Lisa Brown, Marketing Automation"
    },
    {
      id: 6,
      title: "PPC Campaign Optimization",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
      excerpt: "Advanced techniques for optimizing your PPC campaigns for better conversions.",
      category: "PPC",
      date: "2024-03-10",
      author: "Robert Lee, PPC Expert"
    },
    {
      id: 7,
      title: "Data-Driven Marketing",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
      excerpt: "How to use data analytics to make smarter marketing decisions.",
      category: "Analytics",
      date: "2024-03-09",
      author: "Anna Martinez, Data Analyst"
    },
    {
      id: 8,
      title: "Brand Building in Digital Age",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1200",
      excerpt: "Strategies for building a strong brand presence in the digital landscape.",
      category: "Branding",
      date: "2024-03-08",
      author: "David Thompson, Brand Strategist"
    },
    {
      id: 9,
      title: "E-commerce Marketing Guide",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
      excerpt: "Complete guide to marketing your e-commerce business effectively.",
      category: "E-commerce",
      date: "2024-03-07",
      author: "Rachel Green, E-commerce Specialist"
    }
  ]

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <ChevronRight className="text-white" />,
    prevArrow: <ChevronLeft className="text-white" />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }
    ]
  }

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.author.toLowerCase().includes(searchQuery.toLowerCase())
  ).sort((a, b) => {
    if (sortBy === "latest") return new Date(b.date).getTime() - new Date(a.date).getTime()
    if (sortBy === "oldest") return new Date(a.date).getTime() - new Date(b.date).getTime()
    return 0
  })

  return (
    <section id="portfolio" className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4F46E510_1px,transparent_1px),linear-gradient(to_bottom,#4F46E510_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 bottom-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
          <div className="aspect-[1400/678] w-[87.5rem] bg-gradient-to-tr from-purple-500/30 to-blue-500/30 opacity-20"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center rounded-full border border-purple-500/20 px-4 py-1.5 text-sm font-medium bg-purple-500/5 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">Digital Marketing Insights</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Latest Trends in
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600"> Digital Marketing</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Stay ahead of the curve with our expert insights on digital marketing strategies, trends, and best practices
          </p>
        </div>

        {/* Featured Posts Carousel */}
        <div className="mb-16 relative rounded-2xl overflow-hidden shadow-xl">
          <Slider {...sliderSettings}>
            {featuredPosts.map(post => (
              <div key={post.id} className="relative h-[500px]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium mb-4">
                    {post.category}
                  </span>
                  <h2 className="text-3xl font-bold text-white mb-4">{post.title}</h2>
                  <p className="text-white/80 mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-white/60">
                    <span className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-2">
                      <User2 className="h-4 w-4" />
                      {post.author}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-purple-600" />
            <Input
              placeholder="Search posts..."
              className="pl-10 border-purple-500/20 focus:border-purple-500/40"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-4">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40 border-purple-500/20">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">Latest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex items-center gap-2 border border-purple-500/20 rounded-lg p-1">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="icon"
                className={viewMode === "grid" ? "bg-gradient-to-r from-purple-600 to-blue-600" : ""}
                onClick={() => setViewMode("grid")}
              >
                <LayoutGrid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="icon"
                className={viewMode === "list" ? "bg-gradient-to-r from-purple-600 to-blue-600" : ""}
                onClick={() => setViewMode("list")}
              >
                <LayoutList className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid/List */}
        <div className={viewMode === "grid" 
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          : "space-y-8"
        }>
          {filteredPosts.map(post => (
            <div
              key={post.id}
              className={`group rounded-xl overflow-hidden border border-purple-500/10 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm hover:border-purple-500/20 transition-all duration-300 hover:shadow-lg ${
                viewMode === "list" ? "flex gap-6" : ""
              }`}
            >
              <div className={`relative overflow-hidden ${viewMode === "list" ? "w-48" : "aspect-video"}`}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
              </div>
              <div className="p-6 flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-700 dark:text-purple-300 text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 transition-all">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-purple-600" />
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-2">
                    <User2 className="h-4 w-4 text-purple-600" />
                    {post.author}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 text-center">
          <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-purple-500/5 to-blue-500/5 backdrop-blur-xl border border-purple-500/10">
            <h2 className="text-2xl font-bold mb-4">Stay Updated with Marketing Trends</h2>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for the latest digital marketing insights and strategies
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="border-purple-500/20 focus:border-purple-500/40"
              />
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog 