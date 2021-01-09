import AsyncStorage from '@react-native-async-storage/async-storage';

const getWeight = async () => {
    try {
        const v = await AsyncStorage.getItem('weight');
        if (v !== null) {
            return v
        }
    } catch (e) {
        console.log('getWeight failed');
    }
}

const getPace = async () => {
    try {
        const v = await AsyncStorage.getItem('runningPace');
        if (v !== null) {
            return v;
        }
    } catch (e) {
        console.log('getPace failed');
    }
}

export { getWeight, getPace };