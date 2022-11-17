import {createSlice} from "@reduxjs/toolkit";

const paramSlice = createSlice({
        name: 'param',
        initialState: {
            timeRange: 'long_term',
            type: 'tracks',
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
                    console.log('setTimeRange')
                    state.timeRange = action.payload
                }
            },
            setTypeArtists: {
                reducer(state, action) {
                    state.type = 'artists'
                }
            },
            setTypeTracks: {
                reducer(state, action) {
                    state.type = 'tracks'
                }
            }
        }
    },
)


export const {setAccessToken, setTimeRange, setTypeArtists, setTypeTracks} = paramSlice.actions

export default paramSlice.reducer