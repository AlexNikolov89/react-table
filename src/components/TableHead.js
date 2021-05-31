import React from 'react'

const TableHead = ({header,loading}) => {
//console.log("🚀 ~ file: TableHead.js ~ line 4 ~ TableHead ~ header", header)
   
    const objKeys = Object.keys(header || {})
    {/*console.log(objKeys)*/}

    return (
   
        <thead className='thead'>
          <tr>
            {objKeys.map((value, index) => (
              <th className='th_head' key={index}>{value}</th>
            ))}
          </tr>
      </thead>
    )
}

export default TableHead
