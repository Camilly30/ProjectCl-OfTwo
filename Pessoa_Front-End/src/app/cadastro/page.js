'use client'
import { useState } from 'react'
import styles from '../page.module.css'
import { useRouter } from 'next/navigation'

export default function Cadastro() {
    const route = useRouter();
    const [titulo, setTitulo] = useState();
    const [data_cadastro, setData_cadastro] = useState();
    const [preco, setPreco] = useState();
    const [descricao,setDescricao] = useState();
    const [imagem,setImagem] = useState();

    const cadastrar = (e) => {
        e.preventDefault()
        
        const produto = {
           titulo: titulo,
            data_cadastro:data_cadastro ,
             preco:preco,
             descricao: descricao ,
             imagem:imagem  
        }
        const pessoaJson = JSON.stringify(produto);
        fetch("http://localhost:3003/produto", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: pessoaJson
        }).then(function(){ route.push("/")}).catch(()=> console.log("Não foi possível cadastrar!"))
    }

    return (
        <div className={styles.main}>
            <form  onSubmit={cadastrar}>
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
                <button type='submit'>Cadastrar</button>
                <div>
                    <a href='/'>Voltar</a>
                </div>
            </form>
        </div>
    );
}