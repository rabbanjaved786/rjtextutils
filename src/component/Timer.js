import React, { useState, useEffect } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleChange = (e) => {
    if (timer > 0) {
      setText(e.target.value);
    }
  };

  return (
    <div>
      <div>
        <textarea
          value={text}
          onChange={handleChange}
          placeholder={props.heading}
        ></textarea>
      </div>
      <div>
        <button onClick={() => setTimer(60)}>Start Timer</button>
        <span>{timer > 0 ? `Time remaining: ${timer}s` : 'Timer expired'}</span>
      </div>
      <button disabled={timer <= 0} onClick={() => setText('')}>
        {props.ClearValue}
      </button>
      <button disabled={timer <= 0} onClick={() => setText(text.toUpperCase())}>
        {props.Bvalue}
      </button>
      <button disabled={timer <= 0} onClick={() => setText(text.toLowerCase())}>
        {props.lvalue}
      </button>
    </div>
  );
}
