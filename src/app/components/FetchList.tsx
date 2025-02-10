'use client';

import { useEffect, useState } from 'react';
import ListPage from '../components/ListPage';

interface DataItem {
  name: string;
  link: string
}

interface FetchListProps {
  url: string;
  title: string;
}

const FetchList: React.FC<FetchListProps> = ({ url, title }) => {
  const [items, setItems] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = sessionStorage.getItem('token');
        if (!token) {
          throw new Error('Token não encontrado.');
        }

        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Erro ao buscar os dados');
        }

        const data = await response.json();
        
        const sortedData = data.sort((a: DataItem, b: DataItem) =>
          a.name.localeCompare(b.name)
        );

        setItems(sortedData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return <ListPage title={title} items={items} />;
};

export default FetchList;
