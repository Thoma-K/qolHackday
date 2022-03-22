import React from 'react';
import './App.css';
import { 
  BrowserRouter, 
  Routes,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Test from './routes/Test/Test';
import Footer from './components/Footer/Footer';


const App = () => {


  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/test' element={<Test />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
