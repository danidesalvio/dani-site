import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import asheville from '../../../images/Asheville&Beyond.png';

const Asheville = () => (
    <>
    <div class="image-header">
        <h1>Asheville & Beyond</h1>
        <div class="img-overlay" style={{backgroundImage: `url(${asheville})`, opacity: '0.6', backgroundPosition: 'center center'}}></div>
    </div>
    </>
)

export default Asheville;