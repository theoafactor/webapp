export default function Home(props){

    let moviesList = props.moviesListProp;

    //console.log(moviesList)

    let viewMovies = moviesList.map((movie, index) => {
        let Poster = movie.Poster == "N/A" ? "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg" : movie.Poster


        return     <div className="col-md-3" key={index}>
        <div className="card mb-4 shadow-sm">
          <img src={Poster} />

          <div className="card-body">
            <h5 className="card-text">{movie.Title}</h5>
            <h6>Released <span className='badge badge-primary'>{movie.Released}</span></h6>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary">Add To Collection</button>
                <button type="button" className="btn btn-sm btn-outline-secondary">Like</button>
              </div>
              <small className="text-muted">{movie.Runtime}</small>
            </div>
          </div>
        </div>
      </div>

    })


    return (
        <>
            <main role="main">

<section className="jumbotron text-center">
  <div className="container">
    <h1>Enjoy Movies</h1>
    <div className='col-8 m-auto'>
    <input type='search' placeholder='Search movies ...' className='form-control' style={{ height: '3em'}}/>
    </div>
    <p>
      <button className="btn btn-lg btn-primary my-2">Search</button>
    </p>
  </div>
</section>

<div className="album py-5 bg-light">
  <div className="container">

    <div className="row">
            {viewMovies}
    </div>
  </div>
</div>
</main>
        </>
    )
}