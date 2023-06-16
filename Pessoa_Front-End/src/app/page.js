"use client"
import Link from 'next/link';


export default async function Home() {

  const req = await fetch("http://localhost:3001/produtos", {
    cache: "no-cache"
  });
  const produtos = await req.json();

  return (
    
    <main className='grid grid-cols-2 gap-10 m-7 content-evenly justify-evenly'>
      
        {produtos.map(produtos => (
        <div key={produtos.id}>
            <p>{produtos.titulo }</p>
            <p>{produtos.data_cadastro}</p>
            <p>{produtos.preco}</p>
            <p>{produtos.descricao}</p>
            <p><img class='h-auto w-60 rounded-lg border-4 border-sky-700 ' src={produtos.imagem}></img></p>
          <Link class=" text-white py-2 m-5 px-4 rounded-md text-center w-40 hover:bg-blue-600 border-solid border-4 border-sky-700 " href={`/produto/${produtos.id}`}>ver mais</Link>
          
        </div>) )  }

       
        <div class="botao"> <Link class=" text-white py-2 px-4 rounded-md text-center w-40 hover:bg-blue-600 border-solid border-2 border-sky-700 " href="/cadastro" className='voltar'> CADASTRAR NOVO PRODUTO </Link></div>
    </main>
  )
}

/*apresentação de img 
  erro cadastro
  updete
  delete
  */
