"use client"
import Link from 'next/link';


export default async function Home() {

  const req = await fetch("http://localhost:3001/produtos", {
    cache: "no-cache"
  });
  const produtos = await req.json();

  return (
    <main >
        <div className='grid grid-cols-2 gap-10 m-20 content-evenly justify-evenly'>
        {produtos.map(produtos => (
        <div key={produtos.id}>
            <p>{produtos.titulo }</p>
            <p>{produtos.descricao}</p>
          
           <Link href={`/produto/${produtos.id}`} > <img class='h-auto w-72 m-3 rounded-lg border-4 border-sky-700  transition duration-300 ease-in-out hover:scale-110 hover:opacity-25' src={produtos.imagem}></img></Link>
           <Link class=" text-white py-2 px-4 rounded-md text-center w-40 hover:bg-blue-600 border-solid border-4 m-4 border-sky-700 " href={`/atualizar/${produtos.id}`} className='alterar'> Alterar</Link>
           <Link class=" text-white py-2 px-4 rounded-md text-center w-40 hover:bg-blue-600 border-solid border-4 m-4 border-sky-700 " href={`/produto/${produtos.id}`} className='vermias'>Ver mais</Link>
        </div>) )  }
        
        </div>
        <div class="ml-28"> <Link class="text-4xl ml-96 text-white py-2 px-4 rounded-md text-center w-40 hover:bg-purple-600 border-solid border-2 border-sky-700 " href="/cadastro" className='voltar'>CADASTRAR NOVO PRODUTO</Link></div>

    </main>
    
  )
}

/*apresentação de img 
  erro cadastro
  updete
  delete
  */
