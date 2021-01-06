import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import IconMci from 'react-native-vector-icons/MaterialCommunityIcons';
import AntdProgress from '@ant-design/react-native/lib/progress';
import helpers from '../helpers/basic';

export const Show = props => (
    <View style={styles.flexRow}>
        <Text style={styles.font700}>{props.label}</Text>
        {props.icon}
    </View>
)

export const Icon = props => {
    let iconStyle = props.style ? { ...props.style } : {};
    return (
        <IconMci style={styles.icon, iconStyle}
            name={props.name} size={21} color={props.color || 'red'}
        />
    )
}

export const Progress = props => (
    <View style={styles.progressContainer}>
        <AntdProgress
            percent={50}
            barStyle={styles.progress}
        />
    </View>
)

export const Panel = props => (
    <View style={styles.panelContainer}>
        {props.children}
    </View>
)

export const ContentInfo = props => (
    <View style={styles.selectedOpts}>
        <Show
            label={'Source'} icon={<Icon name={'youtube'} />}
        />
        <Show
            label={helpers.capFirstChar(props.content.format)}
            icon={<Icon name={'video'} color='#EE693F' />}
        />
        <Show
            label={`${helpers.firstChar(props.content.quality)}Q`}
            icon={<Icon name={'quality-high'} color='#EE693F' />}
        />
    </View>
)


const styles = StyleSheet.create({
    flexRow: {
        flexDirection: 'row'
    },
    font700: {
        fontWeight: '700'
    },
    icon: {
        paddingLeft: 5
    },

    progressContainer: {

    },
    progress: {
        borderColor: '#ee693fd6',
    },

    panelContainer: {
        paddingTop: 10
    },


    selectedOpts: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 15,
        paddingBottom: 15
    }
})