import { Router } from 'express'
import * as todosCtrl from '../controllers/todos.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/',todosCtrl.index)


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/:id',checkAuth, todosCtrl.create)
router.post('/:id',checkAuth, todosCtrl.show)
router.delete('/deleted/:id',checkAuth, todosCtrl.deleted)


export { router }
