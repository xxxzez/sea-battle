import { FC, useRef, useState, useCallback } from 'react';
import { FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';
import { SLIDER_DATA } from './welcome.data';
import { SliderItem } from './components/slider-item';
import { Bullets } from './components/bullets';
import type { SliderData, ViewableItemChanged } from './welcome.type';

const viewabilityConfig = {
  waitForInteraction: true,
  viewAreaCoveragePercentThreshold: 50,
};

export const Welcome: FC = () => {
  const [index, setIndex] = useState(0);
  const [t] = useTranslation();
  const flatListRef = useRef(null);

  const onViewableItemsChanged = useCallback((info: ViewableItemChanged) => {
    const { index } = info.viewableItems[0];
    flatListRef.current.scrollToIndex({ index, animated: true });
    setIndex(index);
  }, []);

  const viewabilityConfigCallbackPairs = useRef([
    { viewabilityConfig, onViewableItemsChanged },
  ]);

  return (
    <>
      <FlatList
        horizontal
        pagingEnabled
        bounces={false}
        data={SLIDER_DATA}
        ref={flatListRef}
        decelerationRate={'fast'}
        keyExtractor={(key: SliderData) => key.uuid}
        showsHorizontalScrollIndicator={false}
        renderItem={(data) => (
          <SliderItem item={data.item} />
        )}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      />
      <Bullets colorIndex={index} count={SLIDER_DATA.length} />
    </>
  );
};
