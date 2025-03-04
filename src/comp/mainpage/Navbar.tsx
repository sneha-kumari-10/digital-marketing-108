import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, Rocket, BarChart, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/components/ui/theme-provider"

const Navbar = () => {
  const { setTheme, theme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '#hero', icon: <Rocket className="w-4 h-4" /> },
    { name: 'Services', href: '#services', icon: <BarChart className="w-4 h-4" /> },
    { name: 'Portfolio', href: '#portfolio', icon: <Target className="w-4 h-4" /> },
    { name: 'Fnq', href: '#fnq' },
  ]

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      scrolled ? 'bg-background/95 backdrop-blur shadow-lg' : 'bg-transparent'
    }`}>
      <div className="flex h-16 items-center justify-between container mx-auto px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center gap-2 text-xl font-bold group">
            <Rocket className="h-6 animate-bounce text-red-400 w-6 text-primary transform transition-transform group-hover:rotate-12" />
            <span>Digital<span className="text-primary font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">Growth</span></span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center gap-1.5 text-sm font-medium transition-all hover:text-primary relative group py-2"
            >
              {item.icon && <span className="transform transition-transform group-hover:scale-110">{item.icon}</span>}
              {item.name}
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-primary to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </a>
          ))}
        </div>

        {/* Right side controls */}
        <div className="flex items-center gap-2">
          {isMounted && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="mr-2 hover:bg-primary/10">
                  {theme === "light" ? (
                    <Sun className="h-5 w-5 transform transition-transform hover:rotate-90" />
                  ) : (
                    <Moon className="h-5 w-5 transform transition-transform hover:-rotate-90" />
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="animate-in slide-in-from-top-2">
                <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="w-full">
              <div className="flex flex-col items-center gap-6 mt-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-2 text-lg font-medium transition-colors hover:text-primary"
                  >
                    {item.icon}
                    {item.name}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
