import { useSelector } from "react-redux";
import styles from "../styles/Footer.module.css";

function Footer() {
  const { attribution } = styles;
  const { appTheme }: any = useSelector((state) => state);

  return (
    <footer
      className={`${attribution} ${appTheme ? "text-black" : "text-light"}`}
    >
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H"
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        href="https://www.linkedin.com/in/luispintodev/"
        target="_blank"
        rel="noreferrer"
      >
        Luís Pinto
      </a>
      .
    </footer>
  );
}

export default Footer;
