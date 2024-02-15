import { useState } from 'react';
import '../components/App.css';
import Description from './Description/Description';
import Feedback from './Feedback/Feedback';
import Options from './Options/Options';

const App = () => {
	const [ clicks, setClicks ] = useState(0);

const handleClick = () => {
    // clicks = clicks + 1;
		setClicks(clicks + 1);
  };

	return <button onClick={handleClick}>Current: {clicks}</button>
}

export default App
