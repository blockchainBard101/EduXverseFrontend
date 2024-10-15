import './Explore.css';

import React from 'react'

const Explore = () => {
  return (
    <div className='explore'>
        <h1 style={{textAlign: 'center', fontFamily: 'Montserrat' }}>Explore the EduXverse Environment</h1>
        <div className='display'>
            <h2>A Demo Lab Experiment being performed in the EduXverse Virtual Environment</h2>
            <iframe src='https://my.spline.design/scienceexperiment-6c47e47d97a88fe22d4630cbe0b432f7/' title='Lab Experiment Video in EduXverse Space' frameborder='0'></iframe>
        </div>
        <div className='display'>
            <h2>A minecraft-like game being played in the EduXverse Virtual Environment</h2>
            <iframe src='https://my.spline.design/minecraftworldbeta10-68fff292bcc2982b27c7a5f1d8f7ec2a/' title='A minecraft-like game being played in the EduXverse Virtual Environment' frameborder='0' width='100%' height='100%'></iframe>
        </div>
        <div className='display'>
            <h2>A blockchain explorer being used in the EduXverse Virtual Environment</h2>
            <iframe src='https://my.spline.design/blockchainexplorer-0f11de65ba635a9b3b5c3fca32326379/' title='A blockchain explorer being used in the EduXverse Virtual Environment' frameborder='0' width='100%' height='100%'></iframe>        
        </div>
    </div>
  )
}

export default Explore;