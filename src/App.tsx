import React from 'react';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import Card from './components/Card';

const App = () => {
  const data = [
    { id: '1', images: [require('./assets/images/aa.jpg')] },
    { id: '2', images: [require('./assets/images/aa.jpg'), require('./assets/images/aa.jpg')] },
    { id: '3', images: [require('./assets/images/aa.jpg')] },
    { id: '4', images: [require('./assets/images/aa.jpg'), require('./assets/images/aa.jpg'), require('./assets/images/aa.jpg')] },
    { id: '5', images: [require('./assets/images/aa.jpg')] },
    { id: '6', images: [require('./assets/images/aa.jpg'), require('./assets/images/aa.jpg')] },
    { id: '7', images: [require('./assets/images/aa.jpg')] },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Card images={item.images} />}
        contentContainerStyle={styles.scrollContent}
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
