import React from 'react'

const TableBody = ({breweries, breweriesPerPage, pageNumber}) => {

  const pageVisited = pageNumber * breweriesPerPage
  
    return (
        <tbody>
                {breweries.slice(pageVisited, pageVisited + breweriesPerPage).map(brewery => (
                  <tr key={brewery.id}>
                    <td>{brewery.id || 'null'}</td>
                    <td>{brewery.obdb_id || 'null'}</td>
                    <td>{brewery.name || 'null'}</td>
                    <td>{brewery.brewery_type || 'null'}</td>
                    <td>{brewery.street || 'null'}</td>
                    <td>{brewery.address_2 || 'null'}</td>
                    <td>{brewery.address_3 || 'null'}</td>
                    <td>{brewery.city || 'null'}</td>
                    <td>{brewery.state || 'null'}</td>
                    <td>{brewery.county_province || 'null'}</td>
                    <td>{brewery.postal_code || 'null'}</td>
                    <td>{brewery.country || 'null'}</td>
                    <td>{brewery.longitude || 'null'}</td>
                    <td>{brewery.latitude || 'null'}</td>
                    <td>{brewery.phone || 'null'}</td>
                    <td>{brewery.website_url || 'null'}</td>
                    <td>{brewery.created_at || 'null'}</td>
                    <td>{brewery.updated_at || 'null'}</td>
                  </tr>
                ))}
            </tbody>
    )
}

export default TableBody
