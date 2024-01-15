import React, { MouseEvent, useState } from 'react'
import Layout from '../../components/Layout';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState('');

  const handleClick = async (event: MouseEvent) => {
    event.preventDefault();

    if(user.length === 0) {
      return alert('Por favor, preencha o usuário')
    }
    
    navigate(`/${user}`)
  }

  return (
    <Layout>
      <div className='col-4 m-auto'>
        <h1>Login</h1>
        <div className="mb-3">
          <label htmlFor="gitUser" className="form-label">Github user</label>
          <input 
            type="text" 
            aria-label="User" 
            className="form-control" 
            id="gitUser" 
            aria-describedby="userHelp" 
            value={user}
            onChange={event => setUser(event.target.value)}
          />
          <div id="userHelp" className="form-text">type your Github user</div>
      </div>
        <button onClick={handleClick} className='btn btn-dark'>Enter</button>
      </div>
    </Layout>
  )
}

export default Home;