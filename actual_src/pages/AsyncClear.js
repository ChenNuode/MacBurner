import React from 'react';
import { 
    SafeAreaView,
    Button,
    Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class AsyncClear extends React.Component{
    render(){
        return(
            <SafeAreaView>
                <Button title="Clear ASStorage" onPress={() => { AsyncStorage.clear().then(() => {
                    Alert.alert('Yay it cleared restart ur app');

                    }) }}/>
            </SafeAreaView>
        )
    }
}

export default AsyncClear;