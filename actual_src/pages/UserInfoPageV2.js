import React from 'react';
import { 
    SafeAreaView,
    Text,
    TextInput,
    Item,
    Keyboard,
    ScrollView,
    TouchableHighlightBase
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { AsyncStorage } from 'react-native-async-storage';
import { getPace, getWeight } from '../ass_funcs/Getters';

const MARGIN = 25;
const LARGE_MARGIN = 250;

class UserInfoPageV extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weight: '',
            // in minutes/km
            pace: '',
            pornhubPassword: 'password123',
            selectedId: null,
            setSelectedId: null,
        }
    }

    async componentDidMount() {
        this.setState({ weight: await getWeight() });
        this.setState({ pace: await getPace() });
        this.forceUpdate();
    }

    processAndHandleWeightInput(weightInput) {
        this.setState({weight: parseFloat(weightInput)});
        AsyncStorage.setItem('weight', this.state.weight).then(() => {
            console.log('yay weight saved');
        }).catch((err) => {
            console.log('error')
        })
    }
    
    processAndHandleAvgRunningSpd(runSpdInput) {
        this.setState({avgRunningSpeed: parseFloat(runSpdInput)})
    }

    flRender(item) {
        return (<Item title={item.spd} />)
    }


    render() {
        return (
            <ScrollView keyboardShouldPersistTaps='handled'
            style={{ height: '100%' }}>
                <SafeAreaView>    
                    <Text style={{
                        marginTop: LARGE_MARGIN,
                        fontWeight: 'bold',
                        fontSize: 24,
                        textAlign: 'center'
                    }}>Basic User Information</Text>

                    <TextInput style={{
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 2,
                        padding: 5,
                        marginTop: MARGIN,
                        marginHorizontal: MARGIN,
                        borderRadius: 15
                    }}
                    placeholder={this.state.weight}
                    keyboardType="decimal-pad"
                    onChangeText={w => this.processAndHandleWeightInput(w)}></TextInput>

                    <TextInput style={{
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 2,
                        padding: 5,
                        marginTop: MARGIN,
                        marginHorizontal: MARGIN,
                        borderRadius: 15
                    }}
                    placeholder={this.state.pace}
                    keyboardType="decimal-pad"
                    onChangeText={r => this.processAndHandleAvgRunningSpd(r)}></TextInput>
                
                </SafeAreaView>
            </ScrollView>
        );
    }
}
export default UserInfoPageV;