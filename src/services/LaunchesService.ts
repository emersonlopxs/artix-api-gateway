import axios from 'axios'

export default class LaunchesService {
  static async findAll () {
    try {
      const { data } = await axios.get('http://localhost:3334/api/v1')
      return data
    } catch (error) {
      return {
        error
      }
    }
  }
}
