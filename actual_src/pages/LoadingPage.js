import React from 'react';
import { 
    SafeAreaView,
    ActivityIndicator
} from 'react-native';

class LoadingPage extends React.Component {
    render(){
        return(
            <SafeAreaView style={{
                flex: 1,
                justifyContent: 'center',
                alignContent: 'center'
            }}>
                
                <ActivityIndicator size='large'/>
            </SafeAreaView>
        )
    }
}

export default LoadingPage;