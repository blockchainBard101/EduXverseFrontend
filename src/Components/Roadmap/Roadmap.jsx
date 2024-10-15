import './Roadmap.css';
import { BuildIcon, DottedLine, LaunchIcon, TestingIcon } from "../index"

const Roadmap = () => {
  return (
    <div className='roadmap'>
      <h1>Roadmap</h1>
      <div className='roadmap-container'>
        <div className='build-container'>
            <div className='first-layer'>
                <div className='second-layer'>
                    <div className='third-layer'>
                        <img src={BuildIcon} alt="Spanner representing building" />
                    </div>
                </div>
            </div>
            <h2>Build</h2>
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
            <h2>Beta Testing</h2>
        </div>
        <img src={DottedLine} style={{marginBottom: '70px'}} alt="Dotted line showing the flow" />
        <div className='launch-container'>
            <div className='first-layer'>
                <div className='second-layer'>
                    <div className='third-layer'>
                        <img src={LaunchIcon} alt="A Dollar sign representing Launching stage" />
                    </div>
                </div>
            </div>
            <h2>Launch</h2>
        </div>
      </div>
    </div>
  )
}

export default Roadmap;