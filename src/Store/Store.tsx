import { configureStore } from "@reduxjs/toolkit";
import jogoState from "./reducers/listaJogos";

const store = configureStore({
    reducer: {
        jogoState,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
});

export type RootState = ReturnType<typeof store.getState>;
export default store;