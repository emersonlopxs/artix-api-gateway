import { Router } from 'express'
import LaunchesService from '../../services/LaunchesService'

const router = Router()

router.get('/', async (request, response) => {
  try {
    const launches = LaunchesService.findAll()
    return response.status(200).json(launches)
  } catch (error) {
    console.log('error')
  }
})

export default router
