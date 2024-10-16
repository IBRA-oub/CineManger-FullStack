import React, { useEffect, useState } from 'react'
import CommentSection from '../components/stream/commentSection'
import FilmSuggestionSection from '../components/stream/filmSuggestionSection'
import VideoSection from '../components/stream/videoSection'
import { useParams } from 'react-router-dom'
import { getAllComment } from '../../services/filmApi/getAllCommentApi'
import { getFilm } from '../../services/filmApi/getFilmApi'

export default function FilmStream() {
  const [filmComment, setFilmComment] = useState([]);
  const [film, setFilm] = useState([]);
  const { id } = useParams()
  useEffect(() => {

    const commentDataFunction = (async () => {
      const commentData = await getAllComment(id);
      setFilmComment(commentData)
    })




    const filmDataFunction = (async () => {

      const filmData = await getFilm(id);

      setFilm(filmData)
    })

    commentDataFunction();
    filmDataFunction();

  }, [id])
  return (
    <>
      <div className='w-full h-screen bg-black'>

        <div className='w-full h-[80vh] bg-black'>
          <VideoSection film={film} />
        </div>
        <div className='w-full min-h-2/2 bg-[#121212]  flex'>
          <div className='w-[75%] h-full '>
            <CommentSection filmComment={filmComment} setFilmComment={setFilmComment} film={film} />
          </div>
          <div className='w-[25%] h-full '>
            <FilmSuggestionSection />
          </div>
        </div>

      </div>
    </>
  )
}
