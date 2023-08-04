import express, { Request, Response } from 'express'
import cors from 'cors'

import { getNotes, categoryCounts, getNoteById } from '../repositories/repository'
import { createNote, updateNoteById, deleteNoteById } from '../services/service'
import Note from '../helpers/types'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/notes', (request: Request, response: Response) => {
	response.json(getNotes())
})

app.get('/notes/stats', (request: Request, response: Response) => {
	response.json(categoryCounts())
})

app.get('/notes/:id', (request: Request, response: Response) => {
	const id: number = Number(request.params.id)
	const note: Note | undefined = getNoteById(id)

	if (note) {
		response.json(note)
	} else {   
		response.status(404).end()
	}
})

app.delete('/notes/:id', (request: Request, response: Response) => {
	const id: number = Number(request.params.id)
	const flag = deleteNoteById(id)

	if (!flag) {
		return response.status(404).end()
	}

	response.status(204).end()
})

app.post('/notes', (request: Request, response: Response) => {
	const note: Note | null = createNote(request.body)
	if (!note) {
		return response.status(404).end()
	}
	response.json(note)
})

app.patch('/notes/:id', (request: Request, response: Response) => {
	const id: number = Number(request.params.id)
	const note: Note | null = updateNoteById(id, request.body)
	
	if(!note) {
		return response.status(404).end()
	}

	return response.json(note)
})

export default app
