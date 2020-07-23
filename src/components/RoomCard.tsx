import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from './Icon';


interface RoomCardProps {
    icon?: any;
    number?: string;
    text: string;
}

export default function RoomCard(props: RoomCardProps): JSX.Element {
    let media;
    if (props.icon) {
        media = <Icon type={props.icon}></Icon>
    } else {
        media = <Text style={[styles.baseText, styles.enumText]}>{props.number}</Text>
    }
    return (
        <View style={styles.container}>
            {media}
            <Text style={styles.baseText}>{props.text}</Text></View>
    );
}

const styles = StyleSheet.create({
    baseText: {
        color: "#686A70",
        marginTop: 10
    },
    enumText: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#233B8B"
    },
    container: {
        height: 70,
        width: 70,
        borderColor: "#fff",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    }
});