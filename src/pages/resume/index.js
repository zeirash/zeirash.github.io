import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta, worktimeline, educations } from "../../content_option";
import { FaLocationDot } from "react-icons/fa6";

export const Resume = () => {
  return (
    <HelmetProvider>
      <div className="about-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Tiffany CV | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="mb-5 mt-3 pt-md-3">
          <div className="resume">
            <h1 className="title-name"> Tiffany </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </div>
        </div>
        <div className="section-content">
          <h4 className="section-title">
            Experiences
          </h4>
          {worktimeline.map((data, i) => {
            return (
              <div key={i} className="section-company">
                <h3 className="place-title">
                  {data.where}
                  <div className="company-location"><FaLocationDot className="location-icon" />{data.location}</div>
                </h3>
                <div className="place-content">
                  {data.jobtitle.map((job, j) => {
                    return (
                      <div key={j} className="job-title">
                        <div className="role-title">
                          <h6 className="fw-bold">
                            {job.title}
                          </h6>
                          {job.date}
                        </div>
                        <ul>
                          {job.jobdesks.map((jobdesk) => (<li>{jobdesk}</li>))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="section-content">
          <h4 className="section-title">
            Educations
          </h4>
          {educations.map((data, i) => {
            return (
              <div key={i} className="section-company">
                <h3 className="place-title">
                  {data.where}
                </h3>
                <div className="place-content">
                  <div className="role-title">
                    <h6 className="fw-bold">
                      {data.major}
                    </h6>
                  </div>
                  <div className="education-note">
                    {data.note}
                  </div>
                  <div className="education-location"><FaLocationDot className="location-icon" />{data.location}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </HelmetProvider>
  );
};
