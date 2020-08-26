import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            I'm a master graduate from Sichuan University, major in Signal and Information Processing. My research interest is Array Signal Processing Technology. I'm experienced in communication system(both hardware and software) and algorithm development.
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Researcher</h3>
              <div className="subheading mb-3">Project of National Natural Science Foundation, Sichuan University</div>
              <p>
                <li>Blind acquire the signal characteristics from aircrafts to identify certain object;</li>
                <li>Based on signal characteristics and derived constraint, choose sensors to perform adaptive beamforming;</li>
                <li>Design sub-arrays for sparse DOA estimation;</li>
                <li>Positioning and tracking target;</li>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">January 2018 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Researcher</h3>
              <div className="subheading mb-3">Advanced Research, Sichuan University</div>
              <p>
                <li>Obtain the optimal array design constraint for F/DIB beamformer and broadband DOA estimation;</li>
                <li>Design the optimal array;</li>
                <li>Design the convex based optimization algorithm for beamformer;</li>
                <li>Design the algorithm for MVEA-DOA estimation;</li>
                <li>Validate the designs using MATLAB; using python to develop the libraries for following applications;</li>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2016 - August 2017</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Main Developer</h3>
              <div className="subheading mb-3"> Commercial Project, Sichuan University</div>
              <p>
                <li>Develop a real-time signal processing system base on TI C5000 DSP;</li>
                <li>The system achieves real-time filtering, equalizing and adaptive de-noising;</li>
                <li>Using MCU through HPI to control and load program for the DSP; The MCU communicates with HOST through SPI;</li>
                <li>The host software was developed for automatic calculating coefficients of filter/equalizer, compiling and loading DSP program in C#;</li>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2015 - August 2016</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Main Developer</h3>
              <div className="subheading mb-3"> Distributed Development Platform, Sichuan University</div>
              <p>
                <li>Construct domain service base on Windows AD;</li>
                <li>Construct ADCS, ADFS, DNS, DHCP, Hyper-V services;</li>
                <li>Construct distributed MATLAB calculation service;</li>
                <li>Construct GitLab service on virtualized CentOS;</li>
                <li>Construct DevOps CI/CD service base on Docker;</li>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">April 2016 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Technician</h3>
              <div className="subheading mb-3">Full-time Job, 10th Institute of CETC</div>
              <p>
                <li>Responsible for developing and testing of receiver/transmitter modules;</li>
                <li>Responsible for conducting the design documents;</li>
                <li>Responsible for writing/compiling the technical documents;</li>
                <li>Responsible for writing/compiling the manufacture documents;</li>
                <li>Other related business;</li>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">July 2012 - April 2014</span>
            </div>
          </div>




        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Sichuan University</h3>
              <div className="subheading mb-3">Master-PhD Program, Graduate as Master in Science</div>
              <div>Signal and Information Engineering</div>
              <p></p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2014 - June 2021</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Sichuan University</h3>
              <div className="subheading mb-3">Bachelor in Science</div>
              <div>Electronic and Information Engineering</div>
              <p></p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2008 - June 2012</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Professional Skills
          </div>
          <ul>
            <li className="list-inline-item">
              Adaptive Signal Processing,
            </li>
            <li className="list-inline-item">
              Array Signal Processing,
            </li>
            <li className="list-inline-item">
              Communication System,
            </li>
            <li className="list-inline-item">
              Signal Analysis,
            </li>
            <li className="list-inline-item">
              Basic Signal Processing
            </li>
          </ul>

          <div className="subheading mb-3">
            Software Development Skills
          </div>
          <ul>
            <li className="list-inline-item">
              C/C++(STL),
            </li>
            <li className="list-inline-item">
              Python,
            </li>
            <li className="list-inline-item">
              C#,
            </li>
            <li className="list-inline-item">
              ASM,
            </li>
            <li className="list-inline-item">
              Common Data Types and Algorithms
            </li>
          </ul>

          <div className="subheading mb-3">
            Hardware Development Skills
          </div>
          <ul>
            <li className="list-inline-item">
              DSP,
            </li>
            <li className="list-inline-item">
              MCU,
            </li>
            <li className="list-inline-item">
              ARM,
            </li>
            <li className="list-inline-item">
              FPGA,
            </li>
            <li className="list-inline-item">
              Common Digital Circuit Design
            </li>
          </ul>

          <div className="subheading mb-3">
            Tools
          </div>
          <ul>
            <li className="list-inline-item">
              VS,
            </li>
            <li className="list-inline-item">
              Altium,
            </li>
            <li className="list-inline-item">
              Linux,
            </li>
            <li className="list-inline-item">
              Git,
            </li>
            <li className="list-inline-item">
              Make,
            </li>
            <li className="list-inline-item">
              CI/CD,
            </li>
            <li className="list-inline-item">
              Docker
            </li>
          </ul>

          <div className="subheading mb-3">
            Common
          </div>
          <ul>
            <li className="list-inline-item">
              Markdown,
            </li>
            <li className="list-inline-item">
              Latex,
            </li>
            <li className="list-inline-item">
              CAD,
            </li>
            <li className="list-inline-item">
              Photoshop,
            </li>
            <li className="list-inline-item">
              MS Office,
            </li>
          </ul>


        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            Apart from being a researcher and developer, I enjoy most of my time as a photographer and hiker. I like spending my vacation in highland.
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Best Presentation Award of ICISPC, Singapore 2019
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Excellent Postgraduate of Sichuan University
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Excellent Graduate of Sichuan University
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              1st Single-Class Scholarship of Sichuan University
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              "Youbochuang" Scholarship of Sichuan University
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Excellent Student of Sichuan University
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              2nd Single-Class Scholarship of Sichuan University
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              "Sanxin" Scholarship of Sichuan University
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
