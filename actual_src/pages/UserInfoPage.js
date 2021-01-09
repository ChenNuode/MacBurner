import React from 'react';
import { 
    SafeAreaView,
    Text,
    TextInput,
    Item,
    Keyboard,
    Button,
    ScrollView
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { getWeight, getPace } from '../ass_funcs/Getters';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MARGIN = 25;
const LARGE_MARGIN = 250;

class UserInfoPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weight: '',
            pace: '',
            selectedId: null,
            setSelectedId: null,
            assWeight: '',
            assPace: ''
        }
    }

    submit() {
        AsyncStorage.multiSet([['weight', this.state.weight], ['pace', this.state.pace]]).then(() => {
            console.log('saved weight and pace');
            this.forceUpdate();
            this.props.CUDFun();
        }).catch(() => {
            console.log('err in submit');
        });
    }

    async componentDidUpdate() {
        this.setState({
            assWeight: await this.getWeight(),
            assPace: await this.getPace(),
        });
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
                    <Text>Weight: {this.state.assWeight}</Text>
                    <Text>Pace: {this.state.assPace}</Text>
                    <TextInput style={{
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 2,
                        padding: 5,
                        marginTop: MARGIN,
                        marginHorizontal: MARGIN,
                        borderRadius: 15
                    }}
                    placeholder="Weight"
                    keyboardType="decimal-pad"
                    onChangeText={(weight) => this.setState({weight})}></TextInput>

                    <TextInput style={{
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 2,
                        padding: 5,
                        marginTop: MARGIN,
                        marginHorizontal: MARGIN,
                        borderRadius: 15
                    }}
                    placeholder="Estimated running pace (min/km)"
                    keyboardType="decimal-pad"
                    onChangeText={(pace) => this.setState({pace})}></TextInput>

                    <Button title="Submit" onPress={() => this.submit()}/>
                
                </SafeAreaView>
            </ScrollView>
            
        );
    }
}

export default UserInfoPage;