import {configureStore} from '@reduxjs/toolkit'
import tracksReducer from "./tracksSlice";
import artistsSlice from "./artistsSlice";
import paramSlice from "./paramSlice";

export default configureStore({
    reducer:
        {

            tracks: tracksReducer,
            artists: artistsSlice,
            param: paramSlice
        }
})
