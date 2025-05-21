import React, {useRef, useState} from 'react';
import {SafeAreaView, FlatList, StyleSheet} from 'react-native';
import Card from './components/Card';
import mediaData from './Data/MediaData';

const App = () => {
  // Our States
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState(true);


  // Refs
  const viewabilityConfig = useRef({
    viewAreaCoveragePercentThreshold: 30,
  }).current;

  // Functions
    const toggleMute = () => setIsMuted(prev => !prev);


  const onViewableItemsChanged = useRef(({viewableItems}: any) => {
    if (viewableItems && viewableItems.length > 0) {
      setActiveCardIndex(viewableItems[0].index);
    }
  }).current;



  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={mediaData}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <Card
            media={item.media}
            isActive={index === activeCardIndex}
            username={item.username}
            profilePic={item.profilePic}
            description={item.description}
            isMuted={isMuted}
            toggleMute={toggleMute}
          />
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
