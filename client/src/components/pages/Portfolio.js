import React from 'react';
import Projects from '../Projects'
import '../styles/Portfolio.css'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';


export default function Portfolio() {
  return (
    <div>
      <div className="portfolioTitle">Projects  <span><AiOutlineFundProjectionScreen/> </span></div>
      <Projects />
    </div>
  );
}
