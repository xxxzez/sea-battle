import { FC } from 'react';
import { type SvgRoutesKeys, sgvRoutes } from './svg.data';

interface SvgProps {
  size?: number;
  color?: string;
  icon: SvgRoutesKeys;
}

export const Svg: FC<SvgProps> = ({
  size = 30,
  color,
  icon
}) => {
  const Icon = sgvRoutes[icon];
  return <Icon fill={color} width={size} height={size} />;
};
