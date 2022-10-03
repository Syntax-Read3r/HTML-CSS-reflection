import './Components/Styles/css/reset.css'

import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import NavbarTwo from './Components/Navbar/NavbarTwo';
import Banner from './Components/Banner/Banner'
// import SideMenu from './Components/SideMenu/SideMenu';


function App() {
  return (
    <div className="App">
      <Navbar />
      <NavbarTwo />
      {/* <SideMenu /> */}
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
