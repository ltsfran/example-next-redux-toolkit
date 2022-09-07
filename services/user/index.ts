export interface UserType {
  name: string
  age: number
}

interface ResponseSuccess {
  data: UserType[]
  error: undefined
}

interface ResponseError {
  data: undefined
  error: string
}

type Response = ResponseSuccess | ResponseError

const UserService = {
  async getAll (): Promise<Response> {
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
