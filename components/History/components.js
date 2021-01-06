import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import IconMci from 'react-native-vector-icons/MaterialCommunityIcons';
import AntdProgress from '@ant-design/react-native/lib/progress';
import helpers from '../../helpers/basic';
import { Button } from 'native-base';


export const Icon = props => {
    let iconStyle = props.style ? { ...props.style } : {};
    return (
        <IconMci style={styles.icon, iconStyle}
            name={props.name} size={21} color={props.color || 'red'}
        />
    )
}

export const Show = props => (
    <View style={styles.flexRow}>
        <Text style={styles.fontStyle}>{props.label}</Text>
        {props.icon}
    </View>
)

export const Progress = props => (
    <View style={styles.progressContainer}>
        <AntdProgress
            percent={50}
            barStyle={styles.progress}
        />
    </View>
)

export const ContentInfo = props => (
    <View style={{
        ...styles.selectedOpts,
        ...styles[props.extraspace ? 'extraspace' : 'minspace']
    }}>
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

export const ActionPanel = () => (
    <View style={styles.flexRow}>
        <Button style={styles.button}>
            <Icon style={styles.icon} name='play' size={21} color="#343434" />
        </Button>

        <Button style={styles.button}>
            <Icon style={styles.icon, { fontSize: 19 }} name='delete' size={21} color="#343434" />
        </Button>
    </View>
)


const styles = StyleSheet.create({
    flexRow: {
        flexDirection: 'row'
    },

    icon: {
        paddingLeft: 5
    },

    progressContainer: {

    },
    progress: {
        borderColor: '#ee693fd6',
    },

    selectedOpts: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10
    },

    fontStyle: {
        fontFamily: 'sans-serif-medium',
        color: '#000'
    },

    button: {
        height: 22,
        width: 35,
        marginLeft: 10,
        backgroundColor: '#ffff',
        justifyContent: 'center'
    },
    extraspace: {
        paddingBottom: 17
    },
    minspace: {
        paddingBottom: 8
    }
})