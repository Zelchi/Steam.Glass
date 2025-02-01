import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { useEffect, useRef, useState, memo } from 'react';
import { adicionarJogo } from '../../store/reducers/listaJogos';
import { BarraPesquisa } from './BarraPesquisa';
import useGames from '../../api/useGames';
import styled from 'styled-components';

const Container = styled.div`    
    display: flex;
    flex-direction: column;
    align-items: start;
    border: 3px solid black;
    background-color: aliceblue;
    height: 100vh;
`;

const List = styled.ul`
    list-style-type: none;
    color: white;
    background-color: #2a475e;
    width: 500px;
    height: 100%;
    overflow-y: scroll;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
        width: 12px;
    }

    &::-webkit-scrollbar-track {
        background: #1b2838;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #3c6e91;
        border: 3px solid #1b2838;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: #66c0f4;
    }
`;

const ListItem = styled.li<{ selected: boolean }>`
    background-color: ${props => props.selected ? '#66c0f4' : '#2a475e'};
    text-align: start;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.3s;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    &:hover {
        background-color: #3c6e91;
        padding-left: 5px;
        scale: calc(1,5);
        border: 1px solid white;
    }
`;

const ListaDeJogos = () => {

    const [inicio, setInicio] = useState(0);
    const [fim, setFim] = useState(100);
    const { data } = useGames();

    const dispatch = useDispatch();

    const { listaJogos } = useSelector((state: RootState) => state.jogoState);

    useEffect(() => {
        if (!data) return;
        const apps = data.applist.apps.slice(inicio, fim);
        dispatch(adicionarJogo(apps));
        setInicio(fim);
        setFim(fim + 100);
    }, [data]);

    const params = useParams();
    const navigate = useNavigate();
    const listInnerRef = useRef<HTMLUListElement>(null);

    const scroll = () => {
        console.log('Tick')
        if (listInnerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
            if (scrollTop + clientHeight === scrollHeight) {
                console.log('Chegou ao final da lista');
            }
        }
    };

    return (
        <Container>
            <BarraPesquisa />
            <List onScroll={scroll} ref={listInnerRef}>
                {listaJogos.map((jogo, index) => (
                    <ListItem
                        selected={params.id === jogo.appid.toString()}
                        key={index}
                        onClick={() => { navigate(`/jogo/${jogo.appid}`) }}
                    >
                        {jogo.name}
                    </ListItem>
                ))}
            </List>
        </Container>
    )
}

export default memo(ListaDeJogos);