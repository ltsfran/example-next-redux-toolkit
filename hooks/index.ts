import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'
import type { AppDispatch, AppState } from '../store'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
