import './Components/Styles/css/reset.css'

import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import NavbarTwo from './Components/Navbar/NavbarTwo';
import Banner from './Components/Banner/Banner'
import OurServices from './Components/OurServices/OurServices';
// import SideMenu from './Components/SideMenu/SideMenu';


function App() {
  return (
    <div className="App">
      <Navbar />
      <NavbarTwo />
      {/* <SideMenu /> */}
      <Banner />
      <OurServices />
      <Footer />
    </div>
  );
}

export default App;
