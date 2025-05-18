import React from 'react';
import { View, Image, FlatList, StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

type CardProps = {
  images: any[]; // array of image sources
};

const Card: React.FC<CardProps> = ({ images }) => {
  const renderImage = () => {
    if (images.length > 1) {
      return (
        <FlatList
          data={images}
          horizontal
          pagingEnabled
          keyExtractor={(_, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Image source={item} style={styles.image} />
          )}
        />
      );
    } else {
      return <Image source={images[0]} style={styles.image} />;
    }
  };

  return <View style={styles.card}>{renderImage()}</View>;
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
  image: {
    width: screenWidth,
    height: 600,
    resizeMode: 'cover',
  },
});
