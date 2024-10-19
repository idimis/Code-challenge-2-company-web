"use client";

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Header from '@/components/Header';

import twitterIcon from '@/public/icons/twitter.png';
import instagramIcon from '@/public/icons/instagram.png';
import facebookIcon from '@/public/icons/facebook.jpg';
import whatsappIcon from '@/public/icons/whatsapp.png';

import adventurerIcon from '@/public/personality/adventurer.jpg'
import builderIcon from '@/public/personality/builder.jpg'
import campaignerIcon from '@/public/personality/campaigner.jpg'
import inventorIcon from '@/public/personality/inventor.jpg'
import observerIcon from '@/public/personality/observer.jpg'
import philosopherIcon from '@/public/personality/philosopher.jpg'
import researcherIcon from '@/public/personality/researcher.jpg'
import skepticIcon from '@/public/personality/skeptic.jpg'
import educatorIcon from '@/public/personality/educator.jpg'
import warriorIcon from '@/public/personality/warrior.jpg'


interface PersonalityType {
  name: string;
  description: string;
  illustration: StaticImageData; 
}

const questions = [
  {
    question: "1/10: What do you do when you find litter in your community?",
    options: ["Hoping that somebody will pick it up", "Pick it up and dispose of it", "Use it for a DIY project"],
    scores: [0, 1, 2],
  },
  {
    question: "2/10: How often do you use public transportation?",
    options: ["Rarely", "Sometimes", "Always"],
    scores: [0, 1, 2],
  },
  {
    question: "3/10: How do you feel about recycling?",
    options: ["It's too much hassle", "I recycle occasionally", "I always recycle everything I can"],
    scores: [0, 1, 2],
  },
  {
    question: "4/10: What type of products do you prefer to buy?",
    options: ["Single-use products", "Some reusable products", "Mainly reusable and sustainable products"],
    scores: [0, 1, 2],
  },
  {
    question: "5/10: How do you dispose of food waste?",
    options: ["Throw it in the regular trash", "Compost it if possible", "I have a composting system at home"],
    scores: [0, 1, 2],
  },
  {
    question: "6/10: How do you travel to work?",
    options: ["By car", "By train or bus", "By bike or walking"],
    scores: [0, 1, 2],
  },
  {
    question: "7/10: How often do you support local environmental initiatives?",
    options: ["Sometimes", "Often", "Always"],
    scores: [0, 1, 2],
  },
  {
    question: "8/10: What do you think about climate change?",
    options: ["I've heard about it, but I'm not sure", "I knew it, but just in the surface", "I believe it's a serious issue that needs urgent action"],
    scores: [0, 1, 2],
  },
  {
    question: "9/10: How do you handle energy consumption at home?",
    options: ["I rarely turn off my lights", "I turn off lights when not in use", "I use energy-efficient appliances"],
    scores: [0, 1, 2],
  },
  {
    question: "10/10: How often do you educate others about sustainability?",
    options: ["Rarely", "Sometimes", "Often"],
    scores: [0, 1, 2],
  },
];

const personalityTypes = [
  {
    name: "The Skeptic",
    description: "You are aware of environmental issues but remain unconvinced of their urgency. Your critical thinking encourages you to seek out the truth, urging others to provide concrete evidence before you take action.",
    illustration: skepticIcon,
    scoreRange: [0, 1]
  },
  {
    name: "The Observer",
    description: "You are interested in environmental issues but haven't engaged actively. By staying informed, you possess the potential to become a catalyst for change; your observations could inspire others to take action alongside you.",
    illustration: observerIcon,
    scoreRange: [2, 4]
  },
  {
    name: "The Adventurer",
    description: "You believe in living simply, exploring nature, and avoiding excess. Your appreciation for the great outdoors drives you to seek balance, reminding others that happiness often lies in the beauty of simplicity.",
    illustration: adventurerIcon,
    scoreRange: [5, 6]
  },
  {
    name: "The Campaigner",
    description: "You actively promote sustainability and encourage others to change. Your passion for the environment empowers those around you, and your voice serves as a rallying cry for collective action toward a greener future.",
    illustration: campaignerIcon,
    scoreRange: [7, 8]
  },
  {
    name: "The Builder",
    description: "You work with others to create a sustainable community. Your collaborative spirit fosters connections that transform individual efforts into a powerful movement, illustrating that together we can achieve remarkable change.",
    illustration: builderIcon,
    scoreRange: [9, 10]
  },
  {
    name: "The Educator",
    description: "You strive to inform others about the importance of environmental conservation. Your knowledge and dedication empower those around you, turning awareness into action and inspiring future generations to safeguard our planet.",
    illustration: educatorIcon,
    scoreRange: [11, 12]
  },
  {
    name: "The Researcher",
    description: "You analyze data and evidence to understand environmental issues. Your analytical mind seeks to uncover the facts, providing a solid foundation for informed decisions and encouraging others to rely on evidence-based solutions.",
    illustration: researcherIcon,
    scoreRange: [13, 14]
  },
  {
    name: "The Inventor",
    description: "You are always looking for new ways to reduce your carbon footprint. Your innovative thinking drives you to explore cutting-edge solutions, showing that creativity can pave the way toward a more sustainable world.",
    illustration: inventorIcon,
    scoreRange: [15, 16]
  },
  {
    name: "The Philosopher",
    description: "You take this universe seriously, having deep contemplation on our environment and its preservation. Your profound insights encourage others to reflect on their impact, fostering a culture of mindfulness and respect for nature's wonders.",
    illustration: philosopherIcon,
    scoreRange: [17, 18]
  },
  {
    name: "The Warrior",
    description: "You are deeply committed to the environment and take real action. Your fierce dedication ignites passion in others, proving that true change requires courage and relentless pursuit of a sustainable future.",
    illustration: warriorIcon,
    scoreRange: [19, 20]
  },
];

const GreenPersonQuiz = () => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(0));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [result, setResult] = useState<PersonalityType | null>(null); 
  const [loading, setLoading] = useState(false);
  const [fade, setFade] = useState(false);
  const [name, setName] = useState('');
  const [quizStarted, setQuizStarted] = useState(false); 


  const handleOptionChange = (score: number) => {
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = score;
      setAnswers(newAnswers);

      setFade(true);
      setTimeout(() => {
          nextQuestion(); 
      }, 200); 
  };

  const nextQuestion = () => {
      if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
      } else {
          setLoading(true); 
          setTimeout(calculateResult, 1500); 
      }
      setFade(false);
  };

  const calculateResult = () => {
      const totalScore = answers.reduce((a, b) => a + b, 0);
      
      const personality = personalityTypes.find(type => 
          totalScore >= type.scoreRange[0] && totalScore <= type.scoreRange[1]
      );
      
      setResult(personality || null); 
      setLoading(false); 
  };

  const takeQuizAgain = () => {
      setAnswers(Array(questions.length).fill(0));
      setCurrentQuestion(0);
      setResult(null);
      setLoading(false);
      setQuizStarted(false); 
      setName(''); 
  };

  const openFeedbackForm = () => {
      window.open('https://tc937352e8l.typeform.com/to/nVg9PjfZ', '_blank'); 
  };

  const startQuiz = () => {
      setQuizStarted(true); 
  };

  

  return (
    <div className="max-w-[800px] mx-auto p-4 flex flex-col items-center justify-center min-h-screen pt-4 md:pt-6"> 
    <h2 className="text-4xl font-bold mb-2 text-center leading-snug mt-0"> 
      What <span className="text-green-600">Green</span> Personality Are You?
    </h2>
    {!quizStarted ? (
      <div className="flex flex-col items-center mt-4"> 
        <p className="mb-4 text-lg text-center max-w-md">
          This quiz will help you discover your environmental personality 
          based on your values, habits, and preferences.
          <span className="block mt-4">
          Please enter your name to start:
          </span>
        </p>
                  <input 
                      type="text" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      placeholder="Your name" 
                      className="border-2 border-black p-2 mb-4 bg-transparent rounded-lg"
                      
                  />
                  <button 
                      onClick={startQuiz} 
                      className="border-2 border-black rounded-lg py-2 px-4 bg-transparent text-gray-600 hover:bg-gray-200"
                  >
                      Start Quiz
                  </button>
              </div>
          ) : loading ? (
              <div className="text-center">
                  <p className="text-xl">Please wait for a moment...</p>
                  <p className="text-lg">Calculating your result...</p>
              </div>
          ) : result ? (
              <div className="text-center mt-2">
                  <h3 className="text-2xl flex flex-col items-center mb-4 mt-2">
                    Hey {name}! You are
                        <span className="text-4xl font-semibold">{result.name}</span>
                            </h3>
                  <div className="flex justify-center">
                      <Image 
                          src={result.illustration} 
                          alt={result.name} 
                          className="rounded-full" 
                          width={300} 
                          height={300}
                      />
                  </div>
                  <p className="mt-4 text-lg">{result.description}</p>
                  
                  <div className="flex flex-col items-center space-y-4 mt-6">
                      <button 
                          onClick={takeQuizAgain} 
                          className="border-2 border-black rounded-lg py-2 px-4 bg-transparent text-gray-600 hover:bg-gray-200"
                      >
                          Take Quiz Again?
                      </button>

                      <button
                          onClick={openFeedbackForm}
                          className="border-2 border-black rounded-lg py-2 px-4 bg-transparent text-gray-600 hover:bg-gray-200"
                      >
                          Give us Feedback
                      </button>
                  </div>
              </div>
          ) : (
              <div className="w-full">
                  <h3 className="text-xl font-semibold mb-4">{questions[currentQuestion].question}</h3>
                  <div className={`transition-opacity duration-200 ${fade ? 'opacity-0' : 'opacity-100'}`}>
                      <div className="flex flex-col">
                          {questions[currentQuestion].options.map((option, index) => {
                              const isSelected = answers[currentQuestion] === questions[currentQuestion].scores[index];
                              return (
                                  <button
                                      key={index}
                                      className={`border-2 rounded-lg p-4 mb-2 text-left 
                                          ${isSelected ? 'text-lightseagreen' : 'bg-transparent text-black'}
                                          hover:bg-gray-300`}  
                                      onClick={() => handleOptionChange(questions[currentQuestion].scores[index])}
                                  >
                                      {option}
                                  </button>
                              );
                          })}
                      </div>
                  </div>
              </div>
          )}
          {result && (
              <div className="mt-6 md:mt-8">
                  <h4 className="text-lg font-bold mb-2 text-center">Share your results!</h4>
                  <div className="flex space-x-4">
                      <a href={`https://api.whatsapp.com/send?text=I just took the Eco-friendly quiz from https://new-world-web.vercel.app/ and I'm a ${result.name}!`} target="_blank" rel="noopener noreferrer">
                          <Image src={whatsappIcon} alt="Share on WhatsApp" width={40} height={40} />
                      </a>
                      <a href={`https://twitter.com/intent/tweet?text=I just took the Eco-friendly quiz from https://new-world-web.vercel.app/  and I'm a ${result.name}!`} target="_blank" rel="noopener noreferrer">
                          <Image src={twitterIcon} alt="Share on Twitter" width={40} height={40} />
                      </a>
                      <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=I just took the New-world green personality quiz and I'm a ${result.name}!`} target="_blank" rel="noopener noreferrer">
                          <Image src={facebookIcon} alt="Share on Facebook" width={40} height={40} />
                      </a>
                      <a href={`https://www.instagram.com/?url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer">
                          <Image src={instagramIcon} alt="Share on Instagram" width={40} height={40} />
                      </a>
                  </div>
              </div>
          )}
      </div>
  );
};

  
  
  export default function GreenPersonalityQuiz() {
    return (
      <div>
        <Header />
        <GreenPersonQuiz />
        
      </div>
    );
  }