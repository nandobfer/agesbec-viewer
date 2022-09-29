import './style.scss';

export const Home = () => {
    
    return (
        <div className="main-container">
            <h1>API Siscomex</h1>

            <div className='container'>
                <p>Conecte-se na rede do portal através da VPN para poder visualizar as tabelas</p>
                <div className="buttons-container">
                    <button>Acessos</button>
                    <button>Visitantes</button>
                </div>
            </div>
        </div>
    )
}