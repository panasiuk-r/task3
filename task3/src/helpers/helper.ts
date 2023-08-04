import Note from './types'

export default function nextId (notesData: Note[]): number {
	if (notesData.length === 0){
		return 1
	}

	const maxId = Math.max(...notesData.map(note => note.id))
	return maxId + 1
}
