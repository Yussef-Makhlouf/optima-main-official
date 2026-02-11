
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const InteractiveTerminal: React.FC = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState<string[]>(['> SYSTEM_READY', '> TYPE "HELP" FOR COMMANDS']);
    const inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const handleCommand = (cmd: string) => {
        const command = cmd.trim().toLowerCase();
        let response = `> ${cmd}`;
        let action = null;

        switch (command) {
            case 'help':
                setOutput(prev => [...prev, response, 'AVAILABLE COMMANDS:', '- SERVICES', '- PROJECTS', '- ABOUT', '- CONTACT', '- CLEAR']);
                break;
            case 'services':
                setOutput(prev => [...prev, response, 'REDIRECTING TO /SERVICES...']);
                action = () => setTimeout(() => navigate('/services'), 1000);
                break;
            case 'projects':
                setOutput(prev => [...prev, response, 'ACCESSING PROJECT ARCHIVES...']);
                action = () => setTimeout(() => navigate('/projects'), 1000);
                break;
            case 'about':
                setOutput(prev => [...prev, response, 'LOADING OPTIMA_PROFILE...']);
                action = () => setTimeout(() => navigate('/about'), 1000);
                break;
            case 'contact':
                setOutput(prev => [...prev, response, 'OPENING COMM_CHANNELS...']);
                action = () => setTimeout(() => navigate('/contact'), 1000);
                break;
            case 'clear':
                setOutput(['> CONSOLE_CLEARED']);
                break;
            default:
                setOutput(prev => [...prev, response, `ERROR: COMMAND "${command}" NOT RECOGNIZED`]);
        }

        if (action) action();
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleCommand(input);
            setInput('');
        }
    };



    return (
        <section className="py-24 bg-black font-mono text-green-500 p-6 md:p-12 relative overflow-hidden border-y border-green-900/30">
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%]"></div>

            <div className="max-w-3xl mx-auto border border-green-800/50 bg-black/90 p-6 shadow-[0_0_20px_rgba(0,255,0,0.1)] rounded-md relative z-20">
                <div className="flex justify-between items-center border-b border-green-900/50 pb-2 mb-4">
                    <span className="text-xs text-green-700">GUEST@OPTIMA-TML:~</span>
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                    </div>
                </div>

                <div className="h-64 overflow-y-auto font-mono text-sm space-y-1 scrollbar-hide">
                    {output.map((line, i) => (
                        <div key={i} className="opacity-80 hover:opacity-100 transition-opacity">{line}</div>
                    ))}
                    <div ref={inputRef}></div>
                </div>

                <div className="mt-4 flex items-center border-t border-green-900/50 pt-2">
                    <span className="mr-2 text-green-400">$</span>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="bg-transparent border-none outline-none text-green-400 w-full placeholder-green-900"
                        placeholder="ENTER_COMMAND..."
                    />
                </div>
            </div>
        </section>
    );
};

export default InteractiveTerminal;
