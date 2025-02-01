import axios from 'axios';
import { useQuery } from 'react-query';
import { Jogo } from '../store/reducers/listaJogos';

type JogoResponse = {
    applist: {
        apps: Jogo[];
    }
}

const useGames = () => {

    const findGames = async (): Promise<JogoResponse> => {
        const data = await axios.get('steam/ISteamApps/GetAppList/v0002/?format=json');
        return data.data;
    }

    return useQuery('games', findGames);
}

export default useGames;