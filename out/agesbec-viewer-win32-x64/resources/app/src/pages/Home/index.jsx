import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss';

export const Home = () => {

    const electron = window.electronAPI;

    const navigate = useNavigate();

    const queryAndGo = async (table) => {
        const sql = `SELECT * FROM ${table} ORDER BY id DESC ;`;
        try {
            const data = await electron.query(sql);
            navigate(`/${table}`, {state: data});
        } catch (error) {
            console.log(error);
        }
    }

    
    return (
        <div className="main-container">
            <h1>API Siscomex</h1>

            <div className='container'>
                <p>Conecte-se na rede do portal através da VPN para poder visualizar as tabelas</p>
                <div className="buttons-container">
                    <button onClick={() => {queryAndGo('acessos')}}>Acessos</button>
                    <button onClick={() => {queryAndGo('visitantes')}}>Visitantes</button>
                </div>
            </div>
        </div>
    )
}