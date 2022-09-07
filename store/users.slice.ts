import {
  createAsyncThunk,
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit'
import UserService from '../services/user'
import type { UserType } from '../services/user'

interface State {
  status: 'idle' | 'loading' | 'success' | 'failure'
  entities: UserType[]
  errorMessage: string
}

const initialState: State = {
  status: 'idle',
  entities: [],
  errorMessage: ''
}

export const fetchUsers = createAsyncThunk<UserType[], undefined, { rejectValue: string }>(
  'users/fetchUsersStatus',
  async (args, { rejectWithValue }) => {
    const { data, error } = await UserService.getAll()
    if (error !== undefined) return rejectWithValue(error)
    return data
  }
)

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.status = 'loading'
      state.errorMessage = ''
    })
    builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<UserType[]>) => {
      state.status = 'success'
      state.entities = action.payload
      state.errorMessage = ''
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.status = 'failure'
      state.errorMessage = action.payload !== undefined
        ? action.payload
        : 'Rejected'
    })
  }
})

export default usersSlice.reducer
