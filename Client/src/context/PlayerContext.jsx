import { createContext, useContext, useEffect, useRef, useState } from "react";
// import { songsData } from "../assets/assets";
import { url } from "../App";
import axios from "axios";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
    // adding backend the data for songs and albums from db
    const [songsData, setSongsData] = useState([])
    const [albumsData, setAlbumsData] = useState([])

    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    const [track, setTrack] = useState(songsData[0])
    const [playStatus, setPlayStatus] = useState(false)
    const [time, setTime] = useState({
        currentTime: {
            seconds: 0,
            minutes: 0
        },
        totalTime: {
            seconds: 0,
            minutes: 0
        }
    })
    
    const play = ()=> {
        audioRef.current.play();
        setPlayStatus(true)
    }
    const pause = ()=> {
        audioRef.current.pause();
        setPlayStatus(false)
    }

    const playWithId = async (id) => {
        await setTrack(songsData[id]);
        await audioRef.current.play();
        setPlayStatus(true);
    }

    const previous = async ()=> {
        if(track.id > 0){
            await setTrack(songsData[track.id - 1])
            await audioRef.current.play()
            setPlayStatus(true)
        }
    }
    const next = async ()=> {
        if(track.id < songsData.length -1){
            await setTrack(songsData[track.id + 1])
            await audioRef.current.play()
            setPlayStatus(true)
        }
    }

    const seekSong = async (e) => {
        audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration)
    }

    const getSongsData = async () => {
        try {
            const response = await axios.get(`${url}/api/songs/list`)
            setSongsData(response.data.songs)
            setTrack(response.data.songs[0]) // only set track after the complete load of  or store of a first data in songsData then set it..
        } catch (error) {
            console.log("error from SongsDataInPlayer", error.message)
        }
    }
    const getAlbumsData = async ()=> { 
        try {
            const response = await axios.get(`${url}/api/albums/list`)
            setAlbumsData(response.data.album)
        } catch (error) {
            console.log("Error from AlbumsDataInPlayer", error.message)
        }
    }

    const contextValue = {
        audioRef,
        seekBar,
        seekBg,
        track, setTrack,
        playStatus, setPlayStatus,
        time,setTime,
        play, pause,
        playWithId,
        previous, 
        next,
        seekSong,
        songsData, albumsData
    }

    // useEffect(()=> {
    //     if (!audioRef.current) return;
        
    //     setTimeout(()=> {
    //         audioRef.current.ontimeupdate = () => {
    //             setTime({
    //                 currentTime: {
    //                 seconds: Math.floor(audioRef.current.currentTime % 60),
    //                 minutes: Math.floor(audioRef.current.currentTime / 60)
    //                 },
    //                 totalTime: {
    //                    seconds: Math.floor(audioRef.current.duration % 60),
    //                    minutes: Math.floor(audioRef.current.duration / 60)
    //                 }
    //             })
    //         }
    //     }, 1000)
    // }, [audioRef])

    // AI
        useEffect(() => {
        if (!audioRef.current) return;

        const updateTime = () => {
            seekBar.current.style.width = (Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100)) + "%";
            setTime({
                currentTime: {
                    seconds: Math.floor(audioRef.current.currentTime % 60),
                    minutes: Math.floor(audioRef.current.currentTime / 60)
                },
                totalTime: {
                    seconds: Math.floor(audioRef.current.duration % 60),
                    minutes: Math.floor(audioRef.current.duration / 60)
                }
            });
        };

        audioRef.current.ontimeupdate = updateTime;

        return () => {
            audioRef.current.ontimeupdate = null; // cleanup
        };
    }, [audioRef]);

    useEffect(()=> {
        getSongsData();
        getAlbumsData();
    },[])


    return(
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    ) 
}

export default PlayerContextProvider;