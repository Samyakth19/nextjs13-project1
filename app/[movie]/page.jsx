import Image from "next/image";
export async function generateStaticParams(){
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  const result = await data.json();
  return result.results.map((movie) =>({
    movie:toString(movie.id),
  }))
}


export default async function MovieDetail({params}) {
  const { movie } = params;
  const imagePath = 'https://image.tmdb.org/t/p/original/'

    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`) //,{next:{revalidate:60}}
    const res = await data.json()
    console.log(res)
    
  return (
    <div>
       <h1 className="text-4x1">{res.title}</h1> 
       <h2 className="text-lg">{res.release_date}</h2>
       <h2 className="text-lg">{res.runtime} minutes</h2>
       <h2 className="text-sm bg-green-600 inline-block my-2 py-2 px-4 rounded">{res.status}</h2>

       <Image className="my-12"
       src={imagePath+res.backdrop_path} alt=" "
       width ={1000}
       height = {1000} 
       priority
       />
       <p>{res.tagline}</p>
    </div>
  )
}