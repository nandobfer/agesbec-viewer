import { TablePagination } from 'react-pagination-table';
import { useLocation, useNavigate } from 'react-router-dom';
import './style.scss';

export const Visitantes = () => {

    const navigate = useNavigate();
    const visitantes = useLocation().state;

    const headers = ['ID', 'Nome', 'RG']

    return (
        <div className="main-container">
            <button onClick={() => navigate(-1)} className='back-button'>Voltar</button>
            <h1>Credenciamento de pessoas</h1>
            <TablePagination 
                headers={headers}
                data={visitantes}
                columns='id.nome.rg'
                perPageItemCount={10}
                partialPageCount={2}
                totalCount={visitantes.length}
                arrayOption={[]}
            />
        </div>
    )
}