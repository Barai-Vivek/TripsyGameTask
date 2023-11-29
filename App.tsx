import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {Footer, Header, Table} from './src/components';
import {CircularProgress} from './src/components/CircularProgress';
import {Images} from './src/asset';
import UserProfile from './src/components/UserProfile';
import {screenHeight} from './src';

const App = () => {
  const initialTime = 60;
  const [selectedData, setSelectedData] = useState('');
  const [seconds, setSeconds] = useState(initialTime);
  const [myTimer, setMyTimer] = useState(true);

  const marginBottomPercentage = 5; // Adjust as needed

  const calculateMarginBottom = () => {
    return (screenHeight * marginBottomPercentage) / 100;
  };

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setSeconds(prevSeconds =>
  //       prevSeconds > 0 ? prevSeconds - 1 : initialTime,
  //     );
  //   }, 1000);

  //   // Cleanup function to clear the interval when the component unmounts
  //   return () => clearInterval(intervalId);
  // }, []);

  // useEffect(() => {
  //   if (seconds === 0) {
  //     setMyTimer(!myTimer);
  //   }
  // }, [seconds]);

  const handleSelection = (item?: string) => {
    // Update the state or perform any other action with the selected data
    setSelectedData(item ?? '');
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
      <ImageBackground source={Images.icBg} style={styles.backgroundImage}>
        <Header />
        <View style={styles.tableAdjustment}>
          <Table onSelect={handleSelection} passedData={selectedData} />
          {!myTimer && seconds > 0 ? (
            <View style={styles.opponentProgressStyle}>
              <CircularProgress initialTime={initialTime} seconds={seconds} />
            </View>
          ) : (
            <View style={styles.opponentProgressStyle}>
              <UserProfile />
            </View>
          )}
          {myTimer ? (
            <View style={styles.progressStyle}>
              <CircularProgress initialTime={initialTime} seconds={seconds} />
            </View>
          ) : (
            <View style={styles.progressStyle}>
              <UserProfile />
            </View>
          )}
        </View>
        <View style={[styles.footer, {marginBottom: calculateMarginBottom()}]}>
          <Footer
            showDiscardBtn={selectedData.length > 0}
            discardSelection={item => setSelectedData(item ?? '')}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  backgroundImage: {
    flex: 1,
  },
  progressTxt: {
    color: 'white',
    fontSize: 12,
  },
  tableAdjustment: {
    flex: 1,
    marginTop: 10,
    marginBottom: -40,
  },
  opponentProgressStyle: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'flex-start',
  },
  progressStyle: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },
  footer: {
    alignItems: 'flex-end',
    marginBottom: screenHeight - screenHeight * 0.9,
  },
});

export default App;
