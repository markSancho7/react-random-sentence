import { useEffect, useState } from 'react';
import Sentence from '../sentece/Sentece';

const Main = () => {
	const [dataSentence, setDataSentence] = useState({});
	console.log(dataSentence);

	useEffect(() => {
		fetchSentence(setDataSentence);
	}, []);

	if (!dataSentence.id) return <h1>Loading</h1>;
	return (
		<>
			<Sentence
				dataSentence={dataSentence}
				action={() => fetchSentence(setDataSentence)}
			></Sentence>
		</>
	);
};
const fetchSentence = async setDataSentence => {
	const response = await fetch('https://api.adviceslip.com/advice');
	const data = await response.json();
	setDataSentence(data.slip);
};
export default Main;
