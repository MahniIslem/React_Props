import React from "react";
import Header from "./Components/Profile/Header";
import Footer from './Components/Profile/Footer';
import FullName from "./Components/Profile/FullName.js";
import Bio from "./Components/Profile/Bio";
import Profession from "./Components/Profile/Profession.js";


function App() {
  const handleEvent = () => {
    alert(`${this.props.FullName}`);
  };
  return (
    <>
    <header id="home">
    <Header/>
    </header>
    <body style={{margin:"150px 100px",fontSize:"1.2rem"}}>
    <h1>Self-Profile </h1>
      <FullName firstName="Islem" lastName="Mahni">
      <p>Glad to know you</p>
      </FullName>
      <br/>
      <div style={{border:"black double",  marginTop:"20px",}} id="about">
      <Bio FullName="Mahni Islem" Age="21" Gender="Male" Interests="Learning,Farming ,Taking care of animals, Watching TV , Eating and Sleeping"  />
      </div>
      <br/>
      <div id="profession"><Profession/></div>
      <button onClick={handleEvent}>User</button>
    </body>
    <footer id="contact">
      <Footer/>
      </footer>

    </>
  );
}
export default App;
