import React from "react";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Burger World</h2>
        <p>
          Heaven for buger eaters, we are trying to give you the best taste
          possible...
        </p>
        <br />
        <em>We give attention to genuine feedback.</em>

        <strong>All right reserved to @burgerworld.</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>
        <a href="https://twitter.com/6packprogrammer">
          <AiFillTwitterCircle />
        </a>
        <a href="https://github.com/6packprogrammer">
          <AiFillGithub />
        </a>
        <a href="https://linkedin.com/6packprogrammer">
          <AiFillLinkedin />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
