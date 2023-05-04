import { FC } from 'react';
import { Svg } from '../svg';
import { Button } from "../button";

interface CheckboxProps {
  checked: boolean;
  color?: string;
  onPress: () => void;
}

export const Checkbox: FC<CheckboxProps> = ({
  checked,
  color,
  onPress
}) => {
  return (
    <Button variant='text' onPress={onPress}>
      <Svg color={color} icon={checked ? 'checkboxChecked' : 'checkboxUnchecked'} />
    </Button>
  );
};
