import React, { Component } from 'react';
import Skills from '../shared/Skills';
import { Button, Dimmer, Header, Image } from 'semantic-ui-react';
import Vimeo from '@u-wave/react-vimeo';
import ogden from '../../images/ogden_cropped.png';
import portrait from '../../images/dani_portrait.jpg';

class Home extends Component {
  state = {}

  handleShow = () => this.setState({ active: true })
  handleHide = () => this.setState({ active: false })

  render() {
    const { active } = this.state
    const content = (
      <div>
        <Header as='h2' inverted>
          
        </Header>
        <Button primary>View</Button>
      </div>
    )

    return (
    <>
    <div class="video-header">
      <div class="video-content">
          <h1>Dani D Visuals</h1>
      </div>
      <div class="video-overlay"></div>
      <div class="video-background">
          <Vimeo
            video="315734121"
            background='true'
            showTitle='false'
            showPortrait='false'
            showByline='false'
            controls='false'
            className="video-bg"
            autoplay='true'
            responsive='true'
            loop='true'
            />
      </div>
    </div>

    <Skills/>

    <div class="home-2">
        <div class="hover">
        <Dimmer.Dimmable
          as={Image}
          dimmed={active}
          dimmer={{ active, content }}
          onMouseEnter={this.handleShow}
          onMouseLeave={this.handleHide}
          size='large'
          src={ogden}
        />
        </div>
        <div class="hover">
        <Dimmer.Dimmable
          as={Image}
          dimmed={active}
          dimmer={{ active, content }}
          onMouseEnter={this.handleShow}
          onMouseLeave={this.handleHide}
          size='large'
          src={portrait}
        />
        </div>
    </div>
    </>
    )
  }
}

export default Home;