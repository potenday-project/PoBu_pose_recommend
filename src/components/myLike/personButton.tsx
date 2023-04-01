import {useState} from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
  background-color: ${props => props.theme.colors.background};
	padding: 0 10px 20px;

  button {
		cursor: pointer;
		justify-content: center;
		align-items: center;
    margin: 4px;
    border-radius: 10px;
    width: 80px;
    height: 40px;
    border: none;
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.buttonBackground};
  }

  button.selected {
    border: 2px solid ${props => props.theme.colors.border};
  }
`;

type PersonButtonProps = {
	selectedPose: string[];
	setIsPersonNum: (value: string[]) => void;
};

export default function PersonButton({selectedPose, setIsPersonNum}: PersonButtonProps) {
	const [selectedButton, setSelectedButton] = useState<number | undefined>(undefined);
	const [allButton, setAllButton] = useState(false);

	const handleClick = (num: number) => {
		setSelectedButton(num);
		const filteredPose = selectedPose.filter((src: string) => src[8] === String(num));
		setIsPersonNum(filteredPose);
		setAllButton(false);
	};

	const handleClickAll = () => {
		setSelectedButton(undefined);
		setIsPersonNum(selectedPose);
		setAllButton(true);
	};

	return (
		<ButtonContainer>
			<button
				type='button'
				onClick={handleClickAll}
				className={allButton ? 'selected' : ''}
			>
          전체
			</button>
			{[1, 2, 3, 4, 5, 6].map(item => (
				<button key={item}
					type='button'
					onClick={() => {
						handleClick(item);
					}}
					className={selectedButton === item ? 'selected' : ''}
				>
					{item}명
				</button>
			))}

		</ButtonContainer>
	);
}