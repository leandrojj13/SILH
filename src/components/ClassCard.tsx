import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Icon from './Icon';
import images from '../mock/images';


interface ClassCardProps {
    classNumber?: string;
    name: string;
    date: string;
    time: string;
}
export default function ClassCard(props: ClassCardProps): JSX.Element {

    return (
        <View style={styles.container}>
             <View >
                <Text>Clase</Text>
                <Text>{props.classNumber}</Text>
            </View>
            <View style={{ flex: 4, paddingLeft: 15 }}>
                <Text>{props.name}</Text>
                <Text>{props.date}</Text>
            </View>
            <Text style={[styles.baseText, { flex: 1 }]} >{props.time}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    baseText: {
        color: "#686A70",
        fontWeight: "bold", marginTop: 10
    },
    container: {
        flexDirection: "row",
        flex: 1,
        height: 70,
        borderColor: "#fff",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        padding: 15,
        elevation: 2,
        marginTop: 15,
        justifyContent: "space-between"
    },
    image: {
        width: 45,
        height: 40,
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 8
    }
});