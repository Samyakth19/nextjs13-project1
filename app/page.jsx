// "use client"

// import { useState } from 'react'
import styles from './page.module.css'

import Image from 'next/image'

import Movie from './about/movie';
import { Inter } from '@next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  const res = await data.json()

  console.log(res)
  return (
    <main>
      {/* <h1 className="">Hello next13</h1> */}
      <div className='grid gap-12 grid-cols-fluid'>
      {res.results.map((movie) =>(
        <Movie
          key = {movie.id}
          id = {movie.id}
          title = {movie.title}
          poster_path = {movie.poster_path}
          release_date = {movie.release_date}
          
        />
      ))}
      </div>
     
    </main>
  )
}
