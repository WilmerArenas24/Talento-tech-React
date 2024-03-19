import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userSlice = createApi({
    reducerPath: 'users',
    baseQuery: fetchBaseQuery({
        baseUrl: 'localhost:3000' // Corregir la URL base
        // baseUrl: 'http://localhost:3000' // Corregir la URL base
    }),
    endpoints: builder => ({
        getUsers: builder.query({
            query: () => '/user'
        })
    })
});

export const { usegetUsersQuery } = userSlice;


// const users = [
//     {
//         "id": 1145,
//         "name": "JHON",
//         "lastname": "DOE",
//         "email": "johndoe11@example.com",
//         "avatar": "hdhdhdhdhdhshshahaggagaag"
//       }
    
// ]
//metodo para usar el createslice de reduxtookit
// export const userSlice = createSlice({
//     name: 'users',
//     initialState: users,
//     reducers: {
//         addUser: (state, action) =>{
//             state.push(action.payload)
//         }
//     }
// })

// export const {addUser} = userSlice.actions
// export default userSlice.reducer