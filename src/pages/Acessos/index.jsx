import { useEffect, useState } from 'react';
import { TablePagination } from 'react-pagination-table';
import { useLocation, useNavigate } from 'react-router-dom';
import './style.scss';

export const Acessos = () => {
    const electron = window.electronAPI;

    const navigate = useNavigate();
    const acessos = useLocation().state;

    const headers = ['ID', 'Nome', 'CPF', 'Data entrada', 'Hora entrada', 'Data saida', 'Hora saida']

    return (
        <div className="main-container">
            <button onClick={() => navigate(-1)} className='back-button'>Voltar</button>
            <h1>Controle de acesso</h1>
            <TablePagination 
                headers={headers}
                data={acessos}
                columns='id.nome.cpf.data_entrada.hora_entrada.data_saida.hora_saida'
                perPageItemCount={10}
                partialPageCount={2}
                totalCount={acessos.length}
                arrayOption={[]}
            />
        </div>
    )
}