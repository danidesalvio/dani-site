import React from 'react';
import { Container, Icon, Progress } from 'semantic-ui-react';

const Skills = () => (
  <>
    <Container>
    <div class="skills">
      <h2>Skills</h2>
      <div class="skills-wrapper">
        <div class="skill-info">
          <Icon circular name='code' color='white' size='big'/>
          <p>Full Stack <br/>Dev</p>
        </div>
        <div class="skill-info">
          <Icon circular name='sitemap' color='white' size='big'/>
          <p>Design Mockups<br/>& Prototypes</p>
        </div>
        <div class="skill-info">
          <Icon circular name='camera retro' color='white' size='big'/>
          <p>Photography <br/>& Editing</p>
        </div>
        <div class="skill-info">
          <Icon circular name='vimeo v' color='white' size='big'/>
          <p>Videography<br/>& Editing</p>
        </div>
      </div>
      <div class="learn-section">
        <h2>Currently Learning</h2>
        <div class="learn-wrapper">
          <div class="skill-info">
            <Icon circular name='react' color='white' size='big'/>
            <p>React</p>
          </div>
          <div class="skill-info">
            <Icon circular name='js' color='white' size='big'/>
            <p>Javascript</p>
          </div>
        </div>
      </div>
    </div>
   
    </Container>
  </>
)

export default Skills;