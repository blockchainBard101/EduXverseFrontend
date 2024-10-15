import './Explorer.css';
import '../Wearable/Wearable.css';
import { ThumbsUpImg } from '../index'
import { useState } from 'react';
import { IoHeartOutline } from "react-icons/io5";

const Explorer = () => {
  const [fixedHover, setFixedHover] = useState(false);

  return (
    <div className='wearable-fixed-container' onMouseEnter={() => {setFixedHover(true)}} onMouseLeave={() => {setFixedHover(false)}}>
                <img src={ThumbsUpImg} alt="Thumbs Up" className='thumbsUp-img-bg' style={{top: fixedHover ? '83%' : '35%', left: fixedHover ? '3%' : '35%'}}/>
                <div className='wearable-movable-container' onMouseEnter={() => {setFixedHover(true)}} onMouseLeave={() => {setFixedHover(false)}} style={{top: fixedHover ? '-50px' : '0px', right: fixedHover ? '-50px' : '0px', bottom: fixedHover ? '50px' : '0px', left: fixedHover ? '50px' : '0px'}}>   
                    <div>
                        <h1 style={{fontFamily: 'Montserrat', margin: '0px', marginBottom: '20px'}}>Better #217</h1>
                        <img src="https://w7.pngwing.com/pngs/364/361/png-transparent-account-avatar-profile-user-avatars-icon-thumbnail.png" width={200} height={200} alt="Avatar" style={{borderRadius: '50%'}} />
                        <img src={ThumbsUpImg} alt="Thumbs Up" className='thumbsUp-img'/>
                    </div>
                    <div className='wearable-info'>
                        <div className='wearable-info-container'>
                            <h1>Better #217</h1>
                            <div>
                                <IoHeartOutline />
                                <p>104</p>
                            </div>
                        </div> 
                        <div className='wearable-info-container'>
                            <div>
                                <p>Price</p>
                                <p>0.6 ETH</p>
                            </div>
                            <div>
                                <p>Ends in</p>
                                <p>02:44:32</p>
                            </div>
                            <div>
                                <p>Highest</p>
                                <p>0.86 ETH</p>
                            </div>
                        </div> 
                        <div className='wearable-info-container'>
                            <button>Explore</button>
                            <button>Join</button>
                        </div> 
                    </div>
                </div>
            </div>
  )
}

export default Explorer;