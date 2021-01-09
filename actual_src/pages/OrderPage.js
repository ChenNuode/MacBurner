import React from 'react';
import { 
    StyleSheet,
    SafeAreaView,
    Text,
    Alert,
    Image,
    Button,
    View,
    SectionList,
    TextInput,
    TouchableOpacityBase,
    StatusBar,
    TouchableOpacity
} from 'react-native';

const MARGIN = 25;
const LARGE_MARGIN = 20;
var data = [
    {
        title: '',
        data: ['Filet-O-Fish', 'Big Mac', 'McSpicy', 'French Fries', 'Ribena', 'Ice Lemon Tea', 'test', 'test']
    },
];

const styles = StyleSheet.create({ 
  item: {
    padding: 20,
    marginVertical: 8,
    backgroundColor: "#eeeeee",
    alignItems: "center",
  },
  header: {
    fontSize: 0,
    marginLeft: 0,
  },
  title: {
    fontSize: 20
  }
});

Item = ({ title }) => ( 
    <TouchableOpacity style={styles.item} id={title}>
      <Text id={title} style={styles.title}>{title}</Text>
    </TouchableOpacity>
);

class OrderPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: {0: false, 1: false, 2: false, 3: false},
            shitout: '',
        };
    }

    sendShit = () => {
        let shitin = '';
        for (let i = 0; i < 4; i++) {
            if (this.state.selected[i]) {
                if (i < 3) {
                    shitin += i.toString() + ',';
                }
                else {
                    shitin += i.toString();
                }
            }
        }
        
        shitin = '1,2,3';
        return fetch('http://macburnerapi.pythonanywhere.com/sendmefood/' + shitin)
        .then((response) => response.json())
        .then((json) => {
            this.setState({shitout: JSON.stringify(json)});
            Alert.alert(
                "",
                "Check the exercise page!",
                [ { text: "OK", onPress: () => console.log("OK Pressed") } ],
                { cancelable: false }
            );
        })
    }

    render() {
        return (
            <SafeAreaView>
                <StatusBar barStyle='dark-content'/>
                
                <Text style={{
                    marginTop: MARGIN,
                    fontWeight: 'bold',
                    fontSize: 22,
                    textAlign: 'center',
                }}>Confirm orders</Text>

                <SectionList style={{ height: "75%", marginTop: 20, }} 
                    sections={data}
                    keyExtractor={ (item, idx) => item + idx }
                    renderItem={({ item }) => <Item title={item} />}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.header}>{title}</Text>
                    )}
                />

                <View style={{
                    marginTop: 20,
                    width: "100%",
                    alignItems: "center",
                }}>
                    <View style={{width: 100, height: 75}}>
                        <Button title="Submit" onPress={this.sendShit} />
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}
export default OrderPage;