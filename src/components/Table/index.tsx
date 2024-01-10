import React from 'react'

const Table = () => {
  return (
    <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Tech</th>
            <th scope="col">Type</th>
          </tr>
        </thead>
        <tbody>          
          <tr>
            <td>React</td>
            <td>Frontend</td>
          </tr>
        </tbody>
    </table>
  )
}

export default Table;