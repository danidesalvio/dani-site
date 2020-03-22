import React, { Component } from 'react';
import Skills from '../shared/Skills';
import Work from '../pages/Work';
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
          <h3>creating visual experiences for all</h3>
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
    <Work/>
    </>
    )
  }
}

export default Home;