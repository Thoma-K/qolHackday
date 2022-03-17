import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

const App = () => {

  // useEffect(() => {
  //   fetch(`/api/cities/${city}`).then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       console.log(data)
  //       setCityData(data);
  //     }
  //   )
  // }, []);

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
