// @flow
import * as React from 'react'
import { useRecoilState } from 'recoil'
import { todoState } from '../../../App'
import { FlatList, GestureResponderEvent } from 'react-native'
import { TodoDataType } from '../../types/todo'
import TodoItem from '../TodoItem'

export type TodoListProps = {}

function TodoList() {
	const [todos, setTodos] = useRecoilState(todoState)

	const onDelete = (id: number) => (_: GestureResponderEvent) => {
		setTodos(todos.filter(todo => todo.id !== id))
	}

	const onToggle = (id: number) => (_: GestureResponderEvent) => {
		setTodos(
			todos.map(todo => {
				return todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : { ...todo }
			}),
		)
	}

	return (
		<FlatList<TodoDataType>
			data={todos}
			keyExtractor={todo => todo.id.toString()}
			renderItem={({ item }) => {
				return <TodoItem onToggle={onToggle} onDelete={onDelete} item={item} />
			}}
		/>
	)
}

export default TodoList
