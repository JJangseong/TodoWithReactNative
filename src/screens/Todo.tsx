import React, { useState } from 'react'

import { FlatList, StyleSheet, Text, View } from 'react-native'
import { TodoDataType } from '../types/todo'
import Button from '../components/Button'
import Input from '../components/Input'
import TodoItem from '../components/TodoItem'

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

	const onSave = () => {
		if (value === '') return
		setTodos([...todos, { id: getNextId(), content: value, isCompleted: false }])
		setValue('')
	}

	const getNextId = () => {
		return todos.length === 0 ? 1 : todos[todos.length - 1].id + 1
	}

	const onToggle = (id: number) => {
		setTodos(
			todos.map(todo => {
				return todo.id === id ? { isCompleted: !todo.isCompleted, id: todo.id, content: todo.content } : { ...todo }
			}),
		)
	}

	const onRemove = (id: number) => {
		console.log(id)
		setTodos(todos.filter(todo => todo.id !== id))
	}

	return (
		<View style={styles.container}>
			<Text>Hello World!</Text>
			<View style={styles.inputContainer}>
				<Input onChangeText={onChangeText} value={value} />
				<Button label="저장" onPress={onSave} />
			</View>
			<FlatList<TodoDataType>
				data={todos}
				keyExtractor={todo => todo.id.toString()}
				renderItem={({ item }) => {
					return <TodoItem onToggle={onToggle} todo={item} onRemove={onRemove} />
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
