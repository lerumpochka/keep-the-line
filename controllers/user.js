import db from '../database'

const user = JSON.parse(JSON.stringify(await db.User.findOne({ where: { email: session.user.email } })))

export default userController 