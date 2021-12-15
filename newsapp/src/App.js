
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Head from './Components/Head'
import Main from './Components/Main'
import Footer from './Components/Footer'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Head/>
        <Main/>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
