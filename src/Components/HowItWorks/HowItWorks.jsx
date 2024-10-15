import './HowItWorks.css';
import { CoinIcon, DottedLine, FootIcon, TestingIcon } from "../index";

import React from 'react'

const HowItWorks = () => {
  return (
    <div className='roadmap'>
      <h1>How It Works?</h1>
      <div className='roadmap-container'>
        <div className='build-container'>
            <div className='first-layer'>
                <div className='second-layer'>
                    <div className='third-layer'>
                        <img src={FootIcon} alt="Spanner representing building" />
                    </div>
                </div>
            </div>
            <h2>Engage</h2>
        </div>
        <img src={DottedLine} style={{marginBottom: '70px'}} alt="Dotted line showing the flow" />
        <div className='testing-container'>
             <div className='first-layer'>
                <div className='second-layer'>
                    <div className='third-layer'>
                        <img src={TestingIcon} alt="A compass representing Testing Stage" />
                    </div>
                </div>
            </div>
            <h2>Validate</h2>
        </div>
        <img src={DottedLine} style={{marginBottom: '70px'}} alt="Dotted line showing the flow" />
        <div className='launch-container'>
            <div className='first-layer'>
                <div className='second-layer'>
                    <div className='third-layer'>
                        <img src={CoinIcon} alt="A Dollar sign representing Launching stage" />
                    </div>
                </div>
            </div>
            <h2>Get Rewarded</h2>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks;
