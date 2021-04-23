import React, { useState } from 'react'

import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { TodoDataType } from '../types/todo'
import Button from '../components/Button'
import Input from '../components/Input'

const TODO_DATA: TodoDataType[] = [
	{
		id: 1,
		content: '나의 첫 TODO List',
		isCompleted: false,
	},
]

export type TodoProps = {}

function Todo({}: TodoProps) {
	const [todos, setTodos] = useState(TODO_DATA)
	const [value, setValue] = useState('')

	const onChangeText = (value: string) => {
		setValue(value)
	}

	const onPress = () => {
		setTodos([...todos, { id: getNextId(), content: value, isCompleted: false }])
		setValue('')
	}

	const getNextId = () => {
		return todos[todos.length - 1].id + 1
	}

	return (
		<View style={styles.container}>
			<Text>Hello World!</Text>
			<View style={styles.inputContainer}>
				<Input onChangeText={onChangeText} value={value} />
				<Button label="저장" onPress={onPress} />
			</View>
			<FlatList<TodoDataType>
				data={todos}
				keyExtractor={todo => todo.id.toString()}
				renderItem={({ item }) => {
					return <Text>{item.content}</Text>
				}}
			/>
		</View>
	)
}

export default Todo

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh',
	},
	inputContainer: {
		flexDirection: 'row',
		width: '100vw',
		padding: 8,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
