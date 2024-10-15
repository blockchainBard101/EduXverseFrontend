import './Team.css';
import { AvatarImg, GeorgeDP, RevivalDP, AyoSamuelDP, MichaelObeDP, IsraelOshozokhaDP, BenedicatOchaiDP, DivineDP, F0FDP, wisdomODP} from '../index';

const Team = () => {
  return (
    <div className='team'>
      <h1>Our Team</h1>
      <div className='team-members'>
      <div className='team-member'>
            <img src={IsraelOshozokhaDP} className='member-pics' alt="A team member profile pics" />
            <h2 className='member-name'>Israel Oshozokha</h2>
            <p className='member-role'>Team Lead</p>
        </div>
        <div className='team-member'>
            <img src={RevivalDP} className='member-pics' alt="A team member profile pics" />
            <h2 className='member-name'>Revival</h2>
            <p className='member-role'>Community Manager</p>
        </div>
        <div className='team-member'>
            <img src={BenedicatOchaiDP} className='member-pics' alt="A team member profile pics" />
            <h2 className='member-name'>Benedict Ochai</h2>
            <p className='member-role'>UI/UI Designer</p>
        </div>
        <div className='team-member'>
            <img src={GeorgeDP} className='member-pics' alt="A team member profile pics" />
            <h2 className='member-name'>BlockchainBard</h2>
            <p className='member-role'>Blockchain developer</p>
        </div>
        <div className='team-member'>
            <img src={F0FDP} className='member-pics' alt="A team member profile pics" />
            <h2 className='member-name'>404</h2>
            <p className='member-role'>Frontend Developer</p>
        </div>
        <div className='team-member'>
            <img src={MichaelObeDP} className='member-pics' alt="A team member profile pics" />
            <h2 className='member-name'>Michael Obe</h2>
            <p className='member-role'>Backend Developer</p>
        </div>
        <div className='team-member'>
            <img src={wisdomODP} className='member-pics' alt="A team member profile pics" />
            <h2 className='member-name'>Wisdom Obami</h2>
            <p className='member-role'>Brand designer/Creative Director</p>
        </div>
        <div className='team-member'>
            <img src={AyoSamuelDP} className='member-pics' alt="A team member profile pics" />
            <h2 className='member-name'>Ayo Samuel</h2>
            <p className='member-role'>Frontend Developer</p>
        </div>
        <div className='team-member'>
            <img src={DivineDP} className='member-pics' alt="A team member profile pics" />
            <h2 className='member-name'>Divine Odike</h2>
            <p className='member-role'>Team Player</p>
        </div>
        <div className='team-member'>
            <img src={AvatarImg} className='member-pics' alt="A team member profile pics" />
            <h2 className='member-name'>Raheem Abdullahi</h2>
            <p className='member-role'>Team Player</p>
        </div>
        <div className='team-member'>
            <img src={AvatarImg} className='member-pics' alt="A team member profile pics" />
            <h2 className='member-name'>Moses Danladi</h2>
            <p className='member-role'>Team Player</p>
        </div>
      </div>
    </div>
  )
}

export default Team;