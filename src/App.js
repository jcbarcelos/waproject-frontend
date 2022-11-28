import React, { useEffect, useState } from 'react';
import axios from "axios"
import Filmes from './components/Filmes';
import Pagination from './components/Pagination';


function App() {
  const [filmes, setFilmes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [filmesPerPage] = useState(10);

  useEffect(() => {
    fetchFilmes()
  }, [])

  const fetchFilmes = async () => {
    setLoading(true)
    const res = await axios.get(`http://localhost:3000/filmes`)
    if (res.data.length > 0) {
      setFilmes([])
      setFilmes(res.data)
    }
    setLoading(false)
  }

  const update = async () => {
    setLoading(true)
    const res = await axios.post(`http://localhost:3000/filmes`)
    if (res.data.length > 0) {
      setFilmes([])
      setFilmes(res.data)
    }
    setLoading(false)
  }
  const paginate = async (pageNumber) => setCurrentPage(pageNumber)

  const indexOfLastFilmes = currentPage * filmesPerPage;
  const indexOfFirstFilmes = indexOfLastFilmes - filmesPerPage;
  const currentFilmes = filmes.slice(indexOfFirstFilmes, indexOfLastFilmes)

  return (
    <>
      <div className="container mt-5">
        <nav class="navbar bg-light">
          <div class="container-fluid">
            <a class="navbar-brand">Navbar</a>
            <form class="d-flex">
              <button class="btn btn-outline-primary" type="button" onClick={() => update()}>Atualizar</button>
            </form>
          </div>
        </nav>


        <h1 className='text-primary mb-3'>Filmes</h1>
       
        <Filmes filmes={currentFilmes} loading={loading} />
        <Pagination filmesPerPage={filmesPerPage}
          totalFilmes={filmes.length} paginate={paginate} />
      </div>
    </>
  );
}

export default App;
