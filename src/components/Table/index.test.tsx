import { render, screen } from '@testing-library/react'
import Table from './index'

describe('Table', () => {
    render(
        <Table />
    )

    it('Deve exibir os itens na tabela', () => {
        expect(screen.getByText('React')).toBeInTheDocument();
        expect(screen.getByText('Frontend')).toBeInTheDocument();
    })
})