import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
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

    it('Deve mostrar o conteúdo da página caso o usuário seja válido', () => {
        mockUser = 'diegodnunes12'

        expect(screen.getByRole('table')).toBeInTheDocument()
    })

    it('Não deve mostrar o conteúdo da página caso o usuário seja inválido', () => {
        mockUser = 'diegodnunes123'

        expect(screen.queryByRole('table')).not.toBeInTheDocument()
    })
})