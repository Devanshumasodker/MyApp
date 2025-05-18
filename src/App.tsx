import React, { useRef, useState } from 'react';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import Card from './components/Card';
import mediaData from './Data/MediaData';

const App = () => {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);

  const viewabilityConfig = useRef({
    viewAreaCoveragePercentThreshold: 30,
  }).current;

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems && viewableItems.length > 0) {
      setActiveCardIndex(viewableItems[0].index);
    }
  }).current;

  // const data = [
  //   { id: '1', media: [{ type: 'image', source: require('./assets/images/aa.jpg') }] },
  //   {
  //     id: '2',
  //     media: [
  //       { type: 'image', source: require('./assets/images/aa.jpg') },
  //       { type: 'image', source: require('./assets/images/aa.jpg') },
  //     ],
  //   },
  //   { id: '3', media: [{ type: 'image', source: require('./assets/images/aa.jpg') }] },
  //   {
  //     id: '4',
  //     media: [
  //       { type: 'image', source: require('./assets/images/aa.jpg') },
  //       { type: 'image', source: require('./assets/images/aa.jpg') },
  //       { type: 'image', source: require('./assets/images/aa.jpg') },
  //     ],
  //   },
  //   { id: '5', media: [{ type: 'image', source: require('./assets/images/aa.jpg') }] },
  //   {
  //     id: '6',
  //     media: [
  //       { type: 'image', source: require('./assets/images/aa.jpg') },
  //       { type: 'image', source: require('./assets/images/aa.jpg') },
  //     ],
  //   },
  //   { id: '7', media: [{ type: 'video', source: require('./assets/videos/v2.mp4') }] },
  //   { id: '8', media: [{ type: 'video', source: require('./assets/videos/v3.mp4') }] },
  //   { id: '9', media: [{ type: 'video', source: require('./assets/videos/v4.mp4') }] },
  // ];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={mediaData}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <Card media={item.media} isActive={index === activeCardIndex} />
        )}
        contentContainerStyle={styles.scrollContent}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContent: {
    paddingVertical: 10,
  },
});
