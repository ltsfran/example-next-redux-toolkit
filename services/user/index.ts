import type { GraphqlInstance } from '../../shared'

export interface UserType {
  name: string
  age: number
}

const UserService = {
  async getAll (): Promise<GraphqlInstance<UserType[]>> {
    try {
      const response = await fetch('http://localhost:3000/api/users')
      const data = await response.json()
      if (data.errors !== undefined) return { data: undefined, error: 'No users' }
      return { data, error: undefined }
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message)
      }
      return { data: undefined, error: 'Error form' }
    }
  }
}

export default UserService
