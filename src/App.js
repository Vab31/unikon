import logo from './logo.svg';
import './App.css';
import Nav from './component/nav';
import Hero from './component/hero';
import Plateform from './component/plateform';
import Imgdiv from './component/imgdiv';
import Fre from './component/fre';
import Footer from './component/footer';

function App() {
  return (
    <div className="App">
     <Nav/>
     <Hero/>
     <Plateform/>
     <Imgdiv/>
     <Fre/>
     <Footer/>

    </div>
  );
}

export default App;
