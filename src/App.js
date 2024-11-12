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

  const handleNextStep = () => {
    setStep((s) => s + 1);
  };

  const handlePrevStep = () => {
    setStep((s) => s - 1);
  };

  const handleNextCount = () => {
    setCount((c) => c + step);
  };

  const handlePrevCount = () => {
    setCount((c) => c - step);
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
        <button onClick={handlePrevStep}> - </button>
        <span> Step: {step} </span>
        <button onClick={handleNextStep}> + </button>
      </div>
      <div>
        <button onClick={handlePrevCount}> - </button>
        <span> Count: {count} </span>
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
    </div>
  );
};
