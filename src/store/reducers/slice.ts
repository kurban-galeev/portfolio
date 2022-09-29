import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface StateNavigate {
  id: number
  title: string
}

interface Props {
  navigate: StateNavigate
}
const initialState: Props = {
  navigate: { id: 1, title: '' }
}

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    setNavigate(state: Props, action: PayloadAction<StateNavigate>) {
      state.navigate = action.payload
    },
  },
})
export const { setNavigate } = portfolioSlice.actions

export default portfolioSlice.reducer
