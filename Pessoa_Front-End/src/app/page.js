"use client"
import Link from 'next/link';


export default async function Home() {

  const req = await fetch("http://localhost:3001/produtos", {
    cache: "no-cache"
  });
  const produtos = await req.json();

  return (
    <main className='flex flex-col m-16 flex-1 gap-6 '>
       <Link href="/cadastro" className='voltar'> CADASTRAR </Link>
    
        {produtos.map(produtos => (
        <div key={produtos.id}>

            <p>{produtos.titulo }</p>
            <p>{produtos.data_cadastro}</p>
            <p>{produtos.preco}</p>
            <p>{produtos.descricao}</p>
            <img class='h-auto max-w-lg rounded-lg' src={produtos.imagem}></img>
          <Link  href={`/produto/${produtos.id}`}>ver mais</Link>
        </div>
      
      ))}
    </main>
  )
}

/*apresentação de img 
  erro cadastro
  updete
  delete
  */
