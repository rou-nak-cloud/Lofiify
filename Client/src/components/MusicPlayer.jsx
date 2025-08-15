import React, { useContext } from 'react'
import { assets, songsData } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const MusicPlayer = () => {
    const { seekBg, seekBar, track ,time ,play, pause, playStatus, previous, next, seekSong } = useContext(PlayerContext);

    const formatTime = (min, sec) => {
  return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
    };

  return track ? (
    <>
        <div className='bg-[#030712] flex items-center justify-between text-white/90 px-4 py-3'>
            <div className='hidden lg:flex items-center gap-4'>
                <img className='w-12' src={track.image} alt="song image" />
                <div className=''>
                    <p>{track.name}</p>
                    <p>{track.desc.slice(0,12)}</p>
                </div>
            </div>

            <div className='flex flex-col items-center gap-1 m-auto'>
                <div className='flex gap-4'>
                    <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="" />
                    <img onClick={previous} className='w-4 cursor-pointer' src={assets.prev_icon} alt="" />
                        {
                            playStatus ?   <img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt="" /> 
                            :
                            <img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt="" />
                        }
                    <img onClick={next} className='w-4 cursor-pointer' src={assets.next_icon} alt="" />
                    <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="" />
                </div>
                <div className='flex items-center gap-5'>
                    <p className='text-sm'>{time.currentTime.minutes}:{time.currentTime.seconds}</p>
                    <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                        <hr ref={seekBar} className='h-1 border-none outline-none w-0 bg-green-800 rounded-full' />
                    </div>
                    <p className='text-sm'>{time.totalTime.minutes}:{time.totalTime.seconds}</p>
                </div>
            </div>

            <div className='hidden lg:flex items-center gap-2 opacity-60 cursor-pointer'>
                <img className='w-4' src={assets.play_icon} alt="" />
                <img className='w-4' src={assets.mic_icon} alt="" />
                <img className='w-4' src={assets.queue_icon} alt="" />
                <img className='w-4' src={assets.speaker_icon} alt="" />
                <img className='w-4' src={assets.volume_icon} alt="" />
                <div className='w-20 bg-slate-50 h-1 rounded' />

                <img className='w-4' src={assets.mini_player_icon} alt="" />
                <img className='w-4' src={assets.zoom_icon} alt="" />

            </div>
        </div> 
    </>
  ) : null
}

export default MusicPlayer
