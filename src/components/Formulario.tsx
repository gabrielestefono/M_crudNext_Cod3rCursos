import Entrada from "./Entrada"
import { useState } from "react"
import Cliente from "../core/Cliente"
import Botao from "./Botao"

interface FormularioProps {
    Cliente: Cliente,
    cancelado?: () => void,
    clienteMudou?: (cliente: Cliente) => void
}

export default function Formulario(props: FormularioProps){
    const id = props.Cliente?.id
    const [nome, setNome] = useState(props.Cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.Cliente?.idade ?? 0)
    return(
        <div>
            {
                id ? (<Entrada 
                        texto="Código" 
                        valor={id} 
                        somenteLeitura
                        className="mb-4"
                    />) : false
            }
            <Entrada 
                texto="Nome" 
                valor={nome}
                valorMudou={setNome}
                className="mb-4"
            />
            <Entrada 
                texto="idade" 
                tipo="number" 
                valor={idade}
                valorMudou={setIdade}
            />
            <div className="flex justify-end mt-7">
                <Botao color="blue" className="mr-2" onClick={()=> props.clienteMudou?.(new Cliente(nome, +idade, id))}>{id ? "Alterar" : "Salvar"}</Botao>
                <Botao color="gray" onClick={props.cancelado}>Cancelar</Botao>
            </div>
        </div>
    )
}