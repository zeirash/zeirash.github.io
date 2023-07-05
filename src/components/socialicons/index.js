import React from "react";
import "./style.css";
import {
  FaGithub,
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { socialprofiles } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofiles.github && (
          <li>
            <a href={socialprofiles.github}>
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofiles.facebook && (
          <li>
            <a href={socialprofiles.facebook}>
              <FaFacebookF />
            </a>
          </li>
        )}
        {socialprofiles.linkedin && (
          <li>
            <a href={socialprofiles.linkedin}>
              <FaLinkedin />
            </a>
          </li>
        )}
        {socialprofiles.instagram && (
          <li>
            <a href={socialprofiles.instagram}>
              <FaInstagram />
            </a>
          </li>
        )}
      </ul>
      <p>Let's connect</p>
    </div>
  );
};
