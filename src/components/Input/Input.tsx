import React from 'react'

import { StyleSheet, Text, TextInput, View } from 'react-native'

export type InputProps = {
	onChangeText(value: string): void
	value: string
}

function Input({ value, onChangeText }: InputProps) {
	return (
		<TextInput style={styles.input} onChangeText={onChangeText} value={value} placeholder="내용을 입력해 주세요." />
	)
}

export default Input

const styles = StyleSheet.create({
	input: {
		width: 200,
		marginRight: 8,
		borderColor: '#868e96',
		borderWidth: 1,
		paddingTop: 4,
		paddingBottom: 4,
		paddingLeft: 12,
		paddingRight: 12,
		borderRadius: 4,
		fontSize: 12,
	},
})
