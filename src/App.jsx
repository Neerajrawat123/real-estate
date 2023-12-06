import HousingEdgeSec from './components/HousingEdgeSec.jsx'
import NewlyLaunchSec from './components/NewlyLaunchSec.jsx'
import FeaturedCollection from './components/FeaturedCollection.jsx'
import Testimonials from './components/Testimonials.jsx'
import Services from './components/Services.jsx'
import AboutUs from './components/AboutUs.jsx'
import Footer from './components/Footer.jsx'
import HeroSec from './components/HeroSec.jsx'


function App() {

 

  return (
    
    <div className='w-screen'>


    {/* <Header/>
    <Main /> */}

    <HeroSec />
    <HousingEdgeSec />
    <NewlyLaunchSec />

    <FeaturedCollection />
    <Testimonials />
    <Services />
    <AboutUs />
    <Footer/>
    </div>



      
    
  )
}

export default App


