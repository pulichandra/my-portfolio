import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contacts" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>I'm intrested to work with you!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:pulichandram1996@gmail.com">
            pulichandram1996@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="Linked icon"
          />
          <a href="https://www.linkedin.com/in/madamanchipulichandra-prasad">
            linkedin/pulichandra
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Git icon" />
          <a href="www.github.com/pulichandra">github.com/pulichandra</a>
        </li>
      </ul>
    </footer>
  );
};
