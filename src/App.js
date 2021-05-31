import { useEffect, useState } from 'react'
import './App.css'
import TableData from './components/TableData'
import axios from 'axios'
import ReactPaginate from 'react-paginate'


const App = () => {
  const [breweries, setBreweries] = useState([])
  const [loading, setLoading] = useState(true)
  const [pageNumber, setPageNumber] = useState(0) 

  const breweriesPerPage = 5;
  
  
  const pageCount = Math.ceil(breweries.length / breweriesPerPage)

  useEffect(() => {
    const fetchData = async () => {
      let res = await axios.get('https://api.openbrewerydb.org/breweries')
      setBreweries(res.data)
      //console.log(res.data)
      setLoading(false)
    }
    fetchData()
    
  }, [])

  const changePage = ({selected}) => {
    setPageNumber(selected)
  }


  return (
    <div>
      <TableData 
      breweries={breweries} 
      header={breweries[0]} 
      loading={loading} 
      breweriesPerPage={breweriesPerPage}
      pageNumber={pageNumber}
      />
      <ReactPaginate 
        previousLabel={'<<'}
        nextLabel={'>>'}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={'paginationButtons'}
        previousLinkClassName={'previousButtons'}
        nextLinkClassName={'nextButton'}
        disabledClassName={'paginationDisabled'}
        activeClassName={'paginationActive'}
      />
    </div>
  )
}

export default App

