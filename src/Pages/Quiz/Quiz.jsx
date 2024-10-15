import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BlockchainQuizImg, BookMarkFolder } from '../../Components';
import './Quiz.css';
import { AuthService } from '../../utils/authService.ts';
import { completeCourse, getCourseXp, checkIfCourseCompleted, checkCorrectAnswer } from '../../backend/index.ts';
import { useNavigate } from 'react-router-dom';

const Quiz = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isQuiz, setIsQuiz] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [select, setSelect] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false); // New state for quiz completion
  const [xp, setXp] = useState(0);
  const [completed, setCompleted] = useState(false);
  const { courseId } = useParams();

  const handleQuiz = async (question, answer) => {
    const correct = await checkCorrectAnswer(courseId, question, answer);
    if (correct) {
      if (correct === true) {
        setCorrectAnswers(correctAnswers + 1);
      }
    }
  }

  const FinishCourse = async () => {
    if (AuthService.isAuthenticated()) {
      if (!completed) {
        if (correctAnswers === quizQuestions.length) {
          await completeCourse(AuthService.walletAddress(), courseId);
        }
      }
      navigate(`/learn`);
    }
  }
  // Data organized in arrays for each course and quiz

  useEffect(() => {
    const getXp = async () => {
      const course_xp = await getCourseXp(courseId);
      setXp(course_xp);
    };

    const checkIfCompleted = async () => {
      const course_completed = await checkIfCourseCompleted(courseId, AuthService.walletAddress());
      setCompleted(course_completed);
    };

    checkIfCompleted();

    getXp();
  }, []);
  const edxCourses = [
    {
      id: "0x6870fc4b5fa568fc2bcc71ee998265dca3a98f50bb1c74e432c9016c44d044fa",
      courses: [
        {
          title: "Blockchain fundamentals",
          content: `<h2>Blockchain fundamentals</h2><p>Learn the basics of blockchain technology</p><p>Course Details:</p><ol><li>What is Blockchain?</li><li>Key Features of Blockchain<ul><li>Decentralization</li><li>Transparency</li><li>Security</li></ul></li><li>How Does Blockchain Work?</li><li>Why is Blockchain Important?</li><li>Real-World Applications</li></ol><button class='next-btn'>Start Course</button>`
        },
        {
          title: "What is Blockchain?",
          content: `<h2>What is Blockchain?</h2><p>Imagine you have a notebook where you write down everything you do each day. Now, imagine that this notebook is shared with everyone in your class, and once you write something in it, it can’t be changed or erased. That’s kind of how a blockchain works!</p><button class='next-btn'>Next</button>`
        },
        {
          title: "Key Features of Blockchain",
          content: `<h2>Key features of the blockchain</h2><ol><li>Decentralization:<ul><li>No Central Authority: Instead of having one person or company in charge, everyone in the network has a copy of the notebook. This means no single person can control or change the information.</li><li>Peer-to-Peer Network: All the computers (or nodes) in the network are connected directly to each other, like a group chat where everyone can see and send messages.</li></ul></li><li>Transparency:<ul><li>Public Ledger: Everyone can see the transactions recorded in the blockchain. It’s like having a public scoreboard where everyone can see the scores.</li><li>Immutable Records: Once something is written in the blockchain, it can’t be changed. This ensures that the information is accurate and trustworthy.</li></ul></li><li>Security:<ul><li>Cryptography: Blockchain uses complex math (cryptography) to secure the information. It’s like having a secret code that only the intended recipient can understand.</li><li>Consensus Mechanisms: Before adding a new entry to the blockchain, all the nodes in the network must agree that it’s valid. This process is called consensus.</li></ul></li></ol><button class='next-btn'>Next</button>`
        },
        {
          title: "How Does Blockchain Work?",
          content: `<h2>How Does Blockchain Work?</h2><ol><li>Transaction: Imagine you want to send some digital money (like Bitcoin) to a friend. You create a transaction and broadcast it to the network.</li><li>Verification: The nodes in the network check if the transaction is valid. They make sure you have enough money to send and that you’re the rightful owner.</li><li>Block Creation: Once verified, the transaction is grouped with other transactions to form a block. This block is then added to the chain of previous blocks (hence the name blockchain).</li><li>Consensus: The network uses a consensus mechanism (like Proof of Work or Proof of Stake) to agree on the new block. Once agreed, the block is added to the blockchain, and the transaction is complete.</li></ol><button class='next-btn'>Next</button>`
        },
        {
          title: "Why is Blockchain Important?",
          content: `<h2>Why is Blockchain Important?</h2><ul><li>Trust: Because the information is transparent and can’t be changed, people can trust that it’s accurate.</li><li>Security: The use of cryptography and consensus mechanisms makes blockchain very secure.</li><li>Decentralization: Without a central authority, blockchain can be more democratic and resistant to censorship.</li></ul><button class='next-btn'>Next</button>`
        },
        {
          title: "Real-World Applications",
          content: `<h2>Real-World Applications (RWAs)</h2><ul><li>Cryptocurrencies: Digital money like Bitcoin and Ethereum use blockchain technology.</li><li>Supply Chain: Companies can track products from the factory to the store, ensuring they are genuine and not tampered with.</li><li>Voting: Blockchain can be used to create secure and transparent voting systems.</li></ul><button class='next-btn'>Next</button>`
        }
      ],
      quizQuestions: [
        {
          question: "What is a blockchain?",
          options: [
            "A type of cryptocurrency",
            "A decentralized digital ledger",
            "A centralized database",
            "A type of computer network"
          ]
        },
        {
          question: "Which of the following is a key feature of blockchain technology?",
          options: [
            "Centralized control",
            "Immutability",
            "High transaction fees",
            "Limited scalability"
          ]
        }
      ]
    },

    {
      "id": "0x662497d0316ab8037d7c89aa0a4daf2a53fe225ec8352f8e12b3e91bba62b2aa",
      "courses": [
        {
          "title": "Sui Blockchain Fundamentals",
          "content": "<h2>Sui Blockchain Fundamentals</h2><p>Get introduced to the Sui Blockchain ecosystem.</p><p>Course Details:</p><ol><li>What is Sui Blockchain?</li><li>Key Features of Sui Blockchain<ul><li>High Scalability</li><li>Object-centric Architecture</li><li>Low Latency</li></ul></li><li>How Sui Works?</li><li>Importance of Sui Blockchain</li><li>Real-World Applications of Sui</li></ol><button class='next-btn'>Start Course</button>"
        },
        {
          "title": "What is Sui Blockchain?",
          "content": "<h2>What is Sui Blockchain?</h2><p>The Sui Blockchain is a Layer 1 blockchain that uses an object-centric model, designed to support a wide range of decentralized applications (dApps) with low fees and fast transaction speeds.</p><button class='next-btn'>Next</button>"
        },
        {
          "title": "Key Features of Sui Blockchain",
          "content": "<h2>Key Features of Sui Blockchain</h2><ol><li>High Scalability:<ul><li>Sui can handle thousands of transactions per second, making it highly scalable for large-scale applications.</li><li>Parallel Execution: Transactions are processed in parallel, unlike traditional blockchains that process transactions sequentially.</li></ul></li><li>Object-Centric Architecture:<ul><li>Unlike most blockchains that focus on accounts, Sui treats assets as objects that can be directly manipulated in smart contracts.</li><li>This model allows for more complex interactions and more efficient data storage.</li></ul></li><li>Low Latency:<ul><li>With its consensus-less model for simple transactions, Sui achieves sub-second transaction finality, which means near-instant transaction confirmations.</li></ul></li></ol><button class='next-btn'>Next</button>"
        },
        {
          "title": "How Sui Blockchain Works",
          "content": "<h2>How Sui Blockchain Works</h2><ol><li>Object-based Model: On Sui, assets are stored as objects, and each object has its own unique identifier, version, and owner.</li><li>Parallel Execution: Sui allows transactions that don't overlap to be processed in parallel, making the network more efficient.</li><li>Consensus for Complex Transactions: Sui employs a Byzantine Fault Tolerant (BFT) consensus only for complex transactions that require it, which helps speed up simpler transactions.</li></ol><button class='next-btn'>Next</button>"
        },
        {
          "title": "Importance of Sui Blockchain",
          "content": "<h2>Importance of Sui Blockchain</h2><ul><li>Efficiency: Sui's parallel processing capability makes it highly efficient and scalable, suitable for a range of applications.</li><li>Low Transaction Fees: Sui's design leads to lower transaction fees, benefiting users and developers alike.</li><li>Developer-Friendly: Sui is designed to make it easier for developers to build complex dApps with its object-centric approach.</li></ul><button class='next-btn'>Next</button>"
        },
        {
          "title": "Real-World Applications of Sui",
          "content": "<h2>Real-World Applications of Sui</h2><ul><li>DeFi Platforms: Sui's high throughput makes it ideal for decentralized finance applications like lending, staking, and trading.</li><li>Gaming: The Sui ecosystem is particularly well-suited for building decentralized games that require fast transaction times and complex asset interactions.</li><li>NFTs: Sui's object-centric model allows for more intricate NFT functionalities like evolving or upgrading assets.</li></ul><button class='next-btn'>Next</button>"
        },
        {
          "title": "Let’s Wrap Things Up",
          "content": "<h2>Let’s wrap things up</h2><p>You now know the basics of the Sui Blockchain, how it works, and its potential impact on various industries.</p><button class='next-btn'>Finish</button>"
        },
        {
          "title": "Time to take a Quick Quiz?",
          "content": "<h2>Do you want to take a quiz?</h2><button class='next-btn'>Let's go</button>"
        }
      ],
      "quizQuestions": [
        {
          "question": "What is the primary focus of Sui Blockchain's architecture?",
          "options": [
            "A decentralized finance system",
            "An object-centric model for assets",
            "A consensus-based model for all transactions",
            "A sequential transaction processing system"
          ]
        },
        {
          "question": "What is a key feature of Sui that makes it highly scalable?",
          "options": [
            "Low transaction fees",
            "Object-centric architecture",
            "Parallel transaction execution",
            "Sequential transaction validation"
          ]
        },
        {
          "question": "Which consensus mechanism does Sui use for complex transactions?",
          "options": [
            "Proof of Work",
            "Proof of Stake",
            "Byzantine Fault Tolerant (BFT)",
            "No consensus mechanism"
          ]
        },
        {
          "question": "Why is Sui particularly well-suited for gaming applications?",
          "options": [
            "It has low development costs",
            "It has an object-centric architecture allowing complex asset interactions",
            "It uses high transaction fees",
            "It supports NFTs only"
          ]
        },
      ]
    }

    // Add another course if needed
  ];
  const selectedCourse = edxCourses.find(course => course.id === courseId);

  if (!selectedCourse) {
    return <div>Course not found</div>;
  }
  const { courses, quizQuestions } = selectedCourse;
  const handleNext = () => {
    if (isQuiz) {
      if (currentIndex < quizQuestions.length - 1) {
        handleQuiz(quizQuestions[currentIndex].question, selectedAnswer);
        setCurrentIndex(currentIndex + 1);
      }
      else {
        setQuizCompleted(true); // Set quiz to completed when all questions are answered
        handleQuiz(quizQuestions[currentIndex].question, selectedAnswer);
      }
    } else {
      if (currentIndex < courses.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setIsQuiz(true); // Switch to quiz after courses are done
        setCurrentIndex(0); // Reset index for quiz questions
      }
    }
  };

  const handleAnswerChange = (event) => {
    const _selectedAnswer = event.target.value;
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentIndex]: _selectedAnswer
    }));
    setSelect(true);
    setSelectedAnswer(_selectedAnswer);
    // console.log("Selected answer: ", _selectedAnswer);
  };

  const handleContentClick = (e) => {
    if (e.target.classList.contains('next-btn')) {
      if (isQuiz) {
        if (select) {
          handleNext();
        } else {
          alert("Please select an answer");
        }

      } else {
        handleNext();
      }
      // console.log(e.target);
    }
  };

  const renderQuizCompletion = () => (
    (completed && correctAnswers !== quizQuestions.length) || (completed && correctAnswers === quizQuestions.length) ? (
      <div className='quiz-completion'>
        <p>You got {`${correctAnswers} out of ${quizQuestions.length}`} right.</p>
        <button className='next-btn' onClick={FinishCourse}>Continue Learning</button>
      </div>
    ) : (
      correctAnswers === quizQuestions.length ? (
        <div className='quiz-completion'>
          <h2>Congratulations!</h2>
          <p>You got {`${correctAnswers} out of ${quizQuestions.length}`} right.</p>
          <p>You've been rewarded</p>
          <img src={BookMarkFolder} alt='Folder Pics' />
          <p><b>{xp} Xp</b></p>
          <p>for completing this course, check your profile</p>
          <button className='next-btn' onClick={FinishCourse}>Continue Learning</button>
        </div>
      ) : (
        <div className='quiz-completion'>
          <p>You got {`${correctAnswers} out of ${quizQuestions.length}`} right.</p>
          <button className='next-btn' onClick={FinishCourse}>Continue Learning</button>
        </div>
      )

    )
  );

  return (
    <div className='quiz'>
      <h1>EduXVerse</h1>
      <div className='text-details'>
        <img width={500} height={500} src={BlockchainQuizImg} alt="Quiz Heading" />

        {quizCompleted ? (
          // Render quiz completion message
          renderQuizCompletion()
        ) : isQuiz ? (
          // Render quiz questions
          <div className='quiz-text'>
            <h2>{quizQuestions[currentIndex].question}</h2>
            {quizQuestions[currentIndex].options.map((option, idx) => (
              <div className='quizAnswer' key={idx}>
                <input
                  type="radio"
                  name={`question-${currentIndex}`}
                  id={`option-${idx}`}
                  value={option}
                  onChange={handleAnswerChange}
                  checked={selectedAnswers[currentIndex] === option}
                />
                <label htmlFor={`option-${idx}`}>{option}</label>
              </div>
            ))}
            <button className='next-btn' onClick={handleContentClick}>Next</button>
          </div>
        ) : (
          // Render course content
          <div
            className='quiz-text'
            dangerouslySetInnerHTML={{ __html: courses[currentIndex].content }}
            onClick={handleContentClick}
          />
        )}
      </div>
    </div>
  );
};

export default Quiz;