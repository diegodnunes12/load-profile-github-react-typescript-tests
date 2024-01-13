import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Home from './index'

const mockNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockNavigate,
}))

describe('Home', () => {
    it('Deve informar o usuário e ser redirecionado para perfil', () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        )

        const input = screen.getByRole('textbox', {name: 'User'})
        const button = screen.getByRole('button', {name: 'Enter'})

        fireEvent.change(input, {target: {value: 'usuario'}})
        fireEvent.click(button)
        expect(mockNavigate).toHaveBeenCalled()
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