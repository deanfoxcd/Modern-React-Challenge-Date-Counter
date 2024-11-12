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

  return <div></div>;
};
