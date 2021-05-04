import React from 'react'
import { Text, StyleSheet, View, GestureResponderEvent } from 'react-native'
import { TodoDataType } from '../../types/todo'
import Button from '../Button'

export type TodoItemProps = {
	onToggle: (id: number) => (_: GestureResponderEvent) => void
	onDelete: (id: number) => (_: GestureResponderEvent) => void
	item: TodoDataType
}

function TodoItem({ onToggle, item, onDelete }: TodoItemProps) {
	return (
		<View style={styles.container}>
			<Text style={styles[item.isCompleted ? 'completed' : 'unCompleted']} onPress={onToggle(item.id)}>
				{item.content}
			</Text>
			<Button label="삭제" onPress={onDelete(item.id)} />
		</View>
	)
}

export default React.memo(TodoItem)

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 8,
	},
	completed: {
		textDecorationLine: 'line-through',
		marginRight: 8,
	},
	unCompleted: { marginRight: 8 },
})
