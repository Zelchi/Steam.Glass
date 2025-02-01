import ListaDeJogos from './components/Global/ListaDeJogos';
import styled from 'styled-components'

const Steam = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
`;

const App = () => {
    console.log('Oi')
    return (
        <Steam>
            <ListaDeJogos />
        </Steam>
    )
}

export default App