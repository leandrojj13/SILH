import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
interface Icons {
    Home: () => JSX.Element;
    Bell: () => JSX.Element;
    Plus: () => JSX.Element;
    PlusMedium: () => JSX.Element;
}

const Icons: Icons = {
    Home: () => <MaterialIcons name="home" size={24} ></MaterialIcons>,
    Bell: () => <Fontisto name="bell" size={20} color="#686A70" ></Fontisto>,
    Plus: () => <FontAwesome5 name="plus" size={15} color="#686A70" ></FontAwesome5>,
    PlusMedium: () => <FontAwesome5 name="plus" size={25} color="#233B8B" ></FontAwesome5>
}

interface ConfigIcon {
    type: keyof Icons;
}


export default function Icon(props: ConfigIcon): JSX.Element {
    const SelectedIcon = Icons[props.type];
    return (
        <SelectedIcon ></SelectedIcon>
    );
}