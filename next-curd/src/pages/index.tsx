import Botao from "@/components/Botao";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Formulario from "@/components/Formulario";
import useClientes from "@/hocks/useClientes";

export default function Home() {

const {
  cliente,
  clientes,
  novoCliente,
  salvarCliente,
  selecionarCliente,
  excluirCliente,
  tabelaVisivel,
  exibirTabela,

} = useClientes()
  

  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `}>
      <Layout titulo="Cadastro SImples">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
            <Botao cor="green" className="mb-4" 
              onClick={novoCliente}>
              Novo Cliente
            </Botao>
            </div>
            <Tabela clientes={clientes} 
            clienteSelecionado={selecionarCliente}
            clienteExcluido={excluirCliente}/>
          </>
        ): (
          <Formulario 
          cliente={cliente}
          clienteMudou={salvarCliente}
          cancelado={() => exibirTabela}
          />
        )}
        
      </Layout> 
    </div>
  )
}
// npm run dev http://localhost:3000 
//https://console.firebase.google.com/u/0/project/next-crud-2a567/firestore/data/~2F?hl=pt-br