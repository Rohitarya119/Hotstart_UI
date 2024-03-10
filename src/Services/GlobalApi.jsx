import React from 'react'
import axios from 'axios'

const movieBaseUrl="https://api.themoviedb.org/3"
const apiKey="fa2f7847692434f6462ee9810f708a9e"

const getTrendingVideos=axios.get(movieBaseUrl+"/trending/all/day?api_key="+apiKey)
const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=fa2f7847692434f6462ee9810f708a9e'

const getMovieByGenreId=(id)=>axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default {getTrendingVideos,getMovieByGenreId}
