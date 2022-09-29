import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import NavbarTwo from './Components/Navbar/NavbarTwo';
// import SideMenu from './Components/SideMenu/SideMenu';
import './Components/Styles/css/reset.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <NavbarTwo />
      {/* <SideMenu /> */}
      <Footer />
    </div>
  );
}

export default App;
