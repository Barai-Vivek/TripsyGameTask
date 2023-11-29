import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Footer, Header, Table} from './src/components';

const App = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
      <Header />
      <Table />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default App;
