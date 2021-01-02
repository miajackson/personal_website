import React from 'react';
import './projects.css';
import {
  Link
} from "react-router-dom";
//const { innerWidth: width, innerHeight: height } = window;

function Projects() {
    return (
      <div className="Projects">
        <div className="name-div">
          <p className="name"><Link to="/" style={{"color": "black"}}>mia jackson</Link></p>
          <div className="contact-div">
            <p className="contact">mia.jackson@yale.edu</p>
          </div>
        </div>
        
        <div className='grid'>
          <div class="item current-role">
            I am an incoming Associate <br/>Product Manager at <a href="https://schmidtfutures.com/" target="_blank" rel="noopener noreferrer">Schmidt Futures.</a><br/><br/><br/><br/>
            I am fluent in Python, R, SQL, React, React Native, HTML/CSS, JavaScript, and Adobe XD.
          </div>
          <div class="item zoula-item">
            I created <a href="https://joinzoula.com" target="_blank" rel="noopener noreferrer">Zoula</a>, a maternal health mobile app to connect minority women of color with podcasts and educational resources.
            <img className="image zoula-image" src={require('./images/zoula-app.png')} alt="zoula-app"/>
          </div>
          <div class="item columbia-item">
            Columbia University <br/>Center for Justice <hr/>
            <h4>I teach computer science to the formerly incarcerated in Columbia's <a href="https://centerforjustice.columbia.edu/justicethroughcode" target="_blank" rel="noopener noreferrer">Justice through Code</a>. I host office hours, implement curriculum improvements, and provide technical interview prep advice for students.</h4>
          </div>
          <div class="item tobin-item">Tobin Center for Economic Policy
            <hr/>
            <h4 className="to-disappear">I analyzed cross-contamination of Covid-19 in nursing homes located in OH and CT and automated the data processing pipeline. These visualizations were shared with policy makers.</h4>
          </div>

          <div class="item">
            <h3 className="townsend">In the Yale School of Public Health, I conduct independent research in the <a href="https://medicine.yale.edu/lab/townsend/" target="_blank" rel="noopener noreferrer" className="townsend-link">Townsend Laboratory</a> investigating the mutational landscape of benign and cancerous tumors in melanoma and esophageal cancer.</h3>
          </div>
          <div class="item access-health-ct-item">
            <img className="image access-image" src={require('./images/access-health-ct-app.png')} alt="access-app"/>
            <h3 className="access-health-text">I co-led the <br/>design and content <br/>creation of a mobile <br/>app for Access <br/>Health CT to support <br/>marginalized communities <br/>as part of the Black <br/>Health New Haven Initiative</h3>
          </div>
          <div className="item czi-item">
            Chan Zuckerberg Initiative
          <h4 style={{"font-size": ".7em"}}>
          While interning as a data scientist at <a href="https://chanzuckerberg.com/" target="_blank" rel="noopener noreferrer">CZI</a>, I •	Led A/B testing on three different products, the first A/B testing done in 3 years, and designed an experimentation framework in a legacy document to guide future product launches
          •	Analyzed 5 million+ papers and identified a 5-year trend in international science research collaboration
          •	Created a visualization of collaboration trends and presented data story to executives which influenced future directions of data analysis efforts
          </h4>
          </div>

          <div class="item yio-item"><h3>At the <a href="http://investments.yale.edu/" target="_blank" rel="noopener noreferrer">Yale Investments Office</a>, I designed <br/>and launched a web app <br/>to automate the investment manager portfolio <br/>upload process to the Bloomberg terminal, reducing upload process duration from 2 <br/>hours to <br/>3 seconds</h3>
            
            <img className="image yio-image" src={require('./images/yio-webapp.png')} alt="access-app"/>
          </div>
          <div class="item extra-info">
            Other
            <h3>Startup Awards • <a href="https://medicine.yale.edu/news-article/22471/" target="_blank" rel="noopener noreferrer">CBIT Healthcare Hackathon Runner-Up</a> • Startup Yale Semifinalist 	</h3>
            <h3>Fellowships • Code2040 Data Science Fellow • D.E. Shaw Latitude Fellow • Google BOLD Immersion</h3>
          </div>
        </div>
        
      </div>
    )
}

export default Projects;
