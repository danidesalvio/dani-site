import React from 'react';
import Skills from '../shared/Skills';
import { Container, Embed } from 'semantic-ui-react';
import stonp from '../../images/stonp-poster.png';


const About = () => (
  <>
    <div class="image-header about">
      <div className='get-funky-2'></div>
        <h1>About Dani</h1>
        <div class="img-overlay"></div>
    </div>
    <Container>
    <div class="about-section">
      <h4>Dani DeSalvio was born and raised in New York state. She moved to the mountains in Salt Lake City to pursue an education and live the skiers dream.  While there, she received a Bachelor’s Degree in Marketing and Visual Arts from Westminster College and gained much experience in the outdoor industry. Dani has many skill sets, but for the purpose of this website she is showcasing her web design. She is also a photographer, videographer, and all around multimedia artist - creating various types of content 
        for herself and others.</h4>
    </div>

    <Skills/>
    <div class="video-wrapper"> 
      <div className='get-funky'></div>    
      <div class="left">
        <Embed
          id='145071927'
          source='vimeo'
          placeholder={stonp}
          />
      </div>
      <div class="right">
        <h2>Proudest Achievement</h2>
        <h5>Visual Storytelling is one of her favorite ways to express herself besides writing.</h5>
        <h5>Her biggest achievement in life so far was filming for Kazu Kokubo's STONP crew of professional Japanese snowboarders. The film premiered September 2015 in Tokyo and all throughout Japan. Other experiences include working with snow related companies such as SnoCru, Discrete Headwear, and Park City Television.</h5>
      </div>
    </div>
    </Container>

  </>
)

export default About;