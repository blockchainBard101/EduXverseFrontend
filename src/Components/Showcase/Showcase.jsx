import './Showcase.css';
import Spline from '@splinetool/react-spline';
const Showcase = () => {
  return (
    <div className='showcase-section'>
        <div className='mini-showcase'>
            <h1>Join a community of learners to learn, earn, and socialize</h1>
            {/* The video no wan gree enter nhi o, no vex abeg 🥲😜 */}
            <video src={require("../../Assets/team-sushi-sui-eduxverse.mp4")} width={750} height={500} controls></video>
        </div>
        <div className='app-functions-container'>
            <div className='app-fuctions-morphism-bg'>
                <div className='app-function-showcase'>
                    <div>
                        <h1>Learn</h1>
                        <p>Have an interactive learning experience on EduXverse</p>
                    </div>
                    <Spline
        scene="https://prod.spline.design/jrOv3oRke-ZSPho9/scene.splinecode" 
      />
                </div>
                <div className='app-function-showcase'>
                <Spline
        scene="https://prod.spline.design/psHIAKn4JaQ0xSuP/scene.splinecode" 
      />
                    <div>
                        <h1>Earn</h1>
                        <p> Get rewarded for your knowledge and skills on EduXverse</p>
                    </div>
                </div>
                <div className='app-function-showcase'>
                    <div>
                        <h1>Interact</h1>
                        <p>Interact with fellow learners and educators on EduXverse</p>

                    </div>
                    <Spline
        scene="https://prod.spline.design/O6Gcg3DpvQqswDyY/scene.splinecode" 
      />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Showcase;