import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Perfil from './index'


const mockNavigate = jest.fn()
let mockUser: string = ''

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockNavigate,
    useParams: () => ({
        user: mockUser
    })
}))

describe('Perfil', () => {
    render(
        <BrowserRouter>
            <Perfil />
        </BrowserRouter>
    )

    it('Deve renderizar a tabela na página caso o usuário for válido', () => {
        mockUser = 'diego'
        expect(screen.getByRole('table')).toBeInTheDocument()
        expect(mockNavigate).not.toHaveBeenCalled()
    })

    /* it('Deve renderizar para home caso o usuário não seja válido', () => {
        mockUser = 'luke'
        expect(mockNavigate).toHaveBeenCalled()
    }) */
})