import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import TopSelling from "./components/TopSelling"
import CustomerReview from "./Components/CustomerReview"
import Besto2 from "./Components/BestO2"
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