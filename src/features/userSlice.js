import { createSlice } from "@reduxjs/toolkit"

const users = [
    {
        "id": 1145,
        "name": "JHON",
        "lastname": "DOE",
        "email": "johndoe11@example.com",
        "avatar": "hdhdhdhdhdhshshahaggagaag"
      }
    
]

export const userSlice = createSlice({
    name: 'users',
    initialState: users,
    reducers: {
        addUser: (state, action) =>{
            state.push(action.payload)
        }
    }
})

export const {addUser} = userSlice.actions
export default userSlice.reducer