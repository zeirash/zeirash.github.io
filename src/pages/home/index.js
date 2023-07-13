import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta, projects } from "../../content_option";
import { Link } from "react-router-dom";
import { FaGolang, FaNodeJs, FaGitAlt , FaReact } from "react-icons/fa6";
import { DiPostgresql, DiRubyRough } from "react-icons/di";
import { BiLogoTypescript, BiLink } from "react-icons/bi";
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
        <div className="intro-sec background-wrap">
          <div className="text h-100 d-lg-flex">
            <div className="align-self-center">
              <div className="mx-auto">
                <h1 className="mb-1x">{introdata.title}</h1>
                  <div className="mb-2">
                    <FaGolang className="icon-tech" />
                    <FaNodeJs className="icon-tech" />
                    <DiPostgresql className="icon-tech" />
                    <FaGitAlt className="icon-tech" />
                    <DiRubyRough className="icon-tech" />
                    <FaReact className="icon-tech" />
                    <BiLogoTypescript className="icon-tech" />
                    <SiGraphql className="icon-tech" />
                  </div>
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
            <div className="align-self-center mx-auto">
              <div className="image-wrapper">
                <img src="/profile-circle.png" style={{width: "250px", height: "250px"}} />
              </div>
            </div>
          </div>
        </div>

        <hr style={{color: "#888888", marginTop: "0"}}/>
        <div className="intro-sec">
          {projects.map((data, i) => {
            return (
              <div key={i} className="section-content">
                <h4 className="section-title">
                  {data.header}
                </h4>
                {data.details.map((detail, j) => {
                  var link = ""
                  if (detail.url !== "") {
                    link = <div className="link-project">
                              <a href={detail.url}>
                              <BiLink /> {detail.url_name}
                            </a>
                          </div>
                  };

                  return (
                    <div>
                      <div key={j} className="section-place">
                        <h3 className="project-title">
                          {detail.name}
                        </h3>
                        <div className="place-content">
                          <div className="place-note">
                            {detail.note}
                          </div>
                          {link}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>

      </section>
    </HelmetProvider>
  );
};
