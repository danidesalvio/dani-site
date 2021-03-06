import React from 'react';
import { Container, Card, Image } from 'semantic-ui-react';
import aves from '../../images/aves-cropped.png';
import ogden from '../../images/ogden_cropped.png';
import kass from '../../images/myway.png';
import asheville from '../../images/Asheville&Beyond.png';
import rcusaMockup from '../../images/rcusa_mockup.png';
import homeValue from '../../images/homevalue-mockup.png';
import Asheville from './projects/Asheville';



const Work = () => (
  <>
    {/* <div class="image-header work">
        <h1>Design & Develop</h1>
        <div class="img-overlay"></div>
    </div> */}

    <Container>

      <div class="work-section">
        <h2>Recent Work</h2>
        <h4>The past 2.5 years I worked as a web designer and front end developer for Real Estate tech company. </h4>
        <h4>
          I wore a lot of hats at this company, but the two main things I focused on were to design and build customized client websites and improve internal products.
          I created and built three templates within 2 months, that thousands of clients have chosen to use as their base websites. I trained new designers hired on, as well
          as taught the parent company's design team new coding skills and good practices - which led to increased productivity. 
        </h4>
        
      </div>
    </Container>

    {/* <Card.Group itemsPerRow={3}>
      <Card
        image={aves}
        header='Template Avenues'
        meta='Design and Build'
        href='https://template-avenues.realvolution.com/'
        target='_blank'
        />
      <Card
        image={ogden}
        header='Template Ogden'
        meta='Design and Build'
        href='https://template-ogden.realvolution.com/'
        target='_blank'
        />
      <Card
        image={kass}
        header='My Way Tribe'
        meta='Client Site Build'
        href='https://mywaytribe.com/'
        target='_blank'
        />
      <Card
        image={asheville}
        header='Asheville & Beyond'
        meta='Client Site Build'
        href='https://ashevilleandbeyond.com/'
        target='_blank'
      />
      <Card
        image={rcusaMockup}
        header='Client Mockup'
        meta='Design in Figma' 
      />
      <Card
        image={homeValue}
        header='Home Value Design'
        meta='Internal Project'
      />
    </Card.Group> */}

      <div className='project-grid'>

        <div className='project'>
          <div className='project-img' style={{backgroundImage: `url(${rcusaMockup})`}}></div>
          
          <div className='hover-state'>
            <div className='project-info'>
              <h2>Design - Figma</h2>
              <button className='btn-light'>View</button>
            </div>
          </div>
        </div>

        <div className='project'>
          <div className='project-img' style={{backgroundImage: `url(${homeValue})`}}></div>
          
          <div className='hover-state'>
            <div className='project-info'>
              <h2>Design - Figma</h2>
              <button className='btn-light'>View</button>
            </div>
          </div>
        </div>

        <div className='project'>
          <div className='project-img' style={{backgroundImage: `url(${aves})`}}></div>
          
          <div className='hover-state'>
            <div className='project-info'>
              <h2>Design & Develop</h2>
              <button className='btn-light'>View</button>
            </div>
          </div>
        </div>

        <div className='project'>
          <div className='project-img' style={{backgroundImage: `url(${ogden})`}}></div>
          
          <div className='hover-state'>
            <div className='project-info'>
              <h2>Design & Develop</h2>
              <button className='btn-light'>View</button>
            </div>
          </div>
        </div>

        <div className='project'>
          <div className='project-img' style={{backgroundImage: `url(${kass})`}}></div>
          
          <div className='hover-state'>
            <div className='project-info'>
              <h2>Develop</h2>
              <button className='btn-light'>View</button>
            </div>
          </div>
        </div>

        <div className='project'>
          <div className='project-img' style={{backgroundImage: `url(${asheville})`}}></div>
          
          <div className='hover-state'>
            <div className='project-info'>
              <h2>Develop</h2>
              <button className='btn-light'>View</button>
            </div>
          </div>
        </div>

      </div>

      <p class="disclaimer">* Websites shown above are editable by clients and may not reflect original design or site build.</p>
    
   
  </>
  
)

export default Work;