import { ViewToken } from "react-native";
import type { SvgRoutesKeys } from '../../components/svg';
import { AppTheme } from '@ui/src'

export interface SliderData {
  uuid: string;
  title: string;
  text: string;
  icon: SvgRoutesKeys
  colorIndex: ColorIndex;
  confirmation?: {
    text: string;
    title: string;
  };
}

export type ColorIndex = keyof AppTheme["pallette"]["slider"];

export interface ViewableItemChanged {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}