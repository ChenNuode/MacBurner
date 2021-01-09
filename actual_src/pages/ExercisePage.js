import React from 'react';
import { 
    StyleSheet,
    SafeAreaView,
    StatusBar,
    Text,
    TextInput,
    SectionList,
    TouchableOpacityBase
} from 'react-native';

const MARGIN = 25;
const LARGE_MARGIN = 300;

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
    <Text id={title}>{title}</Text>
);

class ExercisePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            shitout: '',
            data: []
        };
    }

    componentDidMount() {
        this.obtainData()
        this.focusListener = this.props.navigation.addListener('willFocus', payload => {this.obtainData()});
        this.props.navigation.addListener('didFocus', this.onScreenFocus)
    }

    loadShit() {
        let exercises = ["Push-up", "Pull-up", "Run", "Cycle", "Exercise", "Sleep"];
        
        let newdata = [
            {
                title: '',
                data: []
            }
        ]
        
        for (let i = 0; i < exercises.length; i++) {
            if (Math.random() >= 0.5) {
                let reps = Math.round(Math.random() * 200);
                newdata[0].data.push(exercises[i] + '\n' + reps.toString() + ' reps');
            }
        }

        this.setState({data: newdata});
    }

    obtainData = async () => {
        return fetch('http://macburnerapi.pythonanywhere.com/sendmefood2/')
        .then((response) => response.json())
        .then((json) => {
            this.setState({data: JSON.stringify(json)['returned_data']});
        })

    }


    // Called when our screen is focused
    onScreenFocus = () => {
        // Screen was focused, our on focus logic goes here
        //console.log("Obtained data")
        this.obtainData();
    }

    async componentDidUpdate() {
        this.obtainData();
    }

    data = [

    ]

    render() {
        return (
            <SafeAreaView>
                <Text style={{
                    marginTop: MARGIN,
                    marginBottom: MARGIN,
                    fontWeight: 'bold',
                    fontSize: 22,
                    textAlign: 'center'
                }}>Exercises</Text>
                <SectionList
                sections={this.state.data}
                keyExtractor={(item, idx) => item + idx}
                renderItem={({ item }) => <Item title={item} />}
                />
            </SafeAreaView>
        )
    }
}

export default ExercisePage;