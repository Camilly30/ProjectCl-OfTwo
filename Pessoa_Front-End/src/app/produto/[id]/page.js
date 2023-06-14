'use client'

import { useRouter } from "next/navigation";

export default async function produto({ params }) {
    const router = useRouter();
    const id = { id: parseInt(params.id) }

    const idJson = JSON.stringify(id);

    const req = await fetch("http://localhost:3001/produtos", {
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
        <div>
            <p>{produto.titulo }</p>
            <p>{produto.data_cadastro}</p>
            <p>{produto.preco}</p>
            <p>{produto.descricao}</p>
            <p>{produto.imagem}</p>

            <button onClick={e => e.preventDefault(remover())}>REMOVER</button>

        </div>

    )
}