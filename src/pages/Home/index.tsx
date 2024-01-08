import React from 'react'
import Layout from '../../components/Layout';

const Home = () => {
  return (
    <Layout>
      <div className='col-4 m-auto'>
        <h1>Login</h1>
        <div className="mb-3">
          <label htmlFor="gitUser" className="form-label">Github user</label>
          <input className="form-control" id="gitUser" aria-describedby="userHelp" />
          <div id="userHelp" className="form-text">type your Github user</div>
      </div>
        <button className='btn btn-dark'>Enter</button>
      </div>
    </Layout>
  )
}

export default Home;