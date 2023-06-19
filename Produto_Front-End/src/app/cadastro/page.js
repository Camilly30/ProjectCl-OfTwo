'use client'
import { useState } from 'react'
import styles from '../page.module.css'
import { useRouter } from 'next/navigation'

export default function Cadastro() {//declara estados
    const route = useRouter();
    const [titulo, setTitulo] = useState();
    const [data_cadastro, setData_cadastro] = useState();
    const [preco, setPreco] = useState();
    const [descricao,setDescricao] = useState();
    const [imagem,setImagem] = useState();

    const cadastrar = (e) => {//prevemir o padrao do evento
        e.preventDefault()
        
        const produto = {
           titulo:titulo,
            data_cadastro:data_cadastro ,
             preco:preco,
             descricao: descricao ,
             imagem:imagem  
        }
        const produtoJSON = JSON.stringify(produto);//informa que produto será cadastrado
        fetch("http://localhost:3001/produtos", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: produtoJSON
        }).then(function(){ route.push("/")}).catch(()=> console.log("Não foi possível cadastrar!"))//caso não cadastrar redoreciona para a pg inicial
    }

    return (//retorno ao formulario
        <div className={styles.main}>
            <form  onSubmit={cadastrar}>
                <label className='text-4xl text-white '>Cadastro de Produto</label><br/>
                <input
                    type="text"
                    placeholder='Titulo:'
                    nome="titulo"
                    onChange={e => setTitulo(e.target.value)}
                /><br/>
                <input
                    type="date"
                    placeholder='Data do Cadastro:'
                    nome="data_cadastro"
                    onChange={e => setData_cadastro(e.target.value)}
                /><br/>
                <input
                    type="number"
                    placeholder='Preço'
                    nome="preco"
                    min="100"
                    step=".01"
                    onChange={e => setPreco(e.target.value)}
                /><br/>
                <input
                    type="text"
                    placeholder='Descrição do Produto'
                    nome="descricao"
                    onChange={e => setDescricao(e.target.value)}
                /><br/>
                <input
                    type="text"
                    placeholder='URL da Imagem'
                    nome="imagem"
                    onChange={e => setImagem(e.target.value)}
                /><br/>
                <div className='flex'>
                <button class=" text-white m-2 py-2 px-4 rounded-md text-center w-40  hover:bg-blue-600 border-solid border-2 border-sky-700 "type='submit'>Cadastrar</button>
                <div class=" text-white m-2 py-2 px-4 rounded-md text-center w-40  hover:bg-blue-600 border-solid border-2 border-sky-700 ">
                    <a href='/'>Voltar</a>
                    </div>
                </div>
            </form>
        </div>
    );
}