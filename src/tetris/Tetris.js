import React from 'react';
import { useState } from 'react';

import { createStage, checkCollision } from '../gameHelper';

// components
import Stage from './Stage';
import Display from './Display';
import Start from './Start';

// styled components
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';

// custom hooks
import { useInterval } from '../hooks/useInterval';
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage'
import { useGameStatus } from '../hooks/useGameStatus';

const Tetris = () => {

    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
    const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
    const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);


    const movePlayer = (dir) => {
        if (!checkCollision(player, stage, { x: dir, y: 0 })) {
            updatePlayerPos({ x: dir, y: 0 });
        }
    }

    const startGame = () => {
        //reset everything
        setStage(createStage());
        setDropTime(1000);
        resetPlayer();
        setGameOver(false);
        setScore(0);
        setRows(0);
        setLevel(0);


    }

    const drop = () => {
        //increase level when player has cleared 10 rows
        if (rows > (level + 1) * 10) {
            setLevel(prev => prev + 1);
            //also increase speed
            setDropTime(1000 / (level + 1) + 200);
        }
        if (!checkCollision(player, stage, { x: 0, y: 1 })) {
            updatePlayerPos({ x: 0, y: 1, collided: false });
        } else {
            //game over
            if (player.pos.y < 1) {
                console.log("Game Over!");
                setGameOver(true);
                setDropTime(null);
            }
            updatePlayerPos({ x: 0, y: 0, collided: true });
        }
    }

    const keyUp = ({ keyCode }) => {
        if (!gameOver) {
            if (keyCode === 40) {
                console.log("interval on");
                setDropTime(1000 / (level + 1) + 200);
            }
        }
    }

    const dropPlayer = () => {
        console.log("interval off");
        drop();
    }

    const move = ({ keyCode }) => {
        if (!gameOver) {
            if (keyCode === 65) {
                movePlayer(-1);
            }
            else if (keyCode === 68) {
                movePlayer(1);
            }
            else if (keyCode === 83) {
                dropPlayer();
            } else if (keyCode === 87) {
                playerRotate(stage, 1);
            }
        }
    }

    useInterval(() => {
        drop();
    }, dropTime)

    return (
        <StyledTetrisWrapper role='button' tabIndex='0' onKeyDown={(e) => move(e)} onKeyUp={keyUp}>
            <StyledTetris>
                <Stage stage={stage} />
                <aside>
                    {gameOver ? (
                        <Display gameOver={gameOver} text="Game Over" />
                    ) : (
                        <div>
                            <Display text='use WASD to move' />
                            <Display text={`Score: ${score}`} />
                            <Display text={`Rows: ${rows}`} />
                            <Display text={`Levels: ${level}`} />
                        </div>
                    )}
                    <Start callback={startGame} />
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}

export default Tetris;