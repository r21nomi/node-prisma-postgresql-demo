import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = process.env.PORT || 9001
app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})

app.get('/', (_req, res) => {
  res.send('HELLO.')
})

app.post('/task', async (req, res) => {
  let id = req.body.id
  id = parseInt(id)

  const data = `id: ${id}-${Math.random()}`

  const task = await prisma.task.upsert({
    where: { id: id },
    update: {
      content: data,
    },
    create: {
      id: id,
      content: data,
    },
  });

  res.send(`id: ${task.id}`)
})

app.get('/tasks', async (_req, res) => {
  const items = await prisma.task.findMany()
  res.send(items)
})