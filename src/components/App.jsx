import { useEffect, useState } from "react";
import Description from './Description/Description';
import Feedback from './Feedback/Feedback';
import Options from './Options/Options';

function App() {
  const [values, setValues] = useState(() => {
    const savedValues = window.localStorage.getItem("saved-feedbacks");
    if (savedValues !== null) {
      return JSON.parse(savedValues);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0
    };
  });

  useEffect(() => {
    window.localStorage.setItem("saved-feedbacks", JSON.stringify(values));
  }, [values]);

const updateFeedback = feedbackType => {
    setValues(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1
    }));
  };

}

export default App