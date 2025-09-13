import Switch from "./Styled/Switch";
import Checkbox from "./Styled/Checkbox";
import Slider from "./Styled/Slider";
import Container from "./Styled/Container";
import Title from "./Styled/Title";
import type React from "react";

type SliderButtonProps = {
  onClick: () => void;
  isDarkMode: boolean;
};

const SliderButton: React.FC<SliderButtonProps> = ({ onClick, isDarkMode }) => {
  return (
    <div>
      <Container>
        <Title marginright="10px">Light</Title>
        <Switch>
          <Checkbox type="checkbox" checked={isDarkMode} onChange={onClick} />
          <Slider />
        </Switch>
        <Title marginleft="10px">Dark</Title>
      </Container>
    </div>
  );
};

export default SliderButton;
