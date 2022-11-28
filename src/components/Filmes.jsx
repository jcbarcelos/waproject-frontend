import React from 'react';

const Filmes = ({ filmes, loading }) => {

  return (
    <>
      <div className="row">
        {filmes.map((filme, i) => (
          <div key={filme.id} className="col-sm-6">
            <div className="card mb-3">
              <img src={filme.movie_banner} className="card-img-top" alt="Imagem banner" />
              <div className="card-body" id="description">
                <h5 className="card-title">{filme.title}</h5>
                <p className='card-text '>
                  {filme.description}
                </p>
                <span className="card-text">Director: {filme.director}</span>
                <br />
                <span className="card-text">Producer: {filme.producer}</span>

              </div>
            </div>
          </div>
        ))
        }
      </div >
      {loading && (<div class="d-flex spinner-grow text-dark  justify-content-center" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>)}

    </>

  );
}

export default Filmes;