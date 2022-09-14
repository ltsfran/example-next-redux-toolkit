interface ErrorField {
  field: string
  message: string
  url?: string
}

interface ResponseSuccess<T> {
  data: T
  error: undefined
}

interface ResponseError {
  data: undefined
  error: string | ErrorField[]
}

export type GraphqlInstance<T> = ResponseSuccess<T> | ResponseError
