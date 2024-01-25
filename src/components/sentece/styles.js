import { styled } from 'styled-components';

const StyledContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 540px;
	height: 332px;
	border-radius: 15px;
	background-color: #313a48;
	box-shadow: 30px 50px 80px 0px rgba(0, 0, 0, 0.1);
	margin-inline: auto;
	margin-top: 20vh;
`;

const StyledAdviceId = styled.p`
	margin-top: 50px;
	color: #53ffaa;
	font-family: Manrope;
	font-size: 13px;
	font-style: normal;
	font-weight: 800;
	line-height: normal;
	letter-spacing: 4px;
`;

const StyledSentence = styled.p`
	margin-top: 50px;
	height: 80px;
	width: 444px;
	color: #cee3e9;
	text-align: center;

	font-family: Manrope;
	font-size: 28px;
	font-style: normal;
	font-weight: 800;
`;
const StyledLine = styled.img`
	margin-top: 50px;
`;

const StyledImgContainer = styled.div`
	position: absolute;
	margin-top: 20px;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	width: 64px;
	height: 64px;
	border-radius: 100%;
	background-color: #53ffaa;
	justify-content: center;
	align-items: center;
	bottom: -30px;
`;

export {
	StyledContainer,
	StyledAdviceId,
	StyledSentence,
	StyledImgContainer,
	StyledLine
};
