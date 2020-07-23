import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import images from '../mock/images';


interface CardProps {
    room: string;
    teacher: string;
    date: string;
    imageWidth: string;
    backGroundColor: string;
    textColor: string;
}

export default function SharedTransciption(props: CardProps): JSX.Element {
    return (
        <View style={[styles.container, { backgroundColor: props.backGroundColor }]}>
            <View style={{ margin: 10 }}>
                <Text style={[styles.baseText, { fontSize: 25, color: props.textColor }]}>{props.room}</Text>
            </View>
            <View style={{ margin: 10 }}>
                <Text style={[styles.baseText, { fontSize: 15, color: props.textColor }]}>{props.teacher}</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center", margin: 10 }}>
                <Text style={[styles.baseText, { fontSize: 15, color: props.textColor }]}>Fecha {props.date}</Text>
                <Image
                    style={[styles.cardImage, {width:props.imageWidth}]}
                    source={{
                        uri: images.TeacherImage,
                    }}
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#233B8B",
        height: 145,
        width: 300,
        borderRadius: 10,
        justifyContent: "space-around",
        flexDirection: "column",
        paddingTop: 15,
        paddingBottom: 15,

        borderColor: "#fff",
        borderWidth: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    baseText: {
        color: "white",
        textAlign: "center"
    },
    cardImage: {
        width: 30,
        height: 20,
        position: "absolute",
        right: 5,
    }
});