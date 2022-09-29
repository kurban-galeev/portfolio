import type { TypedUseSelectorHook } from 'react-redux'
import { useSelector } from 'react-redux'

import type { RootStateType } from '..'

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector
