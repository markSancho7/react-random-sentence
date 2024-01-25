import {
	StyledAdviceId,
	StyledContainer,
	StyledImgContainer,
	StyledLine,
	StyledSentence
} from './styles';

const Sentence = ({ dataSentence, action, setDataSentence }) => {
	return (
		<StyledContainer>
			<StyledAdviceId>ADVICE #{dataSentence.slip.id}</StyledAdviceId>
			<StyledSentence>{dataSentence.slip.advice}</StyledSentence>
			{/* {dataSentence.slip.id} */}
			{/* {dataSentence.slip.advice} */}

			<StyledLine src='public/images 3/pattern-divider-desktop.svg' alt='' />
			<StyledImgContainer>
				<img
					src='public/images 3/icon-dice.svg'
					alt=''
					onClick={() => action(setDataSentence)}
				/>
			</StyledImgContainer>
		</StyledContainer>
	);
};
export default Sentence;
