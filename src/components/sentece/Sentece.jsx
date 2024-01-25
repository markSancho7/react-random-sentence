import {
	StyledAdviceId,
	StyledContainer,
	StyledImgContainer,
	StyledLine,
	StyledSentence
} from './styles';

const Sentence = ({ dataSentence, action }) => {
	return (
		<StyledContainer>
			<StyledAdviceId>ADVICE #{dataSentence.id}</StyledAdviceId>
			<StyledSentence>{dataSentence.advice}</StyledSentence>

			<StyledLine src='public/images 3/pattern-divider-desktop.svg' alt='' />
			<StyledImgContainer>
				<img src='public/images 3/icon-dice.svg' alt='' onClick={action} />
			</StyledImgContainer>
		</StyledContainer>
	);
};
export default Sentence;
