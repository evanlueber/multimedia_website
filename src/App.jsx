import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import About from './About/page';
import Contact from './Contact/page'
import Imprint from './Imprint/page'
import Offers from './Offers/page'
import Home from './Home/page';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
          <Route path="/imprint" Component={Imprint} />
          <Route path="/offers" Component={Offers} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
