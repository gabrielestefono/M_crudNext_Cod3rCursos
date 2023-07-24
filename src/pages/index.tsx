import Layout from "../components/Layout";
import Tabela from "../components/Tabela";

export default function Home() {

  const clientes = []
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <Layout titulo="Cadastro Simples">
          <Tabela clientes={clientes}></Tabela>
        </Layout>
      </div>
    </>
  )
}
