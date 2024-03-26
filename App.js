import { Text, SafeAreaView, StyleSheet, Animated } from 'react-native';

// You can import supported modules from npm
import { React, useRef } from 'react';

export default function App() {
  // Cau 1 a
  const textFaded = useRef(new Animated.Value(0)).current;

  const fadeAni = () => {
    Animated.timing(textFaded, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };
  fadeAni();

  // Cau 1 b
  const shapePosition = useRef(new Animated.Value(0)).current;

  const changeAni = () => {
    Animated.timing(shapePosition, {
      toValue: 250,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };
  changeAni();

  // Cau 1 c
  const position = useRef(new Animated.Value(0)).current;

  const springAni = () => {
    Animated.spring(shapePosition, {
      toValue: 100,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };
  springAni();
  return (
    <SafeAreaView style={styles.container}>
      // Cau 1a
      <Animated.Text
        style={{
          opacity: textFaded,
        }}>
        {' '}
        Have a nice day!{' '}
      </Animated.Text>
      // Cau 1b
      <Animated.View
        style={{
          height: 50,
          width: 50,
          backgroundColor: 'green',
          transform: [{ translateX: shapePosition }],
        }}>
        {' '}
      </Animated.View>
      // Cau 1c
      <Animated.View
        style={{
          height: 50,
          width: 50,
          backgroundColor: 'red',
          borderRadius: 50,
          transform: [{ translateY: shapePosition }],
        }}>
        {' '}
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
