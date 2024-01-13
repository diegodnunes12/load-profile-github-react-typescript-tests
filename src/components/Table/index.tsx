import React from 'react'
import { ITable, ITech } from './type';

const Table = ({data}: ITable) => {
  return (
    <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Tech</th>
            <th scope="col">Type</th>
          </tr>
        </thead>
        <tbody>          
          {
            data !== undefined && data.map((arr, index) => {
              return (
                <tr key={index}> 
                  <td>{arr.tech}</td>
                  <td>{arr.type}</td>
                </tr>
              )
            })            
          }
        </tbody>
    </table>
  )
}

export default Table;