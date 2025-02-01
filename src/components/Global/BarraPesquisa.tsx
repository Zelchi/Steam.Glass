import styled from 'styled-components';
import steamIcon from '../../assets/Steam.png';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding: 10px;
    background-color: #2A475E;
    color: white;
    border-bottom: 3px solid black;

    input {
        border: 1px solid black;
        width: 100%;
        height: 30px;
        border-radius: 10px;
        padding: 10px;
        outline: none;
    }

    img {
        border: 1px solid black;
        border-radius: 50%;
        margin-right: 10px;
        width: 30px;
        height: 30px;
    }
`;

export const BarraPesquisa = () => {
    return (
        <Container>
            <img src={steamIcon} />
            <input type="text" placeholder="Pesquisar jogos" />
        </Container>
    )
}