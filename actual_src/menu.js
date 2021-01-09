import React from 'react';
import {
    SafeAreaView,
} from 'react-native';

class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <SafeAreaView style={Styles.container}>
                <Title>WHAT DID YOU EAT</Title>
                <AppRoot/>
                <StatusBar style="auto" />
                {/* <Button title="McSpicy" onClick={this.selectShit(0)}></Button>
                <Button title="Big Mac" onClick={this.selectShit(1)}></Button>
                <Button title="Filet-O-Fish" onClick={this.selectShit(2)}></Button>
                <Button title="McChicken" onClick={this.selectShit(3)}></Button>
                <Button title="CONFIRM" onClick={this.doShit()}></Button> */}
                <Text>{this.state.value}</Text>

                <SectionList 
                    sections={data}
                    keyExtractor={(item, idx) => item + idx}
                    renderItem={({ item }) => <Item title={item} />}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.header}>{title}</Text>
                    )}
                />

                <Button title='Check calories' 
                onClick={() => {console.log('Function to check calories')}} />

                
            </SafeAreaView>
        )
    }
}

export default Menu;