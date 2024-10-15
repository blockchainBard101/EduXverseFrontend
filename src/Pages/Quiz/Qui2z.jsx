import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { BlockchainQuizImg, BookMarkFolder } from '../../Components';
import './Quiz.css';

const Quiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isQuiz, setIsQuiz] = useState(false);
  const { courseId } = useParams();
  // const data = `<h2>Blockchain fundamentals</h2><p>Learn the basics of blockchain technology</p><p>Course Details:</p><ol><li>What is Blockchain?</li><li>Key Features of Blockchain<ul><li>Decentralization</li><li>Transparency</li><li>Security</li></ul></li><li>How Does Blockchain Work?</li><li>Why is Blockchain Important?</li><li>Real-World Applications</li></ol><button  class='next-btn'}><a>Start Course</a></button>`
  const edxCourses = [
    {
      id: "0xf010c72103e005f25705e7ef85c14ef1d31e291ffe89fffa1c168f34fb615873",
      courses: [
        `<h2>Blockchain fundamentals</h2><p>Learn the basics of blockchain technology</p><p>Course Details:</p><ol><li>What is Blockchain?</li><li>Key Features of Blockchain<ul><li>Decentralization</li><li>Transparency</li><li>Security</li></ul></li><li>How Does Blockchain Work?</li><li>Why is Blockchain Important?</li><li>Real-World Applications</li></ol><button class='next-btn'}>Start Course</button>`,
        `<h2>What is Blockchain?</h2><p>Imagine you have a notebook where you write down everything you do each day. Now, imagine that this notebook is shared with everyone in your class, and once you write something in it, it can’t be changed or erased. That’s kind of how a blockchain works!</p><button  class='next-btn'}>Next</button>`,
        `<h2>Key features of the blockchain</h2><ol><li>Decentralization:<ul><li>No Central Authority: Instead of having one person or company in charge, everyone in the network has a copy of the notebook. This means no single person can control or change the information.</li><li>Peer-to-Peer Network: All the computers (or nodes) in the network are connected directly to each other, like a group chat where everyone can see and send messages.</li></ul></li><li>Transparency:<ul><li>Public Ledger: Everyone can see the transactions recorded in the blockchain. It’s like having a public scoreboard where everyone can see the scores.</li><li>Immutable Records: Once something is written in the blockchain, it can’t be changed. This ensures that the information is accurate and trustworthy.</li></ul></li><li>Security:<ul><li>Cryptography: Blockchain uses complex math (cryptography) to secure the information. It’s like having a secret code that only the intended recipient can understand.</li><li>Consensus Mechanisms: Before adding a new entry to the blockchain, all the nodes in the network must agree that it’s valid. This process is called consensus.</li></ul></li></ol><button  class='next-btn'}>Next</button>`,
        `<h2>How Does Blockchain Work?</h2><ol><li>Transaction: Imagine you want to send some digital money (like Bitcoin) to a friend. You create a transaction and broadcast it to the network.</li><li>Verification: The nodes in the network check if the transaction is valid. They make sure you have enough money to send and that you’re the rightful owner.</li><li>Block Creation: Once verified, the transaction is grouped with other transactions to form a block. This block is then added to the chain of previous blocks (hence the name blockchain).</li><li>Consensus: The network uses a consensus mechanism (like Proof of Work or Proof of Stake) to agree on the new block. Once agreed, the block is added to the blockchain, and the transaction is complete.</li></ol><button  class='next-btn'}>Next</button>`,
        `<h2>Why is Blockchain Important?</h2><ul><li>Trust: Because the information is transparent and can’t be changed, people can trust that it’s accurate.</li><li>Security: The use of cryptography and consensus mechanisms makes blockchain very secure.</li><li>Decentralization: Without a central authority, blockchain can be more democratic and resistant to censorship.</li></ul><button  class='next-btn'}>Next</button>`,
        `<h2>Real-World Applications (RWAs)</h2><ul><li>Cryptocurrencies: Digital money like Bitcoin and Ethereum use blockchain technology.</li><li>Supply Chain: Companies can track products from the factory to the store, ensuring they are genuine and not tampered with.</li><li>Voting: Blockchain can be used to create secure and transparent voting systems.</li></ul><button  class='next-btn'}>Next</button>`,
        `<h2>Let’s wrap things up</h2><p>So, that’s the brief fundamentals ofblockchain techmology in a nutshell! It’s all about understanding the basics of what blockchain is, how it works, and why it’s important.</p><button  class='next-btn'}>Finish</button>`,
        `<h2>Do you want to take a quiz?</h2><button  class='next-btn'}>Yes</button><button  class='next-btn'}>No</button>`,
      ],
      quizQuestions: [
        `<h2>1. What is a blockchain?</h2><div className='quizAnswer'><input type="radio" name="" id="" /><p>A type of cryptocurrency</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>A decentralized digital ledger</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>A centralized database</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>A type of computer network</p></div><button  class='next-btn'}>Next</button>`,
        `<h2>2. Which of the following is a key feature of blockchain technology?</h2><div className='quizAnswer'><input type="radio" name="" id="" /><p>Centralized control</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>Immutability</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>High transaction fees</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>Limited scalability</p></div><button  class='next-btn'}>Next</button>`,
        `<h2>3. What is the primary purpose of a consensus mechanism in a blockchain?</h2><div className='quizAnswer'><input type="radio" name="" id="" /><p>To increase transaction speed</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>To ensure all participants agree on the state of the ledger</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>To reduce the cost of transactions</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>To centralize control of the network</p></div><button  class='next-btn'}>Next</button>`,
        `<h2>4. Which of the following best describes a smart contract?</h2><div className='quizAnswer'><input type="radio" name="" id="" /><p> A legal agreement between two parties</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>A self-executing contract with the terms directly written into code</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>A traditional paper contract</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>A type of cryptocurrency</p></div><button class='next-btn'}>Finish</button>`,
        `<img src='../../Assets/BookMarkFolder.png' alt="Folder Pics" /><h2>Congratulations!</h2><p>You got 4 out of 4 right.</p><p>You've been rewarded</p><p><b>10 EDX</b></p></button><button  class='next-btn'}>Claim</button><a href='/'><button  class='next-btn'}>Continue Learning</button></a>`
      ],
    },
    {
      id: "0x6d39c3d3bb68302252d3ce13711ba97221b63214d939d9ecfc352582dd2db4ed",
      courses: [
        `<h2>Sui Blockchain Fundamentals</h2><p>Get introduced to the Sui Blockchain ecosystem.</p><p>Course Details:</p><ol><li>What is Sui Blockchain?</li><li>Key Features of Sui Blockchain<ul><li>High Scalability</li><li>Object-centric Architecture</li><li>Low Latency</li></ul></li><li>How Sui Works?</li><li>Importance of Sui Blockchain</li><li>Real-World Applications of Sui</li></ol><button class='next-btn'}>Start Course</button>`,
        `<h2>What is Sui Blockchain?</h2><p>The Sui Blockchain is a Layer 1 blockchain that uses an object-centric model, designed to support a wide range of decentralized applications (dApps) with low fees and fast transaction speeds.</p><button  class='next-btn'}>Next</button>`,
        `<h2>Key Features of Sui Blockchain</h2><ol><li>High Scalability:<ul><li>Sui can handle thousands of transactions per second, making it highly scalable for large-scale applications.</li><li>Parallel Execution: Transactions are processed in parallel, unlike traditional blockchains that process transactions sequentially.</li></ul></li><li>Object-Centric Architecture:<ul><li>Unlike most blockchains that focus on accounts, Sui treats assets as objects that can be directly manipulated in smart contracts.</li><li>This model allows for more complex interactions and more efficient data storage.</li></ul></li><li>Low Latency:<ul><li>With its consensus-less model for simple transactions, Sui achieves sub-second transaction finality, which means near-instant transaction confirmations.</li></ul></li></ol><button  class='next-btn'}>Next</button>`,
        `<h2>How Sui Blockchain Works?</h2><ol><li>Object-based Model: On Sui, assets are stored as objects, and each object has its own unique identifier, version, and owner.</li><li>Parallel Execution: Sui allows transactions that don't overlap to be processed in parallel, making the network more efficient.</li><li>Consensus for Complex Transactions: Sui employs a Byzantine Fault Tolerant (BFT) consensus only for complex transactions that require it, which helps speed up simpler transactions.</li></ol><button  class='next-btn'}>Next</button>`,
        `<h2>Importance of Sui Blockchain</h2><ul><li>Efficiency: Sui's parallel processing capability makes it highly efficient and scalable, suitable for a range of applications.</li><li>Low Transaction Fees: Sui's design leads to lower transaction fees, benefiting users and developers alike.</li><li>Developer-Friendly: Sui is designed to make it easier for developers to build complex dApps with its object-centric approach.</li></ul><button  class='next-btn'}>Next</button>`,
        `<h2>Real-World Applications of Sui</h2><ul><li>DeFi Platforms: Sui's high throughput makes it ideal for decentralized finance applications like lending, staking, and trading.</li><li>Gaming: The Sui ecosystem is particularly well-suited for building decentralized games that require fast transaction times and complex asset interactions.</li><li>NFTs: Sui's object-centric model allows for more intricate NFT functionalities like evolving or upgrading assets.</li></ul><button  class='next-btn'}>Next</button>`,
        `<h2>Let’s wrap things up</h2><p>You now know the basics of the Sui Blockchain, how it works, and its potential impact on various industries.</p><button  class='next-btn'}>Finish</button>`,
        `<h2>Do you want to take a quiz?</h2><button  class='next-btn'}>Yes</button><button  class='next-btn'}>No</button>`,
      ],
      quizQuestions: [
        `<h2>1. What is the primary focus of Sui Blockchain's architecture?</h2><div className='quizAnswer'><input type="radio" name="" id="" /><p>A decentralized finance system</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>An object-centric model for assets</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>A consensus-based model for all transactions</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>A sequential transaction processing system</p></div><button  class='next-btn' onChange={handleAnswerChange} }>Next</button>`,
        `<h2>2. What is a key feature of Sui that makes it highly scalable?</h2><div className='quizAnswer'><input type="radio" name="" id="" /><p>Low transaction fees</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>Object-centric architecture</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>Parallel transaction execution</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>Sequential transaction validation</p></div><button  class='next-btn' onChange={handleAnswerChange} }>Next</button>`,
        `<h2>3. Which consensus mechanism does Sui use for complex transactions?</h2><div className='quizAnswer'><input type="radio" name="" id="" /><p>Proof of Work</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>Proof of Stake</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>Byzantine Fault Tolerant (BFT)</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>No consensus mechanism</p></div><button  class='next-btn' onChange={handleAnswerChange} }>Next</button>`,
        `<h2>4. Why is Sui particularly well-suited for gaming applications?</h2><div className='quizAnswer'><input type="radio" name="" id="" /><p>It has low development costs</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>It has an object-centric architecture allowing complex asset interactions</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>It uses high transaction fees</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>It supports NFTs only</p></div><button  class='next-btn' onChange={handleAnswerChange} }>Finish</button>`,
        `<img src='../../Assets/BookMarkFolder.png' alt="Folder Pics" /><h2>Congratulations!</h2><p>You got 4 out of 4 right.</p><p>You've been rewarded</p><p><b>15 SUI Tokens</b></p><button class='next-btn'}>Claim</button><a href='/'><button class='next-btn'}>Continue Learning</button></a>`
      ],
    },
  ]
  const selectedCourse = edxCourses.find(course => course.id === courseId);

  if (!selectedCourse) {
    return <div>Course not found</div>;
  }
  const { courses, quizQuestions } = selectedCourse;

  // Function to handle button click and move to the next section
  const handleNext = () => {
    if (isQuiz) {
      if (currentIndex < quizQuestions.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        alert("You've completed the quiz and claimed your token");
      }
    } else {
      if (currentIndex < courses.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setIsQuiz(true);
        setCurrentIndex(0);
      }
    }
  };

  const handleAnswerChange = (event) => {
    const selectedAnswer = event.target.value;
    console.log("Selected answer: ", selectedAnswer);
    // Do something with the selected answer
  };

  const handleContentClick = (e) => {
    if (e.target.classList.contains('next-btn')) {
      // console.log(e.target);
      handleNext();
    }
  };

  return (
    <div className='quiz'>
      <h1>EduXVerse</h1>
      <div className='text-details'>
        <img width={500} height={500} src={BlockchainQuizImg} alt="Quiz Heading" />

        <div
          className='quiz-text'
          dangerouslySetInnerHTML={{
            __html: isQuiz
              ? quizQuestions[currentIndex]
              : courses[currentIndex]
          }}
          onClick={handleContentClick}
        />
      </div>
    </div>
  );
}

export default Quiz;