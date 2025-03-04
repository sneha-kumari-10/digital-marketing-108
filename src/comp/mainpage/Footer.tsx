import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Rocket,
  BarChart,
  Globe,
  Search,
  FileText,
  TrendingUp
} from "lucide-react"
import { Button } from "@/components/ui/button"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950">
      {/* Animated background with blob effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4F46E510_1px,transparent_1px),linear-gradient(to_bottom,#4F46E510_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 bottom-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
          <div className="aspect-[1400/678] w-[87.5rem] bg-gradient-to-tr from-purple-500/30 to-blue-500/30 opacity-20"></div>
        </div>
        <div className="absolute right-0 top-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
          <div className="aspect-[1400/678] w-[87.5rem] bg-gradient-to-tr from-blue-500/30 to-purple-500/30 opacity-20"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Rocket className="h-6 w-6 text-purple-600" />
              <span className="text-xl font-bold">Digital<span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">Growth</span></span>
            </div>
            <p className="text-muted-foreground">
              Empowering businesses with innovative digital marketing solutions for exponential growth and success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">SEO Optimization</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">Content Marketing</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">Social Media Management</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">PPC Advertising</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">Email Marketing</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-purple-600" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-purple-600" />
                <span>contact@digitalgrowth.com</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-purple-600" />
                <span>123 Digital Avenue, Tech Hub</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Globe className="h-4 w-4 text-purple-600" />
                <span>Global Services Available</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Growth Insights</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest digital marketing trends and strategies.
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg border border-purple-500/20 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20"
              />
              <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Get Insights
              </Button>
            </div>
          </div>
        </div>

        {/* Middle Section - Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-y border-purple-500/10">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 flex items-center justify-center">
              <Search className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <h4 className="font-medium">SEO Experts</h4>
              <p className="text-sm text-muted-foreground">Top rankings</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 flex items-center justify-center">
              <FileText className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <h4 className="font-medium">Content Strategy</h4>
              <p className="text-sm text-muted-foreground">Engaging content</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 flex items-center justify-center">
              <BarChart className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <h4 className="font-medium">Data Analytics</h4>
              <p className="text-sm text-muted-foreground">Driven results</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <h4 className="font-medium">Growth Marketing</h4>
              <p className="text-sm text-muted-foreground">Scalable solutions</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 text-center text-sm text-muted-foreground">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <a href="#" className="hover:text-purple-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-purple-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-purple-600 transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-purple-600 transition-colors">Sitemap</a>
          </div>
          <p>© {currentYear} DigitalGrowth. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
