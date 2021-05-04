import React, { useCallback, useMemo, useState } from 'react'

import { FlatList, StyleSheet, Text, View } from 'react-native'
import { TodoDataType } from '../types/todo'
import Button from '../components/Button'
import Input from '../components/Input'
import TodoItem from '../components/TodoItem'
import { todoState } from '../../App'
import { useRecoilState } from 'recoil'
import TodoList from '../components/TodoList'

const TODO_DATA: TodoDataType[] = [
	{
		id: 1,
		content: '나의 첫 TODO List',
		isCompleted: false,
	},
]

export type TodoProps = {}

function Todo({}: TodoProps) {
	const [todos, setTodos] = useRecoilState(todoState)
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

	const onRemove = useCallback(
		(id: number) => {
			setTodos(todos.filter(todo => todo.id !== id))
		},
		[todos],
	)

	return (
		<View style={styles.container}>
			<Text>Welcome My Todo</Text>
			<View style={styles.inputContainer}>
				<Input onChangeText={onChangeText} value={value} />
				<Button label="저장" onPress={onSave} />
			</View>
			<TodoList />
		</View>
	)
}

export default Todo

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
		paddingTop: 44,
	},
	inputContainer: {
		flexDirection: 'row',
		width: '100%',
		padding: 8,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
