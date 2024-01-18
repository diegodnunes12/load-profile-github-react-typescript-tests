import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import gitApi from './api/github';
import { act } from 'react-dom/test-utils';

let user = ''

describe('App', () => {
    it('Deve receber os dados na resposta', async () => {
        user = 'diegodnunes12'

        // eslint-disable-next-line testing-library/no-unnecessary-act
        act(() => {
            render(<App />)
        })

        jest.spyOn(gitApi, 'getUser')

        const input = screen.getByRole('textbox', {name: 'User'})
        const button = screen.getByRole('button', {name: 'Enter'})

        fireEvent.change(input, {target: {value: user}})
        fireEvent.click(button)

        expect(gitApi.getUser).toHaveBeenCalled()

        const response = await gitApi.getUser(user)
        expect(response).toHaveProperty('login')
    })

    it('Não deve receber dados na resposta caso o usuário não exista', async () => {
        user = 'diegodnunes123'
    
        // eslint-disable-next-line testing-library/no-unnecessary-act
        act(() => {
            render(<App />)
        })
    
        jest.spyOn(gitApi, 'getUser')
    
        const input = screen.getByRole('textbox', {name: 'User'})
        const button = screen.getByRole('button', {name: 'Enter'})
    
        fireEvent.change(input, {target: {value: user}})
        fireEvent.click(button)
    
        const response = await gitApi.getUser(user)
        expect(response).toBe(undefined)
    })
})