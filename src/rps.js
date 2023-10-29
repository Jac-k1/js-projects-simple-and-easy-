import './rps.css'
import React, { useState } from 'react';
import { useEffect } from 'react';

import rock from './images/rock.png';
import paper from './images/paper.png';
import scissors from './images/scissors.png';



const Rps = () => {

    const [userScore, setUserScore] = useState(0);
    const [cpuScore, setCpuScore] = useState(0);
    
    const [userChoice, setUserChoice] = useState('');
    const [cpuChoice, setCpuChoice] = useState('');

    const [result, setResult] = useState('Let The game begin!');
    
    const win = () => {
        setUserScore((prevUserScore) => prevUserScore + 1);
        setResult(userChoice + ' beats ' + cpuChoice + '. You Win!');
    }

    const lose = () => {
        setCpuScore((prevCpuScore) => prevCpuScore + 1);
        setResult(cpuChoice + ' beats ' + userChoice + '. You Lose!');
    }

    const draw = () => {
        setResult('Draw!');
    }
    
    const getComputerChoice = () => {
        const choices = ['rock', 'paper', 'scissors'];
        const randomNumber = Math.floor(Math.random() * 3);
        setCpuChoice(choices[randomNumber]);
        return choices[randomNumber];
    }

    const handleUserChoice = (choice) => {
        setUserChoice(choice);
        const cpuChoice = getComputerChoice();
    }

    useEffect(() => {
        if (userChoice && cpuChoice) {
          switch (userChoice + cpuChoice) {
            case 'rockscissors':
            case 'paperrock':
            case 'scissorspaper':
              win();
              break;
            case 'rockpaper':
            case 'paperscissors':
            case 'scissorsrock':
              lose();
              break;
            case 'rockrock':
            case 'paperpaper':
            case 'scissorsscissors':
              draw();
              break;
            default:
              setResult("Invalid choice.");
          }
        }
      }, [userChoice, cpuChoice]);

    
    return (
        <div className='rps-game'>
            <header>
                <h1>Rock Paper Scissors</h1>
            </header>
            <div className='Score'>
                <div id='user'className='player'>User</div>
                <div id='cpu' className='player'>Cpu</div>
                <span id='user-score'>{userScore}</span>:<span id='cpu-score'>{cpuScore}</span>
            </div>

            <div className='result'>{result}</div>

            <div className='choices'>
                <div className='rock' id='r'>
                    <img src={rock} alt='rock' onClick={() => handleUserChoice('rock')}/>
                </div>
                <div className='paper' id='p'>
                    <img src={paper} alt='paper' onClick={() => handleUserChoice('paper')} />
                </div>
                <div className='scissors' id='s'>
                    <img src={scissors} alt='scissors' onClick={() => handleUserChoice('scissors')} />
                </div>
            </div>
            <div className='action'>
                <p>Pick your weapon!</p>
            </div>
        </div>
    )
}

export default Rps;