import React, { useState, useRef } from 'react';
import {
  View,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
import Video from 'react-native-video';

const screenWidth = Dimensions.get('window').width;

type MediaItem = {
  type: 'image' | 'video';
  source: any;
};

type CardProps = {
  media: MediaItem[];
  isActive: boolean;
  username: string;
  description: string;
  profilePic: any;
  isMuted: boolean;
  toggleMute: () => void;
};

const Card: React.FC<CardProps> = ({
  media,
  isActive,
  username,
  description,
  profilePic,
  isMuted,
  toggleMute
}) => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

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
      <TouchableWithoutFeedback onPress={toggleMute}>
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
      {/* Header */}
      <View style={styles.header}>
        <Image source={profilePic} style={styles.profilePic} />
        <Text style={styles.username}>{username}</Text>
      </View>

      {/* Media */}
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

      {/* Description */}
      <Text style={styles.description}>{description}</Text>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  media: {
    width: screenWidth,
    height: 600,
    resizeMode: 'cover',
  },
  description: {
    padding: 10,
    fontSize: 14,
    color: '#333',
  },
});
