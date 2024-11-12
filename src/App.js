import { useState } from 'react';

export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

const Counter = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const handleNextCount = () => {
    setCount((c) => c + step);
  };

  const handlePrevCount = () => {
    setCount((c) => c - step);
  };

  const handleReset = () => {
    setCount(0);
    setStep(1);
  };

  const currDate = new Date();

  const daysToAdd = count;
  currDate.setDate(currDate.getDate() + daysToAdd);

  const day = currDate.toLocaleString('default', {
    weekday: 'short',
  });
  const month = currDate.toLocaleString('default', { month: 'short' });
  const date = currDate.getDate();
  const year = currDate.getFullYear();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: 'auto',
      }}
    >
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Step: {step}</span>
      </div>
      <div>
        <button onClick={handlePrevCount}> - </button>
        <span>
          <input
            type="text"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
        </span>
        <button onClick={handleNextCount}> + </button>
      </div>
      <p>
        {count === 0
          ? 'Today is '
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `}
        {day} {month} {date} {year}
        {/* {step * count} days from today is  */}
      </p>

      {step !== 1 || count !== 0 ? (
        <button onClick={handleReset}>RESET</button>
      ) : (
        ''
      )}
    </div>
  );
};
