import axios from "axios"
import gitApi from "./github"

jest.mock('axios')
const axiosMock = axios as jest.Mocked<typeof axios>

describe('github', () => {

    it('Deve retornar o login e o id', async () => {
        axiosMock.get = jest.fn().mockResolvedValue({data: {login: 'diegodnunes12', id: '123456'}})

        const response = await gitApi.getUser('diegodnunes12')
        expect(response).toMatchObject({login: 'diegodnunes12', id: '123456'})
    })

    it('Deve retornar a mensagem de usuário inválido', async () => {
        axiosMock.get = jest.fn().mockResolvedValue({data: {message: 'Not Found'}})

        const response = await gitApi.getUser('diegodnunes123')
        expect(response).toMatchObject({message: 'Not Found'})
    })

    it('Deve retornar o nome do repositorio e o id', async () => {
        axiosMock.get = jest.fn().mockResolvedValue({data: [{name: 'repositorio-1', id: '123456'}]})

        const response = await gitApi.getRepos('diegodnunes12')
        expect(response).toMatchObject([{name: 'repositorio-1', id: '123456'}])
    })

    it('Deve retornar a mensagem de usuário inválido para recuperar os repositórios', async () => {
        axiosMock.get = jest.fn().mockResolvedValue({data: {message: 'Not Found'}})

        const response = await gitApi.getRepos('diegodnunes123')
        expect(response).toMatchObject({message: 'Not Found'})
    })
})