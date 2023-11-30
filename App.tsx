import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {
  screenHeight,
  CircularProgressBar,
  Images,
  Header,
  Table,
  Footer,
  UserProfile,
} from './src';

const App = () => {
  const initialTime = 60;
  const [selectedData, setSelectedData] = useState('');
  const [seconds, setSeconds] = useState(initialTime);
  const [myTimer, setMyTimer] = useState(true);

  const marginBottomPercentage = 5; // Adjust as needed

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds =>
        prevSeconds > 0 ? prevSeconds - 1 : initialTime,
      );
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (seconds === 0) {
      // Reset the timer when it reaches 1 and myTimer is false
      setMyTimer(!myTimer);
      setSeconds(initialTime);
      setSelectedData('');
    }
  }, [seconds, myTimer]);

  const handleSelection = item => {
    // Update the state or perform any other action with the selected data
    setSelectedData(item || '');
  };

  const calculateMarginBottom = () =>
    (screenHeight * marginBottomPercentage) / 100;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <ImageBackground source={Images.icBg} style={styles.backgroundImage}>
        <Header />
        <View style={styles.tableAdjustment}>
          <Table
            onSelect={handleSelection}
            passedData={selectedData}
            myTurn={myTimer}
          />
          <View style={styles.opponentProgressStyle}>
            {!myTimer && seconds > 0 ? (
              <CircularProgressBar
                initialTime={initialTime}
                seconds={seconds}
              />
            ) : (
              <UserProfile />
            )}
          </View>
          <View style={styles.progressStyle}>
            {myTimer ? (
              <CircularProgressBar
                initialTime={initialTime}
                seconds={seconds}
              />
            ) : (
              <UserProfile />
            )}
          </View>
        </View>
        <View style={[styles.footer, {marginBottom: calculateMarginBottom()}]}>
          <Footer
            showDiscardBtn={selectedData.length > 0}
            discardSelection={item => setSelectedData(item || '')}
            myTurn={myTimer}
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
