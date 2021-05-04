import React from 'react'
import Todo from './src/screens/Todo'
import { atom, RecoilRoot } from 'recoil'

export const todoState = atom({
	key: 'todoState',
	default: [
		{
			id: 1,
			content: 'TODO!!!!',
			isCompleted: false,
		},
	],
})

export default function App() {
	return (
		<RecoilRoot>
			<Todo />
		</RecoilRoot>
	)
}
