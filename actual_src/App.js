import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  SafeAreaView,
} from 'react-native';
import AppRoot from './actual_src/approot.js';
import Styles from './actual_src/stylesheet.js';
import Menu from './actual_src/menu.js'

const FOODS = [
  {
    title: "FOODS",
    data: ["McSpicy", "Filet-O-Fish", "Big Mac", "Hash Brown"]
  },
];

const ZERO = 0; // 0 is the value of ZERO
const ONE = 1; // 1 is the value of ONE
const TWO = 2; // 2 is the value of TWO
const THREE = 3; // 3 is the value of THREE
const FOUR = 4; // 4 is the value of FOUR

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: {ZERO: false, ONE: false, TWO: false, THREE: false},
      shitout: ''
    }
  }

  selectShit(n) {
    this.state.selected.n = !this.state.selected.n;
  }
  
  doShit() {
    // Send data to server
    let shitin = '';
    for (let i = ZERO; i < FOUR; i++) {
      if (i < FOUR-ONE && this.state.selected.i) {
        shitin += i.toString() + ',';
      }
      else {
        shitin += i.toString();
      }
    }

    let thing = fetch('http://macburnerapi.pythonanywhere.com/sendmefood/' + shitin).then(
      (response) => {
        const output_thing = response.json();
        // TODO: Process JSON
        return output_thing;
      });

      this.state.shitout = '';
  }

  render() {
    return (
    <SafeAreaView style={Styles.container}>
      <Text>TELL ME WHAT YOU ATE</Text>
      <AppRoot/>
      <StatusBar style="auto" />
      <Button title="McSpicy" onClick={this.selectShit(0)}></Button>
      <Button title="Big Mac" onClick={this.selectShit(1)}></Button>
      <Button title="Filet-O-Fish" onClick={this.selectShit(2)}></Button>
      <Button title="McChicken" onClick={this.selectShit(3)}></Button>
      <Button title="CONFIRM" onClick={this.doShit()}></Button>
      <Text>{this.state.selected}</Text>
      <Text>{this.state.shitout}</Text>
    </SafeAreaView>
    );
  }  
};

