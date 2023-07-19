import { useState } from 'react'
import Header from '../../components/Header'
import Title from '../../components/Title'
import { FiPlusCircle } from 'react-icons/fi'
import './new.css'


export default function New(){

    const [customers, setCustomers] = useState([])

    const [complemento, setComplemento] = useState('');
    const [assunto, setAssunto] = useState('Suporte');
    const [status, setStatus] = useState('Aberto');


    function handleOptionChange(e){
        setStatus
    }

    return(
        <div>
            <Header/>
            <div className='content'>
                <Title name='Novo chamado'>
                <FiPlusCircle size={25} />
                </Title>

                <div className='container'>
                    <form className='form-profile'>

                        <label>Clientes:</label>
                        <select>
                            <option key={1} value={1}>Mercado Teste</option>
                            <option key={2} value={2}>Padaria Teste</option>
                        </select>

                        <label>Assunto:</label>
                        <select>
                            <option value="Suporte">Suporte</option>
                            <option value="Visita Tecnica">Visita Tecnica</option>
                            <option value="Financeiro">Financeiro</option>
                        </select>

                        <label>Status:</label>
                            <div className='status'>
                                <input 
                                    type='radio'
                                    name='radio'
                                    value='Aberto'
                                    onChange={handleOptionChange}
                                    checked={true}
                                />
                                <span>Em aberto</span>
                                <input 
                                    type='radio'
                                    name='radio'
                                    value='Progresso'
                                    onChange={handleOptionChange}
                                />
                                <span>Em progresso</span>
                                <input 
                                    type='radio'
                                    name='radio'
                                    value='Atendido'
                                    onChange={handleOptionChange}
                                />
                                <span>Atendido</span>
                            </div>

                        <label>Nota:</label>
                        <textarea
                            type="text"
                            placeholder='Descreva o seu problema (opcional)'
                            value={complemento}
                            onChange={ (e) => setComplemento(e.target.value)}
                        />

                        <button type='submit'>Registrar</button>

                    </form>
                </div>
            </div>
        </div>
    )
}