import express, { Request, Response, json } from 'express'
import cors from 'cors'
const server = express();

const PORT = 8080

server.use(json())
server.use(cors())

const users: { [key: string  | number ]: any } = {}

server.post('/api', (req: Request, res: Response) => {
  const id = Math.ceil((Math.random() * 10000 ))
  users[id] = {
    id,
    ...req.body
  }
  res.send(users[id])
})

server.patch('/api/:id', (req: Request, res: Response) => {
  const { id } = req.params
  users[id] = {
    id,
    ...req.body
  }
  res.send(users[id])
})

server.delete('/api/:id', (req: Request, res: Response) => {
  const { id } = req.params
  delete users[id]
  res.send()
})

server.listen(PORT, () => {
  console.log('App is up and running', PORT)
})