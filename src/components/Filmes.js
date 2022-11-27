import React from 'react';

const Filmes = ({ filmes, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>
  }
  return (
    <div className="row">
      {filmes.map(filme => (
        <div key={filme.id} className="col-sm-6">
          <div className="card">
            <img src={filme.movie_banner} className="card-img-top" alt="Imagem banner" />
            <div className="card-body">
              <h5 className="card-title">{filme.title}</h5>
              <p className="card-text">{filme.descrição}</p>
              <p className="card-text">{filme.diretor}</p>
              <p className="card-text">{filme.produtor}</p>

            </div>
          </div>
        </div>
      ))}
    </div>

  );
}

export default Filmes;