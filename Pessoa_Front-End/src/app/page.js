"use client"
import Link from 'next/link';

export default async function Home() {

  const req = await fetch("http://localhost:3003/pessoas", {
    cache: "no-cache"
  });
  const pessoas = await req.json();

  return (
    <main> <Link href="/cadastro" className='voltar'> CADASTRAR </Link>

      {pessoas.map(pessoas => (
        <div key={pessoas.id}>
          <p>{pessoas.nome}</p>
          <p>{pessoas.idade}</p>
          <Link href={`/pessoa/${pessoas.id}`}>ver mais</Link>
        </div>
      ))}
    </main>
  )
}