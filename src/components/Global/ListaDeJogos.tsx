import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../Store/Store';
import axios from 'axios';
import { useEffect } from 'react';
import { adicionarJogo } from '../../Store/JogoReducer';

export const ListaDeJogos = () => {

    const dispatch = useDispatch();
    const listaJogos = useSelector((state: RootState) => state.jogoState.listaJogos);

    useEffect(() => {
        if (listaJogos.length === 0) {
            axios.get('steam/ISteamApps/GetAppList/v0002/?format=json')
                .then(response => {
                    const apps = response.data.applist.apps.slice(100, 200);
                    console.log(apps);
                    dispatch(adicionarJogo(apps));
                })
        }
    }, [listaJogos.length, dispatch]);

    const params = useParams();
    const navigate = useNavigate();

    return (
        <ul>
            {listaJogos.map((jogo, index) => (
                <li className={params.id ? "select" : "normal"} key={index} onClick={() => { navigate(`/jogo/${jogo.appid}`) }}>
                    {jogo.name}
                </li>
            ))}
        </ul>
    )
}