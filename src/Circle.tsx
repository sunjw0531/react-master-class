import styled from 'styled-components';
import { useState } from 'react';
interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
`;

const Circle = ({
  bgColor,
  borderColor,
  text = 'default Text',
}: CircleProps) => {
  const [state, setState] = useState<number | string>(0);
  setState(1);
  setState('a');
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
};

export default Circle;
