import { Router } from 'express'
import LaunchesService from '../../services/LaunchesService'

const router = Router()

router.get('/', async (request, response) => {
  try {
    const launches = await LaunchesService.findAll()
    return response.status(200).json(launches)
  } catch (error) {
    return response.status(500).json(error)
  }
})

export default router
