import { useState, useEffect } from 'react'
import youtube from '../apis/youtube'

const KEY = 'AIzaSyCIdCgHOvqNv_r36GbRdNiCvix6z7Hsho0'

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        search(defaultSearchTerm)
    }, [defaultSearchTerm])


    const search = async (term) => {

        const response = await youtube.get('/search', {
            params: {
                q: term,
                part: 'snippet',
                maxResults: 5,
                key: KEY,
                type: 'video'
            }
        })

        setVideos(response.data.items)
        //setSelectedVideo(response.data.items[0])
    }

    return [videos, search]
}

export default useVideos