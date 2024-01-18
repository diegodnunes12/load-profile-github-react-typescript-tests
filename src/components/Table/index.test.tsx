import { render, screen } from '@testing-library/react'
import Table from './index'

describe('Table', () => {
    const mockData = [
        {
            name: 'React',
        },
        {
            name: 'Angular',
        },
        {
            name: 'Node',
        },
    ]    

    it('Deve exibir os itens na tabela', () => {
        render(<Table data={mockData} />)

        expect(screen.getAllByRole('row')).toHaveLength(1 + mockData.length)
    })

    it('Deve renderizar a tabela caso não exista dados', () => {
        render(<Table />)

        expect(screen.getAllByRole('row')).toHaveLength(1)
    })
})