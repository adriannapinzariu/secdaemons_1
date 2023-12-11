import React from 'react';
import './TerminalUI.css'; 

const TerminalUI = () => {
    return (
        <div className="terminal">
            <div className="terminal-header">
                <div className="terminal-button red"></div>
                <div className="terminal-button yellow"></div>
                <div className="terminal-button green"></div>
            </div>
            <div className="terminal-body">
                <p className="terminal-text">user@destination:~$</p>
                <div className="terminal-line">
                    <span className="terminal-input">Welcome to the Terminal UI!</span>
                    <div className="terminal-cursor"></div>
                </div>
            </div>
        </div>
    );
};

export default TerminalUI;

