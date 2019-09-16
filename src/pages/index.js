import React from "react";
// import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PageSection from '../components/PageSection';
import TerminalWindow from '../components/terminal/TerminalWindow';
import ProjectCard from '../components/cards/ProjectCard';
import ContactForm from "../components/contactForm";
import CallToAction from '../components/callToAction';

import HomeScreen from '../images/iPhone-home-screen.svg';

import AboutSection from '../components/pageSections/AboutSection';
import AchievementsSection from '../components/pageSections/AchievementsSection';
import EducationSection from '../components/pageSections/EducationSection';
import ExperienceSection from '../components/pageSections/ExperienceSection';
import SkillsSection from '../components/pageSections/SkillsSection';
import VolunteeringSection from '../components/pageSections/VolunteeringSection';

const IndexPage = () => (
  <>
  <SEO title="Home" />
  <Layout>
    <div className="container--fluid">
      <div className="container__row">
        <div className="container__col-lg-4 container__col-md-4 container__col-sm-12 full-vh"> 
          <CallToAction/>
        </div>

        <div className="container__col-lg-8 container__col-md-8 container__col-sm-12 full-vh" style={{overflowY:"scroll", height:"100vh"}}>
          {/* Landing Hone Screen section */}
          <div className="is-theme-color-bg full-vh">
            <PageSection>
              <img src={HomeScreen} className="home-screen"/>
            </PageSection>  
          </div>

          {/* About Section */}
          <div className="is-dark-blue-bg">
            <PageSection>
              <AboutSection/>
            </PageSection>          
          </div>

          {/* Education Section */}
          <div className="is-blue-bg">
            <PageSection>
              <EducationSection/>
            </PageSection>          
          </div>

          {/* Experience Section */}
          <div className="is-mustard-yellow-bg">
            <PageSection>
              <ExperienceSection/>
            </PageSection>           
          </div>

          {/* Skills Section */}
          <div className="is-dark-blue-bg">
            <PageSection>
              <SkillsSection/>
            </PageSection>          
          </div>

          {/* Achievements Section */}
          <div className="is-theme-color-bg">
            <PageSection>
              <AchievementsSection/>
            </PageSection>          
          </div>
          
          {/* Volunteering Section */}
          <div className="is-blue-bg">
            <PageSection>
              <VolunteeringSection/>
            </PageSection>          
          </div>

          {/* Contact Section */}
          <div className="is-mustard-yellow-bg">
            <PageSection title="Contact">
              <ContactForm/>
            </PageSection>
          </div>
      </div>

      </div>
    </div>
  </Layout>
  </>
)

export default IndexPage;
