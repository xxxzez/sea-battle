import type { SliderData } from './welcome.type';

export const SLIDER_DATA: SliderData[] = [
  {
    uuid: '1',
    title: 'slider.slide-1.title',
    text: 'slider.slide-1.text',
    colorIndex: 0,
    icon: 'pa',
  },
  {
    uuid: '2',
    title: 'slider.slide-2.title',
    text: 'slider.slide-2.text',
    colorIndex: 1,
    icon: 'fr',
  },
  {
    uuid: '3',
    title: 'slider.slide-3.title',
    text: 'slider.slide-3.text',
    colorIndex: 2,
    icon: 'ms',
    confirmation: {
      text: 'slider.slide-3.confirmation.text',
      title: 'slider.slide-3.confirmation.title',
    }
  },
];
