import { Router } from 'express'
import launches from './v1/Launches'
const router = Router()

router.use('/spacex/launches', launches)

export default router
