import React from 'react'
import Menu from '../Menu';
import { ILayout } from './types';

const Layout = ({ children } : ILayout ) => {
  return (
    <div className='cotnainer-fluid'>
        <Menu />
        <div className='container'>
            <div className='row'>
                { children }
            </div>
        </div>
    </div>
  )
}

export default Layout;