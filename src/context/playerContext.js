import {createContext, useState} from "react";


export const PlayerContext = createContext()


export function PlayerContextProvider(props) {
    const [player, setPlayer] = useState([]);
    const [playlist, setPlaylist] = useState([]);

    return (
        <PlayerContext.Provider value={{player, setPlayer, playlist, setPlaylist}}>
            {props.children}
        </PlayerContext.Provider>
    )
}