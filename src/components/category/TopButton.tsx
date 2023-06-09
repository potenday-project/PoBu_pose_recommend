import styled from 'styled-components';
import { useReadLocalStorage } from 'usehooks-ts';

const Container = styled.div`
  position: absolute;
  width: 4.8rem;
  height: 4.8rem;
  right: 1.6rem;
`;

const Button = styled.button`
  position: fixed;
  bottom: 8rem;
  z-index: 99;
  background-color: transparent;
  border: none;
  padding: 0;
  width: 4.8rem;
  height: 4.8rem;
  cursor: pointer;

  img {
    width: 4.8rem;
    height: 4.8rem;
    filter: drop-shadow( 0 2px 4px 0 rgba(0, 0, 0, 0.1));
  }
`;

export default function TopButton() {
  const isDarkMode = useReadLocalStorage('darkMode');

  const handleTopButtonClick = () => {
    if (!window.scrollY) return;
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Container>
      <Button onClick={handleTopButtonClick}>
        <img
          src={isDarkMode ? '/images/icon_top_dark.svg' : '/images/icon_top_light.svg'}
          alt="상단 이동 버튼"
        />
      </Button>
    </Container>
  );
}
