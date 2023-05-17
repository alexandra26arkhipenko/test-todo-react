import classes from "./Footer.module.css";

import { FOOTER_TEXT } from "../../../constants/constants";

const Footer = () => {
  return <footer className={classes.footer}>{FOOTER_TEXT}</footer>;
};

export default Footer;
