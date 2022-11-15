import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import formatData from "../tools/formatData";


const tracksSlice = createSlice({
    name: 'tracks',
    initialState: {
        error: null,
        status: 'idle',
        data: []
    },
    reducers: {
        setAccessToken:{
            reducer(state, action){
                state.accessToken = action.payload
            }
        },
        startFetching:{
            reducer(state, action){
                state.status = 'idle'
            }
        }


    },
    extraReducers(builder){
        builder
            .addCase(fetchTracks.pending, (state, action)=>{
                state.status ='loading'
            })
            .addCase(fetchTracks.fulfilled, (state, action)=>{
                    state.status = 'succeeded'

                    state.data = action.payload
                }
            )
            .addCase(fetchTracks.rejected, (state, action)=>{
                state.status = 'failed'
                state.error = action.error.message
            })
    }

},)

export const {startFetching, setTimeRange} = tracksSlice.actions

export default tracksSlice.reducer


// async Thunks

export const fetchTracks = createAsyncThunk('tracks/fetchTracks', async (_, thunkAPI) => {

    let accessToken = thunkAPI.getState(state => state)
    accessToken = accessToken.param.accessToken

    let timeRange = thunkAPI.getState(state => state)
    timeRange = timeRange.param.timeRange

    let response
    if (accessToken) {
        response = await axios.get(`https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=${timeRange}`, {
            headers: {
                Authorization: 'Bearer ' + accessToken,
                "Content-Type": 'application/json',
                "Host": "api.spotify.com"
            }
        })
    }

    let formated = formatData(response.data.items)


    return formated


})