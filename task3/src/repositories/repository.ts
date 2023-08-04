import Note from '../helpers/types'

let notes = [
	{
		id: 1,
		name: "Note 1",
		created: "27/07/2023",
		category: "Idea",
		content: "This is the content of Note 1.",
		dates: "",
		archive: true,
	},
	{
		id: 2,
		name: "Note 2",
		created: "28/07/2023",
		category: "Task",
		content: "This is the content of Note 2.",
		dates: "",
		archive: false,
	},
	{
		id: 3,
		name: "Note 3",
		created: "29/07/2023",
		category: "Random Thought",
		content: "This is the content of Note 3.",
		dates: "",
		archive: false,
	},
	{
		id: 4,
		name: "Note 4",
		created: "30/07/2023",
		category: "Idea",
		content: "This is the content of Note 4. It mentions dates 1/8/2023 and 5/8/2023.",
		dates: "1/8/2023, 5/8/2023",
		archive: false,
	},
	{
		id: 5,
		name: "Note 5",
		created: "31/07/2023",
		category: "Task",
		content: "This is the content of Note 5. It mentions a date 10/8/2023.",
		dates: "10/8/2023",
		archive: false,
	},
	{
		id: 6,
		name: "Note 6",
		created: "31/07/2023",
		category: "Random Thought",
		content: "This is the content of Note 6.",
		dates: "",
		archive: false,
	},
	{
		id: 7,
		name: "Note 7",
		created: "31/07/2023",
		category: "Idea",
		content: "This is the content of Note 7. It mentions a date 2/8/2023.",
		dates: "2/8/2023",
		archive: false,
	},
]


const getNotes = (): Note[] => {
	return notes
}

const getNoteById = (id: number): Note | undefined => {
	return notes.find(n => n.id === id)
}

const updateNote = (id: number, note: Note): Note | null => {
	const noteId = notes.findIndex(n => n.id === id)
	notes[noteId] = Object.assign({}, notes[noteId], note)
	return notes[noteId]
}

const addNote = (n: Note): Note => {
	notes = notes.concat(n)
	return n
}

const deleteNote = (id: number): void => {
	const noteIndex = notes.findIndex(n => n.id === id)
	notes.splice(noteIndex, 1)
}

const categoryCounts = () => {
	return notes.reduce((acc, note) => {
		const category = note.category
		const countObj = note.archive ? 'archived' : 'unarchived'
		acc[category] = {
			...acc[category],
			[countObj]: (acc[category]?.[countObj] || 0) + 1,
		}
		return acc;
	}, {} as { [category: string]: { archived: number; unarchived: number } })
}

export { getNotes, getNoteById, addNote, updateNote, deleteNote, categoryCounts }
