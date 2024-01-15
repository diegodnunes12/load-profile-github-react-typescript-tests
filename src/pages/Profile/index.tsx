import React, { useEffect } from 'react'
import Layout from '../../components/Layout';
import Table from '../../components/Table';
import { useNavigate, useParams } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate()

  const { user } = useParams<{user: string}>()

  useEffect(() => {
    if(user !== 'diego') {
      navigate('/')
    }
  })

  return (
    <Layout>
      <Table />
    </Layout>
  )
}

export default Profile;