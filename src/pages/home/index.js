import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import { FaGolang, FaNodeJs, FaGitAlt , FaReact } from "react-icons/fa6";
import { DiPostgresql, DiRubyRough } from "react-icons/di";
import { BiLogoTypescript } from "react-icons/bi";
import { SiGraphql } from "react-icons/si";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec">
          <div className="text h-100 d-lg-flex">
            <div className="align-self-center ">
              <div className="mx-auto">
                <h1 className="mb-1x">{introdata.title}</h1>
                  <FaGolang className="icon-tech" />
                  <FaNodeJs className="icon-tech" />
                  <DiPostgresql className="icon-tech" />
                  <FaGitAlt className="icon-tech" />
                  <DiRubyRough className="icon-tech" />
                  <FaReact className="icon-tech" />
                  <BiLogoTypescript className="icon-tech" />
                  <SiGraphql className="icon-tech" />
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <h5 className="intro-description">{introdata.description}</h5>
                <div className="intro_btn-action pb-5">
                  <Link to="/resume" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      Check more
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <a href="mailto:tiff.wijaya@gmail.com">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
