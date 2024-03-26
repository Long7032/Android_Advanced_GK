import { Text, SafeAreaView, StyleSheet, Animated } from 'react-native';

// You can import supported modules from npm

import { React, useRef, useEffect } from 'react';

export default function App() {
    

  // Cau 2 a
  const color = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(color, {
          toValue: 0,
          duration: 5000,
          useNativeDriver: true,
        }),
        Animated.timing(color, {
          toValue: 4,
          duration: 5000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  });
  const changeColor = color.interpolate({
    inputRange: [0, 1, 2, 3, 4],
    outputRange: ['green', 'red', 'purple', 'yellow', 'white'],
  });

  // Cau 2 b
  const position = useRef(new Animated.Value(0)).current;
  const position1 = useRef(new Animated.Value(0)).current;
  const position2 = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(position, {
          toValue: 50,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(position1, {
          toValue: 100,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(position2, {
          toValue: 150,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  });

  // Cau 2 c
  const position4 = useRef(new Animated.Value(0)).current;
  const position5 = useRef(new Animated.Value(0)).current;
  const position6 = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(
      Animated.parallel([
        Animated.timing(position4, {
          toValue: 50,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(position5, {
          toValue: 100,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(position6, {
          toValue: 150,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  });
  return (
    <SafeAreaView style={styles.container}>
     
      // Cau 2a
      <Animated.View
        style={{ height: 50, width: 50, backgroundColor: changeColor }}>
        {' '}
      </Animated.View>
      //Cau 2b
      <Animated.View
        style={{
          height: 50,
          width: 50,
          backgroundColor: 'red',
          transform: [{ translateX: position }],
        }}>
        {' '}      </Animated.View>
      <Animated.View
        style={{
          height: 50,
          width: 50,
          backgroundColor: 'red',
          transform: [{ translateX: position1 }],
        }}>
        {' '}
      </Animated.View>
      <Animated.View
        style={{
          height: 50,
          width: 50,
          backgroundColor: 'red',
          transform: [{ translateX: position2 }],
        }}>
        {' '}
      </Animated.View>
      // Cau 2c
      <Animated.View
        style={{
          height: 50,
          width: 50,
          backgroundColor: 'red',
          transform: [{ translateX: position4 }],
        }}>
        {' '}
      </Animated.View>
      <Animated.View
        style={{
          height: 50,
          width: 50,
          backgroundColor: 'red',
          transform: [{ translateX: position5 }],
        }}>
        {' '}
      </Animated.View>
      <Animated.View
        style={{
          height: 50,
          width: 50,
          backgroundColor: 'red',
          transform: [{ translateX: position6 }],
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
