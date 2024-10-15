import './Wearables.css';
import { Explorer, Wearable } from '../index';

const Wearables = () => {
  return (
    <div className='wearables-explore-container'>
      <div className='wearables-explore-container-morphismBg'>
        <h1 className='wearable-heading'>Wearables</h1>
        <div className='wearables'>
          <Wearable />
          <Wearable />
          <Wearable />
          <Wearable />
          <Wearable />
          <Wearable />
        </div>
        <h1 className='wearable-heading'>Explore</h1>
        <div className='explorables'>
          <Explorer />
          <Explorer />
          <Explorer />
          <Explorer />
          <Explorer />
          <Explorer />
        </div>
      </div>
    </div>
  )
}

export default Wearables;