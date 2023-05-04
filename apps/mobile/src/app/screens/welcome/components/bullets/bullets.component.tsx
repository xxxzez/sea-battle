import { FC } from 'react';
import * as Styled from './bullets.style';

interface BulletProps {
  count: number;
  colorIndex: number;
}

export const Bullets: FC<BulletProps> = ({ count, colorIndex }) => {
  const bullets = Array.from(Array(count).keys());

  return (
    <Styled.Wrapper>
      {bullets.map((key) => (
        <Styled.Bullet colorIndex={colorIndex} active={colorIndex === key} key={key} />
      ))}
    </Styled.Wrapper>
  );
};
