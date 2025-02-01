import { createSlice } from "@reduxjs/toolkit";

export interface Jogo {
    appid: number;
    name: string;
}

interface JogoState {
    listaJogos: Jogo[];
    jogoSelecionado: string;
}

const estadoInicial: JogoState = {
    listaJogos: [],
    jogoSelecionado: '',
}

const jogoSlice = createSlice({
    name: 'jogoState',
    initialState: estadoInicial,
    reducers: {
        adicionarJogo: (state, action) => {
            state.listaJogos.push(...action.payload);
        }
    }
});

export const { adicionarJogo } = jogoSlice.actions;

export default jogoSlice.reducer;