import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import TopSelling from "./Components/TopSelling"
import CustomerReview from "./Components/CustomerReview"
import Besto2 from "./Components/Besto2"
import Footer from "./Components/Footer"

function App() {
  return (
    <div className="relative min-h-screen bg-[#1B2316] overflow-hidden">

      <Navbar />

      <Hero/>

      <TopSelling/>

      <CustomerReview/>

      <Besto2/>

      <Footer/>

    </div>
  )
}

export default App