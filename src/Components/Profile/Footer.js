import React, { Component } from "react";
// import {style} from "typestyle";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  
} from "react-icons/fa";
class Footer extends Component {
  
  render() {
    const myStylea={
      paddingLeft: "5px",
      fontSize:"22px",
      textDecoration: "none",
      };

      
    return (
      <div className="container-1"style={{
        color: "#f1f1f1",
        textAlign: "center",
        fontFamily: "'Saira Semi Condensed', sans-serif",
        fontSize: "16px",
        backgroundImage: "linear-gradient(to top, #30cfd0 0%, #330867 100%)",
      }}>
        <img
          id="contactimg"
          src="/images/contactlogo.png"
          width="180px"
          height="180px"
          alt="contactlogo" style={{ borderStyle: "hidden",backgroundColor: "#f1f1f1", borderRadius: "90px",textTransform: "uppercase"}}
        />
        <h3>
          <strong>Mahni Islem</strong>
        </h3>
        <h4> Local : Main Street </h4>
        <h4>Email Id: mehanniislem@gmail.com</h4>
        
        <h4>Contant Info: +213797485691</h4>

        <a href="https://www.facebook.com/mhn.islem.19" style={myStylea}>
          <span style={{ color: "antiquewhite" }}>
            <FaFacebook />
          </span>
        </a>
        <a href="https://twitter.com/MhnIslem" style={myStylea}>
          <span
            className="icon fa fa-twitter"
            style={{ color: "antiquewhite" }}
          >
            <FaTwitter />
          </span>
        </a>
        
        <a href="https://www.linkedin.com/in/islem-mahni-4744a4220" style={myStylea}>
          <span
            className="icon fa fa-linkedin-square"
            style={{ color: "antiquewhite" }}
          >
            <FaLinkedin />
          </span>
        </a>
        
      </div>
    )
  }}

export default Footer;
