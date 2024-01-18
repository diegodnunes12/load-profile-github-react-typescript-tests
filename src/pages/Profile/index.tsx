import { useState } from 'react'
import Layout from '../../components/Layout';
import Table from '../../components/Table';
import { useNavigate, useParams } from 'react-router-dom';
import gitApi from '../../api/github';

const Profile = () => {
  const navigate = useNavigate()
  const [repos, setRepos] = useState([])

  const { user } = useParams<{user: string}>()

  if(!user) {
    navigate('/')
  } else {
    gitApi.getRepos(user).then(response => {
      if(repos.length === 0) {
        setRepos(response)
      }
      return
    }).catch(error => navigate('/'))
  }
  
  return (
    <Layout>
      <Table data={repos} />
    </Layout>
  )
}

export default Profile;