import { getNotes, getNoteById, addNote, updateNote, deleteNote, categoryCounts } from '../repositories/repository'
import nextId	from '../helpers/helper'
import Note from '../helpers/types'

const createNote = (n: any): Note | null => {
	if (!validateNote(n)) {
		return null
	}
	
	const note: Note = {
		...n,
		id: nextId(getNotes())
	}
	return addNote(note)
}

const updateNoteById = (id: number, n: any): Note | null => {
	if (!validateNote(n) || !getNoteById(id)) {
		return null
	}
	return updateNote(id, n)
}

const deleteNoteById = (id: number): boolean => {
	if (!getNoteById(id)) {
		return false
	}
	deleteNote(id)
	return true
}

function validateNote(postData: Partial<Note>): boolean {
    const isValid =
        typeof postData.name === 'string' &&
        typeof postData.created === 'string' &&
        typeof postData.category === 'string' &&
        typeof postData.content === 'string' &&
        typeof postData.dates === 'string' &&
        typeof postData.archive === 'boolean';

    if (!isValid) {
        return false;
    }

    const noteKeys = ['name', 'created', 'category', 'content', 'dates', 'archive'];
    const postDataKeys = Object.keys(postData);
    const additionalKeys = postDataKeys.filter(key => !noteKeys.includes(key));

    if (additionalKeys.length > 0) {
        return false;
    }

    return true;
}

export {createNote, updateNoteById, deleteNoteById}
