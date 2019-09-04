import React from "react";
// import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Button from '../components/button';
import PageSection from '../components/PageSection';
import TerminalWindow from '../components/terminal/TerminalWindow';
import ProjectCard from '../components/cards/ProjectCard';

const IndexPage = () => (
  <>
  <SEO title="Home" />
  <Layout>
    <div className="container__row" style={{marginTop:'60px'}}>
      <div className="container__col-4 full-vh"> 
        <div style={{margin:'2rem'}}>
        <h1 style={{margin: 0, padding: 0}}>
          Engineer.
        </h1>
        <h1 style={{margin: 0, padding: 0}}>
          Designer.
        </h1>
        <h1 style={{margin: 0, padding: 0}}>
          Frontend Developer.
        </h1>
        <h2>
          Hey, I'm Yannis
        </h2>
        <p>
          I'm a third year MEng Electrical Engineering student at Imperial College London looking for a 6 month placement in 2020.
        </p>
        <Button className="button" buttonText="Work with me!" />
        </div>
        
      </div>
      <div className="container__col-8" style={{overflowY:"scroll", height:"100vh"}}>
        <div className="is-green-bg">
          <PageSection title="About">
            {/* terminal window goes here */}
            <TerminalWindow />
          </PageSection>  
        </div>
        <div className="is-dark-blue-bg">
          <PageSection title="Projects">
          <div className="container__row" style={{marginTop:'60px'}}>
            <div className="container__col-4 full-vh">
                <ProjectCard/>
            </div>
            <div className="container__col-4 full-vh">
                <ProjectCard/>
            </div>
            <div className="container__col-4 full-vh">
                <ProjectCard/>
            </div>
          </div>
            <p className="is-white-text"> This is a placeholder something else is going to go here. This is a placeholder something else is going to go here. This is a placeholder something else is going to go here. This is a placeholder something else is going to go here.</p>
          </PageSection>
        </div>
        <div className="is-blue-bg">
          <PageSection title="Experience">
            <p className="is-white-text"> This is a placeholder something else is going to go here. This is a placeholder something else is going to go here. This is a placeholder something else is going to go here. This is a placeholder something else is going to go here.</p>
          </PageSection>
        </div>
        <div className="is-purple-bg">
          <PageSection title="Contact">
            <p className="is-white-text"> This is a placeholder something else is going to go here. This is a placeholder something else is going to go here. This is a placeholder something else is going to go here. This is a placeholder something else is going to go here.</p>
          </PageSection>
        </div>
      </div>
    </div>
  </Layout>
  </>
)

export default IndexPage;
