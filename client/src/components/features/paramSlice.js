import {createSlice} from "@reduxjs/toolkit";

const paramSlice = createSlice({
        name: 'param',
    initialState:{
        timeRange: 'long_term',
        accessToken: '',

    },
        reducers: {
            setAccessToken: {
                reducer(state, action) {
                    state.accessToken = action.payload
                }
            },
            setTimeRange: {
                reducer(state, action) {
                    state.timeRange = action.payload
                }
            }
        }
    },
)


export const {setAccessToken, setTimeRange} = paramSlice.actions

export default paramSlice.reducer