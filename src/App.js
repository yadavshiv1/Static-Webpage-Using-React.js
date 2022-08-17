import './App.css';
import {Header} from './Component/Header.js'
import {Navbar} from './Component/Navbar.js'
import {MainSection} from './Component/MainSection.js'
import {Section} from './Component/Section.js'
// import {Footer} from './Component/Footer.js'
import {Contact} from './Component/Contact.js'

function App() {
  return (
    <>
    <button className='hbtn' >H<br/>O<br/>M<br/>E</button>
    <Header />
    <Navbar />
    <MainSection />
    <Section />
    <Contact />
    {/* <Footer /> */}
   
    </>
  );
}

export default App;
