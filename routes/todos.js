import { Router } from 'express'
import * as todosCtrl from '../controllers/todos.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/',todosCtrl.index)
router.post('/:id', todosCtrl.create)
router.post('/:id', todosCtrl.show)
router.post('/:id', todosCtrl.update)


/*---------- Protected Routes ----------*/

export { router }
