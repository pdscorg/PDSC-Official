//Import all css files
import './css/flex-slider.css'
import './css/fontawesome.css'
import './css/lightbox.css'
import './css/owl.css'
import './css/template.css'
// Import Font Awesome styles
import '@fortawesome/fontawesome-free/css/all.min.css';
// Import Bootstrap styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
//Importing Components
import Navbar from './components/Navbar/Navbar'
import MainBanner from './components/MainBanner/MainBanner'
import Features from './components/Features/Features'
import EventsComponent from './components/EventsComponent/EventsComponent'
import PastPartners from './components/Our_Past_Partners/PastPartners'
import JoinUs from './components/JoinUs/JoinUs'
import GeneralMembersForm from './components/GeneralMembersForm/GeneralMembersForm'
import PastBootcamps from './components/PastBootcamps/PastBootcamps'
import ReachOut from './components/ReachOut/ReachOut'
import Footer from './components/Footer/Footer'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const scrollToSection = (sectionDataAttribute:string) => {
  const element = document.querySelector(`[data-section="${sectionDataAttribute}"]`);
  if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
  }
};

function App({moveToSection}:{moveToSection:string}) {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      return;
    }

    const locationState = location.state as { scrollTo?: string } | null;
    const targetSection = locationState?.scrollTo ?? moveToSection;

    const timer = window.setTimeout(() => {
      scrollToSection(targetSection);
    }, 0);

    return () => window.clearTimeout(timer);
  }, [location.pathname, location.state, moveToSection]);
  return (
    <>
      <Navbar />
      <MainBanner />
      <Features />
      <JoinUs />
      <EventsComponent />
      <PastPartners /> 
      <GeneralMembersForm />
      <PastBootcamps />
      <ReachOut />
      <Footer />
    </>
  )
}

export default App