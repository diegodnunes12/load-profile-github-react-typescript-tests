import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Perfil from './index'

describe('Perfil', () => {
    render(
        <BrowserRouter>
            <Perfil />
        </BrowserRouter>
    )

    it('Deve renderizar a tabela na página', () => {
        expect(screen.getByRole('table')).toBeInTheDocument()
    })
})