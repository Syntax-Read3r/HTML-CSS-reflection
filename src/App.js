import './Components/Styles/css/reset.css'

// import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import NavbarTwo from './Components/Navbar/NavbarTwo';
import Banner from './Components/Banner/Banner'
import OurServices from './Components/OurServices/OurServices';
import Awards from './Components/Awards/Awards';
import Reviews from './Components/Reviews/Reviews';
import LatestNews from './Components/LatestNews/LatestNews';
// import SideMenu from './Components/SideMenu/SideMenu';


function App() {
  return (
    <div className="App">
      <Navbar />
      <NavbarTwo />
      {/* <SideMenu /> */}
      <Banner />
      <OurServices />
      <Awards />
      <Reviews />
      <LatestNews />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
