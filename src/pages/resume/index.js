import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";

export const Resume = () => {
  return (
    <HelmetProvider>
      <div className="about_header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Tiffany CV | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="mb-5 mt-3 pt-md-3">
          <div className="resume">
            <h1 className="title_name"> Tiffany </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </div>
        </div>
        <div className="section-content">
          <h4 className="section-title">
            Experiences
          </h4>
          <div className="section-company">
            <h3 className="company-title">
              Omise (Opn)
            </h3>
            <div className="company-content">
              <div className="role-title">
                <h6 className="fw-bold">
                  Software Engineer
                </h6>
                Jul 22-now
              </div>
              <ul>
                <li>Develop and maintain backend core module in ruby on rails in monolithic architecture</li>
                <li>Write unit test and automation test using robocop framework</li>
                <li>Develop and maintain frontend core using ERB</li>
                <li>Design and review new feature architecture with internal team before develop it</li>
                <li>Work closely with product manager, QA and business analyst to deliver a product/project</li>
              </ul>
            </div>
          </div>
          <div className="section-company">
            <h3 className="company-title">
              Tokopedia
            </h3>
            <div className="company-content">
              <div className="role-title">
                <h6 className="fw-bold">
                  Senior Software Engineer
                </h6>
                Jan 22-Jul 22
              </div>
              <ul>
                <li>Develop and maintain one of the core modules in Tokopedia (inventory management system) in microservice architecture environment</li>
                <li>Analyze, find root cause of the bugs/incident, and give short term (if the bugs is critical) and long term solution to fix it</li>
                <li>Help backlog grooming with engineering manager and product</li>
                <li>Became middleman and act as a lead for team</li>
                <li>Design and develop multi location management for seller to store their products</li>
                <li>Develop real-time new stock deduction flow and handle project in the middle of the timeline</li>
              </ul>
              <div className="role-title">
                <h6 className="fw-bold">
                  Software Engineer
                </h6>
                Jul 19-Dec 21
              </div>
              <ul>
                <li>Develop and maintain one of the core modules in Tokopedia (inventory management system) in microservice architecture environment</li>
                <li>Provide data using GraphQL query and REST API to support all front-end (apps and website)</li>
                <li>Assess feature development and do tasks breakdown and timeline estimation for the project</li>
                <li>Refactor and maintain legacy code</li>
                <li>Help migrate core module service from AWS to GCP as service owner</li>
                <li>Establish single source of truth for inventory management system through centralizing stock and price data</li>
              </ul>
            </div>
          </div>
          <div className="section-company">
            <h3 className="company-title">
              Imaginato
            </h3>
            <div className="company-content">
              <div className="role-title">
                <h6 className="fw-bold">
                  Full Stack Developer
                </h6>
                Jun 18-Jun 19
              </div>
              <ul>
                <li>Serve data using REST API to support mobile application</li>
                <li>Integrate system with other third party API</li>
                <li>Find and fix root cause of bugs</li>
                <li>Help assess and develop feature of client's need</li>
                <li>Join daily stand up and do progress report</li>
              </ul>
            </div>
          </div>
          <div className="section-company">
            <h3 className="company-title">
              Bank Central Asia
            </h3>
            <div className="company-content">
              <div className="role-title">
                <h6 className="fw-bold">
                  IT Analyst Intern
                </h6>
                Sep 17-Feb 18
              </div>
              <ul>
                <li>Migrate ETL jobs from old to new ETL tools</li>
                <li>Analyze and get data from database based from user request</li>
                <li>Create PoC of protocol between MQTT and websocket</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="section-content">
          <h4 className="section-title">
            Educations
          </h4>
          <div className="section-company">
            <h3 className="company-title">
              Binus University
            </h3>
            <div className="company-content">
              <div className="role-title">
                <h6 className="fw-bold">
                  Bachelor Degree of Computer Science
                </h6>
                2014-2018
              </div>
              <p>
                Graduated with GPA 3.5. Enrolled in "Global Class" Program that use English to deliver all curriculum
              </p>
            </div>
          </div>
          <div className="section-company">
            <h3 className="company-title">
              Universiti Utara Malaysia
            </h3>
            <div className="company-content">
              <div className="role-title">
                <h6 className="fw-bold">
                  Exchange Student
                </h6>
                2017
              </div>
              <p>
                Became an exchange student for 1 semester. Learned website and mobile app development
              </p>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};
