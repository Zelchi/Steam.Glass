import { ListaDeJogos } from './ListaDeJogos';

export const BarraLateralDosJogos = () => {
    return (
        <>
            <input type="text" placeholder="Pesquisar jogos" />
            <button type="submit">X</button>
            <ListaDeJogos/>
        </>
    )
}