import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How CareerHelp Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Account</p>
              <p>
                Register and deep dive into the world of CareerHelp. Highlight
                your skills and experiences to attract potential employers.
                Employers can create a company profile to showcase their brand
                and culture.
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              <p>
                Explore thousands of job listings to find the perfect match for
                your skills and interests. Employers can post job openings to
                attract top talent.
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply for Job/Recruit Suitable Candidates</p>
              <p>
                Submit your application directly through our platform .
                Employers can post and review applications and connect with
                potential hires.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
