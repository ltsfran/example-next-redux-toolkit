import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface State {
  name: 'NO_MODAL' | 'LOGIN'
  open: boolean
}

const initialState: State = {
  name: 'NO_MODAL',
  open: false
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<State['name']>) => {
      state.name = action.payload
      state.open = true
    },
    closeModal: () => {
      return initialState
    }
  }
})

export const { openModal, closeModal } = modalSlice.actions
export default modalSlice.reducer
