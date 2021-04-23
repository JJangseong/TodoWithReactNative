import React from 'react';

import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export type ButtonProps = {
    label: string
    onPress():void
}

function Button({label, onPress}: ButtonProps) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.text}>
                {label}
            </Text>
        </TouchableOpacity>
    );
};

export default Button;

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#fff",
        borderColor: "#868e96",
        borderWidth: 1,
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 12,
        paddingRight: 12,
        borderRadius: 4
    },
    text: {
        color: "#868e96",
        fontSize: 12
    }
})
