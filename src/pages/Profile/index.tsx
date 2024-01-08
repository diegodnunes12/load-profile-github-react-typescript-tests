import React from 'react'
import Layout from '../../components/Layout';

const Profile = () => {
  return (
    <Layout>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Tech</th>
            <th scope="col">Type</th>
          </tr>
        </thead>
        <tbody>          
          <tr>
            <td>2</td>
            <td>Jacob</td>
          </tr>
        </tbody>
      </table>
    </Layout>
  )
}

export default Profile;