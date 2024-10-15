import './UserPanel.css';
import { AccProfilePics, BlobImg, EdxHeadset, EdxVest } from '../../Components';
import { BiEdit } from 'react-icons/bi';
import { AuthService } from '../../utils/authService.ts';
import React, { useEffect, useState } from 'react';
import { userDetails } from '../../backend/index.ts';

const UserPanel = () => {
  const [xp, setXp] = useState(0);
  const [userName, setUserName] = useState("Team Sushi");
  useEffect(
    () => {
      const checkAuthentication = async () => {
        try {
          if (AuthService.isAuthenticated()) {
            console.log('User is already authenticated', AuthService.walletAddress());

            const details = await userDetails(AuthService.walletAddress());
            if (details) {
              setXp(details.xp);
              setUserName(details.name)
            }
          } else {
            console.log("Not authenticated");
          }
        } catch (error) {
          console.error("Error adding user:", error);
        }
      };

      checkAuthentication();
    }, []
  )
  return (
    <div className='user-panel'>
      <div className='user-panel-top-section'>
        <div className='user-profile'>
          <h1>User Profile</h1>
          <div className='user-profile-stats'>
            <div className='profile-stat-title'>
              <p>XP</p>
              <p>EDX</p>
              <p>SUI</p>
              <p>NFT</p>
            </div>
            <div className='profile-stat-color'>
              <div className='color' style={{ backgroundColor: '#F05555' }}></div>
              <div className='color' style={{ backgroundColor: '#FFBF1C' }}></div>
              <div className='color' style={{ backgroundColor: '#3790FA' }}></div>
              <div className='color' style={{ backgroundColor: '#16ED52' }}></div>
            </div>
            <div className='profile-stat-rate'>
              <p>{xp}</p>
              <p>10000</p>
              <p>10</p>
              <p>2</p>
            </div>
          </div>
        </div>
        <div className='profile-pics-section'>
          <p style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
            {userName}
          </p>
          <div>
            <img src={AccProfilePics} alt="" />
            <div><BiEdit style={{ cursor: 'pointer', color: '#F05555' }} /><p style={{ margin: '0' }}>change</p></div>
          </div>
        </div>
      </div>
      <div className='user-panel-bottom-section'>
        <div>
          <img src={EdxVest} alt="" width={350} height={300} />
          <p style={{ fontFamily: 'Montserrat', fontWeight: '700' }}>EDX SHIRT</p>
          <p style={{ fontFamily: 'Inter', color: '#a59a9a', lineHeight: '.5' }}>COMMON</p>
        </div>
        <div>
          <img src={BlobImg} alt="" width={350} height={300} />
          <p style={{ fontFamily: 'Montserrat', fontWeight: '700' }}>BLOB</p>
          <p style={{ fontFamily: 'Inter', color: '#a59a9a', lineHeight: '.5' }}>RARE</p>
        </div>
        <div>
          <img src={EdxHeadset} alt="" width={350} height={300} />
          <p style={{ fontFamily: 'Montserrat', fontWeight: '700' }}>EDX VR HEADSET</p>
          <p style={{ fontFamily: 'Inter', color: '#a59a9a', lineHeight: '.5' }}>RARE</p>
        </div>
      </div>
    </div>
  )
}

export default UserPanel;