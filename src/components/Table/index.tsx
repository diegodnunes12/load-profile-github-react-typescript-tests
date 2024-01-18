import React from 'react'
import { ITable } from './type';

const Table = ({data}: ITable) => {
  return (
    <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>          
          {
            data !== undefined && data.map((arr, index) => {
              return (
                <tr key={index}> 
                  <td>{arr.name}</td>
                </tr>
              )
            })            
          }
        </tbody>
    </table>
  )
}

export default Table;