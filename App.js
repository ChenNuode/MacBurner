import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  SafeAreaView,
} from 'react-native';
import AppRoot from './actual_src/approot.js';
import UserInfoPage from './actual_src/pages/UserInfoPage.js';
import LoadingPage from './actual_src/pages/LoadingPage.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Styles from './actual_src/stylesheet.js';
import Menu from './actual_src/menu.js';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      userinfogained: 'loading'
    }
  };

  conditionalrender = () => {
    if (this.state.userinfogained == 'true'){
      return <AppRoot />
    } else if (this.state.userinfogained == 'false') {
      return <UserInfoPage CUDFun={this.checkUserData} />
    } else {
      return <LoadingPage />
    }
  }

  checkUserData = async () => {
    try{
      const UD = await AsyncStorage.getItem('weight');
      if (UD == null){
        this.setState({userinfogained: 'false'})
      } else {
        this.setState({userinfogained: 'true'})
      }
    } catch {
      console.log('ASYNC FAILED!!!')
    }
  }

  componentDidMount(){
    this.checkUserData();
  }

  render(){
    return(
      <SafeAreaView style={{flex:1}}>
        {this.conditionalrender()}
      </SafeAreaView>
    )
  }
}

export default App;