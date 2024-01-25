import { useEffect, useState } from 'react';
import Sentence from '../sentece/Sentece';

const Main = () => {
	const [dataSentence, setDataSentence] = useState({
		id: 23,
		advice: 'pepe'
	});
	console.log(dataSentence);

	useEffect(() => {
		fetchSentence(setDataSentence);
	}, []);

	return (
		<>
			<Sentence
				dataSentence={dataSentence}
				action={fetchSentence}
				setDataSentence={setDataSentence}
			></Sentence>
		</>
	);
};
const fetchSentence = async setDataSentence => {
	const response = await fetch('https://api.adviceslip.com/advice');
	const data = await response.json();
	setDataSentence(data);
};
export default Main;
