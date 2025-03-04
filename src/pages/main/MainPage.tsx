import Navbar from "@/comp/mainpage/Navbar"
import Hero from "@/comp/mainpage/Hero"
import About from "@/comp/mainpage/About"
import Features from "@/comp/mainpage/Features"
import Fnq from "@/comp/mainpage/Fnq"
import Footer from "@/comp/mainpage/Footer"
import Blog from "@/comp/mainpage/Blog"

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Blog/>
      <Fnq/>
      <Footer/>
    </div>
  )
}

export default MainPage
