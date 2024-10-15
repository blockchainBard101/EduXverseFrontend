import './Faq.css';
import React, { useState } from 'react';
import { IoIosArrowDropdownCircle } from "react-icons/io";

const Faq = () => {
  const [showAnswer, setShowAnswer] = useState([false, false, false, false]);

  const toggleAnswer = (index) => {
    // Update the correct index in the showAnswer (examples questions) array
    setShowAnswer(showAnswer.map((item, i) => (i === index ? !item : item)));
    //set others to false
    setShowAnswer(showAnswer.map((item, i) => (i === index ? !item : false)));
  };

  return (
    <div className='faq'>
      <h1>FAQ</h1>
      <div className='faq-questions'>
        <div className='faq-question'>
          <div>
            <p>What is EduXverse?</p>
            {showAnswer[0] && (
              <p>
                EduXverse is a virtual learning platform that utilizes VR, AR, and other devices to provide an immersive and interactive learning experience. It aims to bridge the gap between traditional learning methods and modern technology, making education more accessible and engaging for students.
              </p>
            )}
          </div>
          <IoIosArrowDropdownCircle
            onClick={() => toggleAnswer(0)}
            style={{ fontSize: '30px', minWidth: '30px', rotate: showAnswer[0] ? '180deg' : '0deg' }}
          />
        </div>

        <div className='faq-question'>
          <div>
            <p>Who is this targeted to?</p>
            {showAnswer[1] && (
              <p>
                EduXverse is targeted towards students, educators, and institutions looking to adopt innovative and effective learning methods. It's designed to be accessible to people of all ages and backgrounds, providing a personalized learning experience that caters to individual needs and learning styles.
              </p>
            )}
          </div>
          <IoIosArrowDropdownCircle
            onClick={() => toggleAnswer(1)}
            style={{ fontSize: '30px', minWidth: '30px', rotate: showAnswer[1] ? '180deg' : '0deg' }}
          />
        </div>

        <div className='faq-question'>
          <div>
            <p>What are the Device Requirements for EduXverse Platform?</p>
            {showAnswer[2] && (
              <p>
                EduXverse is compatible with a range of devices, including VR headsets, AR glasses, smartphones, tablets, and desktop computers. The platform is designed to be accessible on multiple devices, ensuring that users can learn anywhere, anytime.
              </p>
            )}
          </div>
          <IoIosArrowDropdownCircle
            onClick={() => toggleAnswer(2)}
            style={{ fontSize: '30px', minWidth: '30px', rotate: showAnswer[2] ? '180deg' : '0deg' }}
          />
        </div>

        <div className='faq-question'>
          <div>
            <p>What Devices is EduXverse Compatible with?</p>
            {showAnswer[3] && (
              <p>
                EduXverse is compatible with popular VR headsets like Oculus, Vive, and Daydream, as well as AR devices like HoloLens and Magic Leap. It also supports a range of smartphones, including iOS and Android devices, and can be accessed on desktop computers via web browsers.
              </p>
            )}
          </div>
          <IoIosArrowDropdownCircle
            onClick={() => toggleAnswer(3)}
            style={{ fontSize: '30px', minWidth: '30px', rotate: showAnswer[3] ? '180deg' : '0deg' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;