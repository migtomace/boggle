import React from 'react';
import { useTimer } from 'react-timer-hook';
import "./Timer.module.css"

export const MyTimer = ({ expiryTimestamp, changeExpired, getRunning, getRestarting }) => {

    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({ expiryTimestamp, onExpire: () => {
        changeExpired(true);
        } });

    getRunning(isRunning);

    return (
        <div style={{textAlign: 'center'}}>
            <div style={{fontSize: '3em'}}>
                <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
            </div>
            <p>{isRunning ? 'Running' : 'Not Running'}</p>
            <button onClick={pause}>Pause</button>
            <button onClick={resume}>Resume</button>
            <button onClick={() => {
                // Restarts to 3 minutes timer
                const time = new Date();
                time.setSeconds(time.getSeconds() + 180);
                restart(time);
                getRunning(isRunning);
                getRestarting(true);
                changeExpired(false);
            }}>3 Minute</button>
            <button onClick={() => {
                // Restarts to 3 minutes timer
                const time = new Date();
                time.setSeconds(time.getSeconds() + 60);
                restart(time);
                getRunning(isRunning);
                getRestarting(true);
                changeExpired(false);
            }}>1 Minute</button>
        </div>
    );
}