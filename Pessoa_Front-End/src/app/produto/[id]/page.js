'use client'

import { useRouter } from "next/navigation";

export default async function produto({ params }) {
    const router = useRouter();
    const id = { id: parseInt(params.id) }

    const idJson = JSON.stringify(id);

    const req = await fetch("http://localhost:3001/produto", {
        method: "POST",
        cache: "no-cache",
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
    return (
       
        <div className='flex flex-col m-16 flex-1 gap-6'>
            <p className="text-2xl">{produto.titulo }</p>
            <p>{produto.descricao}</p>
            <p>{produto.preco}</p>
            <p><img class='h-auto w-60 rounded-lg border-4 border-sky-700' src={produto.imagem}></img></p>
            <p>{produto.data_cadastro}</p>
            <button class=" text-white py-2 px-4 rounded-md text-center w-40 hover:bg-red-600 border-solid border-2 border-sky-700 " onClick={e => e.preventDefault(remover())}>REMOVER</button>
            <div><a class=" text-white py-2 px-4 rounded-md text-center w-40 hover:bg-blue-600 border-solid border-2 border-sky-700 " href='/'>Voltar</a></div>

        </div>
      
    )
}