import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './About/page';
import Contact from './Contact/page'
import Imprint from './Imprint/page'
import Offers from './Offers/page'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route to="" Component={About} />
          <Route to="" Component={Contact} />
          <Route to="" Component={Imprint} />
          <Route to="" Component={Offers} />
        </Routes>
      </BrowserRouter>
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
