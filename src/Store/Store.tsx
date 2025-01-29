import { configureStore } from "@reduxjs/toolkit";
import jogoReducer from "./JogoReducer";

const store = configureStore({
    reducer: {
        jogoState: jogoReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
});

export type RootState = ReturnType<typeof store.getState>;

export default store;