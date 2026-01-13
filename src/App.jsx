import { useState } from 'react';

export default function RockPaperScissors() {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [playerSelection, setPlayerSelection] = useState('');
  const [computerSelection, setComputerSelection] = useState('');
  const [showModal, setShowModal] = useState(false);

  const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
  };

  const determineWinner = (player, computer) => {
    if (player === computer) {
      return 'tie';
    } else if (
      (player === 'rock' && computer === 'scissors') ||
      (player === 'scissors' && computer === 'paper') ||
      (player === 'paper' && computer === 'rock')
    ) {
      return 'player';
    } else {
      return 'computer';
    }
  };

  const handleClick = (choice) => {
    if (playerScore >= 5 || computerScore >= 5) return;

    const computerChoice = getComputerChoice();
    setPlayerSelection(choice);
    setComputerSelection(computerChoice);

    const winner = determineWinner(choice, computerChoice);
    
    if (winner === 'player') {
      const newScore = playerScore + 1;
      setPlayerScore(newScore);
      if (newScore >= 5) setShowModal(true);
    } else if (winner === 'computer') {
      const newScore = computerScore + 1;
      setComputerScore(newScore);
      if (newScore >= 5) setShowModal(true);
    }
  };

  const resetGame = () => {
    setPlayerScore(0);
    setComputerScore(0);
    setPlayerSelection('');
    setComputerSelection('');
    setShowModal(false);
  };

  const targetScore = 5;
  const playerMarkerPosition = Math.min(50, (playerScore / targetScore) * 50);
  const computerMarkerPosition = Math.max(50, 100 - (computerScore / targetScore) * 50);

  return (
    <div className="min-h-screen bg-[#03031e] text-[#bfbf98]" style={{ fontFamily: "'Press Start 2P', cursive" }}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        `}
      </style>

      {/* Header */}
      <header className="sticky top-0 bg-[#03031e] z-10">
        <div className="text-center py-8 px-12">
          <h1 className="text-[#c0c033] text-4xl md:text-5xl lg:text-6xl">
            ROCK PAPER SCISSORS
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-8 my-8 px-12 py-8 text-center">
        <h2 className="text-xl mb-4">Ready for a challenge?😎</h2>
        <h3 className="text-base mb-8">Choose your move and see if you can beat the computer!</h3>

        {/* Progress Bar */}
        <div className="p-6 my-16 mx-auto rounded-3xl shadow-[0_2px_6px_rgba(216,209,179,0.8)]">
          <div className="w-full flex items-center">
            <div className="flex-grow h-5 bg-[#333] rounded-full relative mx-2">
              {/* Player Marker */}
              <div 
                className="absolute -top-1 text-2xl transition-all duration-300 ease-in-out"
                style={{ left: `${playerMarkerPosition}%`, transform: 'translateX(-50%)' }}
              >
                👾
              </div>
              
              {/* Computer Marker */}
              <div 
                className="absolute -top-1 text-2xl transition-all duration-300 ease-in-out"
                style={{ left: `${computerMarkerPosition}%`, transform: 'translateX(-50%)' }}
              >
                🤖
              </div>
              
              {/* Prize */}
              <div 
                className="absolute -top-1 text-2xl"
                style={{ left: '50%', transform: 'translateX(-50%)' }}
              >
                🏆
              </div>
            </div>
          </div>
        </div>

        {/* Points */}
        <div className="flex justify-center gap-16 text-base">
          <div className="my-8 px-12 py-8">You: {playerScore}</div>
          <div className="my-8 px-12 py-8">Computer: {computerScore}</div>
        </div>

        {/* Selections */}
        <div className="flex justify-center gap-16 my-8 text-base">
          <div className="min-w-[120px]">You: {playerSelection}</div>
          <div className="min-w-[120px]">Computer: {computerSelection}</div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-16 flex-wrap p-6 my-16 mx-auto rounded-xl">
          <button
            onClick={() => handleClick('rock')}
            className="bg-[#03031e] text-[#bfbf98] w-[300px] my-8 px-8 py-4 cursor-pointer rounded-xl shadow-[0_2px_6px_rgba(216,209,179,0.8)] transition-transform duration-300 ease-in-out hover:bg-[#c0c033] hover:text-[#03031e] hover:scale-110"
            style={{ fontFamily: "'Press Start 2P', cursive" }}
          >
            ROCK
          </button>
          <button
            onClick={() => handleClick('paper')}
            className="bg-[#03031e] text-[#bfbf98] w-[300px] my-8 px-8 py-4 cursor-pointer rounded-xl shadow-[0_2px_6px_rgba(216,209,179,0.8)] transition-transform duration-300 ease-in-out hover:bg-[#c0c033] hover:text-[#03031e] hover:scale-110"
            style={{ fontFamily: "'Press Start 2P', cursive" }}
          >
            PAPER
          </button>
          <button
            onClick={() => handleClick('scissors')}
            className="bg-[#03031e] text-[#bfbf98] w-[300px] my-8 px-8 py-4 cursor-pointer rounded-xl shadow-[0_2px_6px_rgba(216,209,179,0.8)] transition-transform duration-300 ease-in-out hover:bg-[#c0c033] hover:text-[#03031e] hover:scale-110"
            style={{ fontFamily: "'Press Start 2P', cursive" }}
          >
            SCISSORS
          </button>
        </div>
      </main>

      {/* Footer */}
      <hr className="border-[#bfbf98]" />
      <footer className="text-center text-[#bfbf98] text-xs py-4">
        By: Avneet Kaur &copy; 2026 copyright reserved
      </footer>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/70 flex justify-center items-center">
          <div className="bg-[#03031e] text-[#bfbf98] p-8 rounded-xl text-center max-w-[300px] shadow-[0_0_10px_#c0c033]">
            <p className="text-2xl mb-4 text-[#c0c033] font-bold">
              {playerScore > computerScore ? 'You Win!' : 'Computer Wins!'}
            </p>
            <p className="mb-2 font-bold">Final Score:</p>
            <p className="mb-1">You: {playerScore}</p>
            <p className="mb-4">Computer: {computerScore}</p>
            <button
              onClick={resetGame}
              className="bg-[#c0c033] text-[#03031e] border-none px-4 py-2 mt-4 rounded-md cursor-pointer text-sm"
              style={{ fontFamily: "'Press Start 2P', cursive" }}
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}