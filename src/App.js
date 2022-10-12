import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import data from './data';

import './scss/App.scss';

function App() {
  return (
    <div>
     <Header/>
     <Card data={data}/>
     <Footer/>
    </div>
  );
}

export default App;
