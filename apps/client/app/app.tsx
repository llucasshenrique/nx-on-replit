import { useEffect, useState } from 'react';

export function App() {
  const [data, setData] = useState<{ message: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api');
        if (!response.ok) {
          throw new Error('Erro ao buscar dados do servidor');
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div style={{ marginTop: '2rem', padding: '1rem' }}>
        <h2>Dados do Backend</h2>

        {loading && <p>Carregando...</p>}

        {error && <p style={{ color: 'red' }}>Erro: {error}</p>}

        {data && (
          <div
            style={{
              padding: '1rem',
              border: '1px solid #ccc',
              borderRadius: '8px',
              backgroundColor: '#f9f9f9',
            }}
          >
            <p>
              <strong>Mensagem do servidor:</strong> {data.message}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
