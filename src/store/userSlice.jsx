import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'counter',
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload)
    },
    deleteSingleUser: (state, action) => {
      //   console.log(action.payload)
      const id = state.indexOf(action.payload)
      state.splice(id, 1)
    },
    deleteAllUsers: (state) => {
      //   return []
      state.splice(0, state.length)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addUser, deleteSingleUser, deleteAllUsers } = userSlice.actions

export default userSlice.reducer
