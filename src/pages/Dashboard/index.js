import { useContext } from "react"
import { AuthContext } from "../../contexts/auth"
import { FiPlus, FiMessageSquare, FiEdit2, FiSearch } from "react-icons/fi"
import { Link } from "react-router-dom"
import './dashboard.css'

import Header  from '../../components/Header'
import Title from '../../components/Title'

export default function Dashboard(){
    const { logout } = useContext(AuthContext)

    async function handleLogout(){
        await logout();
    }

    return(
        <div>
            <Header/>
            <div className="content">
                <Title name="Tickets">
                    <FiMessageSquare size={25}/>
                </Title>
                <>
                    <Link to="/new" className="new">
                        <FiPlus color="#FFF" size={25}/>
                        Novo Chamado
                    </Link>
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Cliente</th>
                                <th scope="col">Assunto</th>
                                <th scope="col">Status</th>
                                <th scope="col">Cadastrado em</th>
                                <th scope="col">#</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label='Cliente'>Mercado Esquina</td>
                                <td data-label='Assunto'>Suporte</td>
                                <td data-label='Status'>
                                    <span className="badge" style={ {backgroundColor:"#999"} }>
                                        Em aberto
                                    </span>
                                </td>
                                <td data-label='Cadastrado'>18/07/2023</td>
                                <td data-label='#'>
                                    <button className="action" style={ {backgroundColor:"#3588f6"} }>
                                        <FiSearch  color="#fff" size={17} />
                                    </button>
                                    <button className="action"  size={17} style={ {backgroundColor:"#f6a935"} } >
                                        <FiEdit2  color="#fff"/>
                                    </button>
                                </td>
                            </tr>


                            <tr>
                                <td data-label='Cliente'>Padaria Pão de queijo</td>
                                <td data-label='Assunto'>Suporte</td>
                                <td data-label='Status'>
                                    <span className="badge" style={ {backgroundColor:"#999"} }>
                                        Em aberto
                                    </span>
                                </td>
                                <td data-label='Cadastrado'>18/07/2023</td>
                                <td data-label='#'>
                                    <button className="action" style={ {backgroundColor:"#3588f6"} }>
                                        <FiSearch  color="#fff" size={17} />
                                    </button>
                                    <button className="action"  size={17} style={ {backgroundColor:"#f6a935"} } >
                                        <FiEdit2  color="#fff"/>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </>
            </div>
        </div>
    )
}