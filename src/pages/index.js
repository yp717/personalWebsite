import React from "react";
// import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PageSection from '../components/PageSection';
import CallToAction from '../components/callToAction';
import AboutSection from '../components/pageSections/AboutSection';
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
        <div className="container__col-lg-5 container__col-md-12 container__col-sm-12">
          <CallToAction/>
        </div>

        <div className="container__col-lg-7 container__col-md-12 container__col-sm-12 page-section-list">
          {/* Landing Hone Screen section */}
          <div id="about-section"className="is-deep-sky-blue-bg">
            <PageSection>
              <AboutSection/>
            </PageSection>  
          </div>

          {/* Education Section */}
          <div id="education-section" className="is-regal-blue-bg">
            <PageSection>
              <EducationSection/>
            </PageSection>          
          </div>

          {/* Experience Section */}
          <div id="experience-section" className="is-green-bg">
            <PageSection>
              <ExperienceSection/>
            </PageSection>           
          </div>

          {/* Skills Section */}
          <div id="skills-section" className="is-supernova-yellow-bg">
            <PageSection>
              <SkillsSection/>
            </PageSection>          
          </div>

          {/* Achievements Section */}
          <div id="achievements-section" className="is-java-green-bg">
            <PageSection>
              <AchievementsSection/>
            </PageSection>          
          </div>
          
          {/* Volunteering Section */}
          <div id="volunteering-section" className="is-pumpkin-orange-bg">
            <PageSection>
              <VolunteeringSection/>
            </PageSection>          
          </div>

          {/* Contact Section */}
          <div id="contact-section" className="is-matisse-blue-bg">
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
