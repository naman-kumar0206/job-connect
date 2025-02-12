import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedin,
  FaBriefcase,
  FaUser,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By CareerHelp.</div>
      <div>
        <Link to={"#"} target="_blank">
          <FaUser size={20} color="white" />
        </Link>
        <Link
          to={"#"}
          target="_blank"
        >
          <FaLinkedin />
        </Link>
        <Link
          to={"#"}
          target="_blank"
        >
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
