import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {

    },
    inputBox: {
        backgroundColor: '#e7e7e7',
        margin: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    inputText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#434343'


    },
    timeContainer: {
        flexDirection: 'row',
        width: 100,
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 20

    },
    row: {
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#dbdbdb',

    },
    iconContainer: {
        backgroundColor: '#b3b3b3',
        padding: 10,
        borderRadius: 25,
        
    },
    destinationText: {
        marginLeft: 10,
        fontWeight: '500',
        fontSize: 16,
    }

});