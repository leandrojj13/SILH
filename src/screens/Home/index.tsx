import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import images from '../../mock/images';
import Icon from '../../components/Icon';
import SharedTransciption from '../../components/SharedTransciption';
import sharedTransciptions from '../../mock/sharedTransciptions';
import RoomCard from '../../components/RoomCard';
import rooms from '../../mock/rooms';
import ClassCard from '../../components/ClassCard';
import classes from '../../mock/classes';


export default function Home(): JSX.Element {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={[styles.baseText, styles.welcomeText]}>Hola, Juana Jiménez</Text>
                <TouchableOpacity style={[styles.buttonRound, { height: 40, width: 38 }]}><Icon type="Bell"></Icon></TouchableOpacity>
            </View>
            <View style={[styles.headerContainer, { flex: 1 }]}>
                <Text style={[styles.baseText, styles.titleText]}>Tus transcripciones compartidas</Text>
            </View>
            <View style={[styles.headerContainer, { flex: 3, justifyContent: "center" }]}>
                <ScrollView horizontal={true}>
                    {sharedTransciptions.map((method: any) =>
                        <SharedTransciption {...method} />
                    )}
                </ScrollView>
            </View>
            <View style={[styles.headerContainer, { flex: 1, marginTop: 20 }]}>
                <Text style={[styles.baseText, styles.titleText]}>Conectarse al aula</Text>
                <TouchableOpacity>
                    <Image
                        style={{ width: 20, height: 20 }}
                        source={{
                            uri: images.ScannerCode,
                        }}
                    />
                </TouchableOpacity>

            </View>
            <View style={[styles.personListContainer, { flex: 2 }]}>
                <ScrollView horizontal={true}>
                    <TouchableOpacity style={styles.margin15}>
                        <RoomCard icon={"PlusMedium"} text={"Conectar"} />
                    </TouchableOpacity>
                    {rooms.map((room: any) =>
                        <TouchableOpacity style={styles.margin15}>
                            <RoomCard {...room} />
                        </TouchableOpacity>
                    )}
                </ScrollView>
            </View>

            <View style={[{ flex: 4 }]}>
                <Text style={[styles.baseText, styles.titleText]}>Clases recientes</Text>

                <ScrollView >
                    {classes.map((class1: any) =>
                        <ClassCard  {...class1}></ClassCard>
                    )}
                </ScrollView>

            </View>
            <View style={[{ flex: 2 }]}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: "flex-end", marginBottom: 15, marginHorizontal: 30 }}>
                    <TouchableOpacity>
                        <Image
                            style={{ width: 25, height: 25 }}
                            source={{
                                uri: images.Home,
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={{ width: 25, height: 25 }}
                            source={{
                                uri: images.Money,
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={{ width: 25, height: 25 }}
                            source={{
                                uri: images.User,
                            }}
                        />
                    </TouchableOpacity>
                </View>

            </View>
        </View >
    );
}


const styles = StyleSheet.create({
    baseText: {
        color: "#686A70"
    },
    margin15: {
        marginRight: 15
    },
    welcomeText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    titleText: {
        fontSize: 18,
    },
    headerContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    personListContainer: {
        flex: 1,
        flexDirection: "row",
    },
    container: {
        flex: 1,
    },
    personCard: {
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
    },
    buttonRound: {
        borderColor: "#fff",
        borderWidth: 1,
        borderRadius: 20,
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