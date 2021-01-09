import React from 'React';
import { SafeAreaView } from 'react-navigation';


class WorkoutPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SafeAreaView>
                <StatusBar barStyle='dark-content'/>
            </SafeAreaView>
        )
    }
}