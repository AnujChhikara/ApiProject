import  { useState } from 'react';

function Omdb() {
  const [apiKey, setApiKey] = useState('d538e8ae'); // Replace with your OMDb API key
  const [movieTitle, setMovieTitle] = useState('');
  const [movieData, setMovieData] = useState(null);

  const searchMovie = async () => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${movieTitle}`);
      const data = await response.json();

      if (data.Response === 'True') {
        setMovieData(data);
        console.log(data)
      } else {
        setMovieData(null);
        console.error('Error:', data.Error);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div className="flex flex-col space-y-4">
        <div>
      <h1 className='text-white underline mb-4 font-semibold text-xl'>OMDb Movie Search</h1>
      <input
      className='rounded-lg px-2 py-1 font-bold'
        type="text"
        placeholder="Enter movie title"
        value={movieTitle}
        onChange={(e) => setMovieTitle(e.target.value)}
      />
      <button className="bg-white ml-4 text-zinc-800 font-lg px-2 py-1 rounded-3xl font-semibold" onClick={searchMovie}>Search</button>
      </div>
      {movieData && (
        <div className='text-white flex flex-row space-x-4 '>
            <div>
          {movieData.Poster && (
            <img className='w-44 rounded-lg text-sm' src={movieData.Poster} alt={`${movieData.Title} Poster`}  />
          )}</div>
          <div className='flex flex-col space-y-3'>
          <p><span className='font-semibold underline  mr-2 '>Year:</span> {movieData.Year}</p>
          <p><span className='font-semibold underline  mr-2'>IMDB Rating:</span> {movieData.imdbRating
}</p>
          <p><span className='font-semibold underline  mr-2 '>Actors:</span> {movieData.Actors}</p>
          <p><span className='font-semibold underline  mr-2 '>Genre:</span> {movieData.Genre}</p>
          <p className='w-[500px]'><span className='font-semibold underline  mr-2 '>Plot:</span> {movieData.Plot}</p>
          {/* Add more details as needed */}
          </div></div>
      )}
    </div>
  );
}

export default Omdb;
