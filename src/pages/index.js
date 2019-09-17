import React from "react";
// import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PageSection from '../components/PageSection';
// import TerminalWindow from '../components/terminal/TerminalWindow';
import CallToAction from '../components/callToAction';

import HomeScreen from '../images/iPhone-home-screen.svg';
import AchievementsSection from '../components/pageSections/AchievementsSection';
import EducationSection from '../components/pageSections/EducationSection';
import ExperienceSection from '../components/pageSections/ExperienceSection';
import SkillsSection from '../components/pageSections/SkillsSection';
import VolunteeringSection from '../components/pageSections/VolunteeringSection';
import ContactSection from '../components/pageSections/ContactSection';
import Footer from '../components/navigation/Footer';

const IndexPage = () => (
  <>
  <SEO title="Home" />
  <Layout>
    <div className="container--fluid">
      <div className="container__row">
        <div className="container__col-lg-4 container__col-md-12 container__col-sm-12">
          <CallToAction/>
        </div>

        <div className="container__col-lg-8 container__col-md-12 container__col-sm-12" style={{overflowY:"scroll", height:"100vh"}}>
          {/* Landing Hone Screen section */}
          <div className="is-theme-color-bg">
            <PageSection>
              <img src={HomeScreen} className="home-screen"/>
            </PageSection>  
          </div>

          {/* Education Section */}
          <div className="is-dark-blue-bg">
            <PageSection>
              <EducationSection/>
            </PageSection>          
          </div>

          {/* Experience Section */}
          <div className="is-blue-bg">
            <PageSection>
              <ExperienceSection/>
            </PageSection>           
          </div>

          {/* Skills Section */}
          <div className="is-mustard-yellow-bg">
            <PageSection>
              <SkillsSection/>
            </PageSection>          
          </div>

          {/* Achievements Section */}
          <div className="is-dark-blue-bg">
            <PageSection>
              <AchievementsSection/>
            </PageSection>          
          </div>
          
          {/* Volunteering Section */}
          <div className="is-theme-color-bg">
            <PageSection>
              <VolunteeringSection/>
            </PageSection>          
          </div>

          {/* Contact Section */}
          <div className="is-blue-bg">
            <PageSection title="Contact">
              <ContactSection/>
            </PageSection>
          </div>
          <Footer/>
      </div>

      </div>
    </div>
  </Layout>
  </>
)

export default IndexPage;
