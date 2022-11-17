import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import formatData from "../tools/formatData";


const artistsSlice = createSlice({
    name: 'artists',
    initialState: {
        error: null,
        status: 'idle',
        data: []
    },
    reducers: {
        setAccessTokenArtists:{
            reducer(state, action){
                state.accessToken = action.payload
            }
        },
        startFetchingArtists:{
            reducer(state, action){
                state.status = 'idle'
            }
        }

    },
    extraReducers(builder){
        builder
            .addCase(fetchArtists.pending, (state, action)=>{
                state.status ='loading'
            })
            .addCase(fetchArtists.fulfilled, (state, action)=>{
                    state.status = 'succeeded'

                    state.data = action.payload
                }
            )
            .addCase(fetchArtists.rejected, (state, action)=>{
                state.status = 'failed'
                state.error = action.error.message
            })
    }

},)

export const {startFetchingArtists} = artistsSlice.actions

export default artistsSlice.reducer


// async Thunks

export const fetchArtists = createAsyncThunk('tracks/fetchArtists', async (_, thunkAPI) => {

    let accessToken = thunkAPI.getState(state => state)
    accessToken = accessToken.param.accessToken

    let timeRange = thunkAPI.getState(state => state)
    timeRange = timeRange.param.timeRange

    let response
    if (accessToken) {
        response = await axios.get(`https://api.spotify.com/v1/me/top/artists?limit=50&time_range=${timeRange}`, {
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