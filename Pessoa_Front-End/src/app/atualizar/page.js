'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'

export default function AtualizarProduto() {
  const router = useRouter();
  const { id } = router.query;
  const [produto, setProduto] = useState(null);

  // Simulação de busca do produto no banco de dados
  useEffect(() => {
    // Substitua esta simulação com a lógica para buscar o produto pelo código no banco de dados
    const buscarProduto = async () => {
      // Simulação de requisição assíncrona para buscar o produto
      const response = await fetch(`http://localhost:3000/produtos/${id}`);
      const data = await response.json();
      setProduto(data);
    };

    if (id) {
      buscarProduto();
    }
  }, [id]);

  // Função para atualizar o produto no banco de dados
  const atualizarProduto = async () => {
    // Substitua esta simulação com a lógica para atualizar o produto no banco de dados
    const response = await fetch(`http://localhost:3001/produtos/${id}`, {
      method: 'PUT',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(produto),
    });

    if (response.ok) {
      alert('Produto atualizado com sucesso!');
      // Redirecionar para a página de detalhes do produto após a atualização
      router.push(`/produtos/${id}`);
    } else {
      alert('Erro ao atualizar o produto.');
    }
  };


  return (
    <div>
      <h1>Atualizar Produto</h1>
      <p>ID do Produto: {id}</p>

      {/* Formulário para atualizar os dados do produto */}
      <form>
        <input
          type="text"
          value={produto.titulo}
          onChange={(e) => setProduto({ ...produto, titulo: e.target.value })}
        />
        <input
          type="text"
          value={produto.descricao}
          onChange={(e) => setProduto({ ...produto, descricao: e.target.value })}
        />
        <input
          type="text"
          value={produto.preco}
          onChange={(e) => setProduto({ ...produto, preco: e.target.value })}
        />
    

        <button type="button" onClick={atualizarProduto}>
          Atualizar
        </button>
      </form>
    </div>
  );
}