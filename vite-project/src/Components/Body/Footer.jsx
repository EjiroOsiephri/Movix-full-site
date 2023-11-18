import React from "react";
import Classes from "../../Sass/Footer.module.scss";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaTelegram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <main className={Classes["main-footer"]}>
        <section className={Classes["first-footer-section"]}>
          <aside>
            <h1>
              Movi<span>X</span>
            </h1>
            <p
              style={{
                maxWidth: "250px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
              labore.
            </p>
            <div>
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
              <FaTelegram />
              <FaLinkedin />
            </div>
          </aside>
          <aside>
            <h1>Navigation</h1>
            <p>About</p>
            <p>Join us</p>
            <p>Contact</p>
            <p>Our services</p>
          </aside>
          <aside>
            <h1>Legals</h1>
            <p>Licence</p>
            <p>Refund Policy</p>
            <p>Privacy</p>
          </aside>
          <aside>
            <h1>Contact</h1>
            <p>osiephriejiro765@gmail.com</p>
            <p>+2347065142095</p>
            <p>7 main street Lagos state.</p>
          </aside>
        </section>
        <section></section>
      </main>
    </>
  );
};

export default Footer;
