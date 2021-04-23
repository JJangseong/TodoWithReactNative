import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { TodoDataType } from '../../types/todo'
import Button from '../Button'

export type TodoItemProps = {
	onToggle(id: number): void
	onRemove(id: number): void
	todo: TodoDataType
}

function TodoItem({ onToggle, todo, onRemove }: TodoItemProps) {
	console.log(todo.isCompleted)
	return (
		<View style={styles.container}>
			<Text style={styles[todo.isCompleted ? 'completed' : 'unCompleted']} onPress={() => onToggle(todo.id)}>
				{todo.content}
			</Text>
			<Button label="삭제" onPress={() => onRemove(todo.id)} />
		</View>
	)
}

export default TodoItem

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	completed: {
		textDecorationLine: 'line-through',
		marginRight: 8,
	},
	unCompleted: { marginRight: 8 },
})
