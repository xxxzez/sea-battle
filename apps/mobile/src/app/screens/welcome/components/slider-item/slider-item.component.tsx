import React, {
  FC,
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import Animated, { FadeOut, FadeIn, Layout } from 'react-native-reanimated';
import { useTranslation } from 'react-i18next';
import { AppTheme } from '@ui/src';
import { useTheme } from 'styled-components';
import { SliderData } from '../../welcome.type';
import { Svg } from '@ui/src';
import { Checkbox } from '@ui/src';
import * as Styled from './slider-item.style';

interface SliderItemProps {
  item: SliderData;
}

const BUTTONS_ENTERING_DELAY = 150;
const BUTTONS_ENTERING_DURATION = 500;
const BUTTONS_EXITING_DURATION = 150;

export const SliderItem: FC<SliderItemProps> = ({
  item: { colorIndex, title, text, icon, confirmation },
}) => {
  const [t] = useTranslation();
  const theme = useTheme() as AppTheme;
  const [checked, setChecked] = useState(false);

  const onCheckboxPress = () => setChecked((prev) => !prev);

  const onButtonPress = () => {
    // TODO:
  };

  return (
    <Styled.SlideWrapper colorIndex={colorIndex}>
      <Animated.View layout={Layout.springify()}>
        <Styled.ContentWrapper>
          <Svg icon={icon} size={70} />
          <Styled.SlideTitle colorIndex={colorIndex}>
            {t(title)}
          </Styled.SlideTitle>
          <Styled.SlideDescription colorIndex={colorIndex}>
            {t(text)}
          </Styled.SlideDescription>
          {confirmation && (
            <>
              <Styled.ConfirmationTitle colorIndex={colorIndex}>
                {t(confirmation.title)}
              </Styled.ConfirmationTitle>
              <Styled.ConfirmationSection>
                <Checkbox
                  color={theme.pallette.slider[colorIndex].textColor}
                  checked={checked}
                  onPress={onCheckboxPress}
                />
                <Styled.ConfirmationText colorIndex={colorIndex}>
                  {t(confirmation.text)}
                </Styled.ConfirmationText>
              </Styled.ConfirmationSection>
            </>
          )}
        </Styled.ContentWrapper>
      </Animated.View>
      {checked && (
        <Animated.View
          layout={Layout}
          entering={FadeIn.delay(BUTTONS_ENTERING_DELAY).duration(
            BUTTONS_ENTERING_DURATION
          )}
          exiting={FadeOut.duration(BUTTONS_EXITING_DURATION)}
        >
          <Styled.AuthButton
            disabled={!checked}
            color={theme.pallette.slider[colorIndex].textColor}
            textColor={theme.pallette.slider[colorIndex].backgroundColor}
            variant="contained"
            title={t('slider.slide-3.sign-up-button')}
            onPress={onButtonPress}
          />
          <Styled.AuthButton
            disabled={!checked}
            color={theme.pallette.slider[colorIndex].textColor}
            variant="outlined"
            title={t('slider.slide-3.sign-in-button')}
            onPress={onButtonPress}
          />
        </Animated.View>
      )}
    </Styled.SlideWrapper>
  );
};
