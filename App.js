import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

function AddButton({count, setCount}){
  function onClick(){
    setCount(count + 1);
  }
  return (<Button title='Add' onPress = {onClick} />);
}

function SubtractButton({count, setCount}){
  function onClick(){
    setCount(count - 1);
  }
  return (<Button title='Subtract' onPress = {onClick} />);
}

export default function App() {
  let [count, setCount] = useState(0);


  return (
    <View style={styles.container}>
      <Text>Current count: {count}</Text>
      <View style={styles.buttonHolder}>
        <View style={styles.incButton}><AddButton count={count} setCount={setCount} /></View>
        <View style={styles.incButton}><SubtractButton count={count} setCount={setCount} /></View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonHolder: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  incButton: {
    backgroundColor: '#ccc',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    borderRadius: 5,
    margin: 10,
  },
});
