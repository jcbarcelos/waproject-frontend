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
  const indexOfLastFilmes = currentPage * filmesPerPage;
  const indexOfFirstFilmes = indexOfLastFilmes - filmesPerPage;
  const currentFilmes = filmes.slice(indexOfFirstFilmes, indexOfLastFilmes)

  const paginate = async (pageNumber) => setCurrentPage(pageNumber)


  return (
    <div className="container mt-5">
      <h1 className='text-primary mb-3'>Filmes</h1>

      <Filmes filmes={currentFilmes} loading={loading}/>
      <Pagination filmesPerPage={filmesPerPage}
        totalFilmes={filmes.length} paginate={paginate} />
    </div>

  );
}

export default App;
