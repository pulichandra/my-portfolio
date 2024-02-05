import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Pulichandra</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 1.5+ years of experience using java
          spring boot, HTML&CSS, javaScript, React.Js, MySQL, GIT, AWS and Agile
          Methodology. Reach out to me if you are satisfied with my profile.
        </p>
        <a
          href="mailto:pulichandraprasad.pentagon@gmail.com"
          className={styles.contactBtn}
        >
          Contact me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero Image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
