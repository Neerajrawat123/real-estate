import HousingEdgeSec from './assets/components/HousingEdgeSec.jsx'
import NewlyLaunchSec from './assets/components/NewlyLaunchSec.jsx'
import FeaturedCollection from './assets/components/FeaturedCollection.jsx'
import Testimonials from './assets/components/Testimonials.jsx'
import Services from './assets/components/Services.jsx'
import AboutUs from './assets/components/AboutUs.jsx'
import Footer from './assets/components/Footer.jsx'
import HeroSec from './assets/components/HeroSec.jsx'


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


