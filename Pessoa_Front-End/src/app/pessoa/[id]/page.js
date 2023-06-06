'use client'

import { useRouter } from "next/navigation";

export default async function Pessoa({ params }) {
    const router = useRouter();
    const id = { id: parseInt(params.id) }

    const idJson = JSON.stringify(id);

    const req = await fetch("http://localhost:3003/pessoas", {
        method: "POST",
        cache: "no-cache",
        headers: { 'content-type': 'application/json' },
        body: idJson
    })
    const pessoa = await req.json();


    const remover = () => {
        console.log(idJson)
        try {
            fetch("http://localhost:3003/pessoas", {
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
            <p>{pessoa.nome}</p>
            <p>{pessoa.idade}</p>
            <p>{pessoa.uf}</p>
            <button onClick={e => e.preventDefault(remover())}>REMOVER</button>

        </div>

    )
}