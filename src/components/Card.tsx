import React, { useState, useRef } from 'react';
import {
  View,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import Video from 'react-native-video';

const screenWidth = Dimensions.get('window').width;

type MediaItem = {
  type: 'image' | 'video';
  source: any;
};

type CardProps = {
  media: MediaItem[];
  isActive: boolean; // from App.tsx
};

const Card: React.FC<CardProps> = ({ media, isActive }) => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentMediaIndex(viewableItems[0].index);
    }
  }).current;

  const renderItem = ({ item, index }: { item: MediaItem; index: number }) => {
    const isPlaying = isActive && index === currentMediaIndex;

    if (item.type === 'image') {
      return <Image source={item.source} style={styles.media} />;
    }

    return (
      <TouchableWithoutFeedback onPress={() => setIsMuted(!isMuted)}>
        <Video
          source={item.source}
          style={styles.media}
          resizeMode="cover"
          muted={isMuted}
          repeat
          paused={!isPlaying}
        />
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={styles.card}>
      <FlatList
        data={media}
        horizontal
        pagingEnabled
        keyExtractor={(_, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 30 }}
      />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#fff',
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
  },
  media: {
    width: screenWidth,
    height: 600,
    resizeMode: 'cover',
  },
});
