'use client'
import Link from 'next/link';
import { useRouter } from "next/navigation";

export default async function produto({ params }) {
    const router = useRouter();//rota
    const id = { id: parseInt(params.id) } //representa o parâmetro de ID passado na rota.

    const idJson = JSON.stringify(id);

    const req = await fetch("http://localhost:3001/produto", {//Essa linha faz uma solicitação assíncrona para a URL "http://localhost:3001/produto" para obter os dados da API. A função fetch é usada para fazer a requisição HTTP.
        method: "POST",
        cache: "no-cache",//Page não será salva a resposta  em cache.
        headers: { 'content-type': 'application/json' },
        body: idJson
    })
    const produto = await req.json();


    const remover = () => {
        console.log(idJson)
        try {
            fetch("http://localhost:3001/produtos", {
                method: "DELETE",
                headers: { 'content-type': 'application/json' },
                body: idJson
            })
            router.push("/");
        } catch (error) {
            alert("Ocorreu um erro" + error)
        }
    }
    function confirmardelete() {//funcao para confirmação de deletar produto
        var confirmacao = confirm('Tem certeza de que deseja deletar este produto?');
        
        if (confirmacao) {
          alert('Produto deletado com sucesso!');
        } else {
          alert('Produto será mantido');
        }
      }
    return (
       
        <div className=' items-center justify-center font-bold flex flex-col m-0 flex-1 gap-4 bg-[url("https://cdn.wallpapersafari.com/45/25/lgtpda.jpg")] bg-no-repeat bg-cover  '>
            <p className="text-4xl m-12 ">{produto.titulo }</p>
            <p className='text-2xl'>{produto.descricao}</p>
            <p className='text-2xl'>{produto.preco}</p>
            <p><img class='h-auto max-w-xl rounded-lg border-4 border-sky-700 transition duration-300 ease-in-out hover:scale-110' src={produto.imagem}></img></p>
            <p>{produto.data_cadastro}</p>
            <div class='m-5'>
            <button class=" text-white py-2 px-4 rounded-md text-center w-40 hover:bg-red-600 border-solid border-4 border-sky-700 " onClick={e => e.preventDefault(remover(),confirmardelete())}>Remover</button>
            <Link class=" text-white py-2 px-4 rounded-md text-center w-40 hover:bg-yellow-600 border-solid border-4 m-4 border-sky-700 " href={`/atualizar/${produto.id}`} className='alterar'> Alterar</Link>
            <Link class=" text-white py-2 px-4 rounded-md text-center w-40 hover:bg-blue-600 border-solid border-4 border-sky-700 m-2" href='/'>Voltar</Link>
            </div>
        </div>
      
    )
}