import type { NextApiRequest, NextApiResponse } from 'next'

interface Data {
  name: string
  age: number
}

interface Error {
  message: string
}

interface ErrorData {
  errors: Error[]
}

export const users = [
  {
    name: 'Luis Tupa',
    age: 24
  },
  {
    name: 'Walter Tupa',
    age: 26
  }
]

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse<Data[] | ErrorData>
): void {
  res.status(200).json(users)
}
