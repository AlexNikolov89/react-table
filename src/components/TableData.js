import { Fragment } from 'react'
import {Table} from 'react-bootstrap'
import Loader from './Loader'
import TableBody from './TableBody'
import TableHead from './TableHead'

const TableData = ({breweries, header, loading, breweriesPerPage, pageNumber}) => {
    // console.log(breweries)
    // console.log(header)
    
    return (
        <Fragment>
        {loading && <Loader />}
        <Table striped bordered hover variant='dark'>
            <TableHead header={header} />
            <TableBody 
            breweries={breweries} 
            breweriesPerPage={breweriesPerPage}
            pageNumber={pageNumber}
            />
        </Table>
        </Fragment>
        
    )
}

export default TableData
