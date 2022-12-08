import db from '../database'

const taskController = {
  all: async () => {
    const tasks = await db.Task.findAll()
    const parsedtasks = JSON.parse(JSON.stringify(tasks))
    return parsedtasks
  },
  find: async (id) => {
    const tasks = await db.Task.findByPk(id)
    const parsedtasks = JSON.parse(JSON.stringify(tasks))
    return parsedtasks
  },
  associate: async (id, user) => {
    const Tasks = await db.Task.findByPk(id)
    user.addTask(task)
    tasks.setUser(user)
  },
  create: async (data) => {
    const tasks = await db.Task.create(data)
    return JSON.parse(JSON.stringify(tasks))
  }
}

export default taskController
