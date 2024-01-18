import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Home from './index'
import gitApi from '../../api/github'

const mockNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockNavigate,
}))

describe('Home', () => {
    it('Deve informar o usuário e ser redirecionado para perfil', async () => {
        gitApi.getUser = jest.fn().mockResolvedValue({login: 'diegodnunes12'})
        const user = 'diego'

        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        )

        const input = screen.getByRole('textbox', {name: 'User'})
        const button = screen.getByRole('button', {name: 'Enter'})

        fireEvent.change(input, {target: {value: user}})
        fireEvent.click(button)
        expect(gitApi.getUser).toHaveBeenCalledWith(user)
    })

    it('Não deve redirecionar caso o usuário não seja preenchido', () => {
        window.alert = jest.fn();

        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        )

        const button = screen.getByRole('button', {name: 'Enter'})

        fireEvent.click(button)
        expect(mockNavigate).not.toHaveBeenCalled()
        expect(window.alert).toHaveBeenCalled()
    })
})