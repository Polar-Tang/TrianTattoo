import express from 'express'
import cors from 'cors'
import corsOptions from '../utils/corsOptions.js'
import { loginController } from '../controllers/auth.controller.ts'


const authRouter = express.Router()


authRouter.post('/login', loginController)

export default authRouter