import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Finnie',
    email: 'longnguyen03072001@gmail.com',
    password: bcrypt.hashSync('07022136533701', 10),
    isAdmin: true,
  },
  {
    name: 'Test User',
    email: 'user@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users