import { Router } from 'express'
import * as todosCtrl from '../controllers/todos.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/

router.post('/',todosCtrl.create)

/*---------- Protected Routes ----------*/

export { router }
