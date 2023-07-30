import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import { useState } from "react";

export default function Home() {

  const clientes = [
    new Cliente('Ana', 34, "1"),
    new Cliente('Bia', 45, "2"),
    new Cliente('Carlos', 23, "3"),
    new Cliente('Pedro', 54, "4"),
  ]

  function clienteSelecionado(cliente: Cliente){
    console.log(cliente.nome)
  }

  function clienteExcluido(cliente: Cliente){
    console.log(`excluí o cliente: ${cliente.nome}`)
  }

  function salvarCliente(cliente: Cliente){
    console.log(cliente)
  }
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <Layout titulo="Cadastro Simples">
          {visivel === 'tabela' ?
            <>
              <div className={`flex justify-end`}>
                <Botao color="green" 
                className="mb-4" 
                onClick={setVisivel.bind('form')}
                >
                  Novo Cliente
                </Botao>
              </div>
              <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido}></Tabela>
            </> :
            <Formulario Cliente={clientes[0]} cancelado={()=> setVisivel('tabela')} clienteMudou={salvarCliente}></Formulario>
          }
        </Layout>
      </div>
    </>
  )
}
