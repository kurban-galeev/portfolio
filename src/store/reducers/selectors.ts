import { RootStateType } from '..'

export const selectSearch = (state: RootStateType) => state.portfolioReducer.navigate
