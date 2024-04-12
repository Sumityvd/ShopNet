import React from 'react'
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css"
const Footer = () => {
  return (
    <footer id="footer">
        <div className="leftFooter">
            <h4>Download our APP</h4>
            <p>Download app for android and IOS mobile App</p>
            <img src={playStore} alt="playstore"/>
            <img src={appStore} alt= "AppStore"/>
        </div>

        <div className="midFooter">
            <h1>EShoppp</h1>
            <p>High Quality is our first Priority</p>
            <p>Copyrights 2021 Shashank</p>
        </div>

        <div className="rightFooter">
            <h4>Follow Us</h4>
            <a href="http://instagram/shashank_shekhar0710">Instagram</a>
            <a href="http://instagram/shashank_shekhar0710">Youtube</a>
            <a href="http://instagram/shashank_shekhar0710">Facebook</a>
        </div>

    </footer>
  )
}

export default Footer;