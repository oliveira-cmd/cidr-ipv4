import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [ipCidr, setIpCidr] = useState('');
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState(null);

  // Função para lidar com a mudança no input do IP
  const handleInputChange = (e) => {
    setIpCidr(e.target.value);
  };

  // Função para chamar a API
  const fetchData = async () => {
    try {
      const response = await axios.post('http://localhost:5555/network', { ip: ipCidr });
      setResultado(response.data);  // Armazena o resultado na variável de estado
      setError(null); // Limpa qualquer erro
    } catch (err) {
      setError('Erro ao consultar a API. Verifique o formato do IP/CIDR.');
      setResultado(null);  // Limpa resultados anteriores
    }
  };

  return (
    <div className="App flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-2xl font-semibold text-center text-blue-600 mb-4">Calculadora de IP e CIDR</h1>
        
        {/* Input de IP/CIDR */}
        <div className="mb-4">
          <label htmlFor="ipCidr" className="block text-md mb-2">Digite o IP com CIDR (Ex: 192.168.1.0/24):</label>
          <input
            type="text"
            id="ipCidr"
            value={ipCidr}
            onChange={handleInputChange}
            placeholder="Ex: 192.168.1.0/24"
            className="border-2 border-gray-300 p-2 rounded w-full text-sm"
          />
        </div>

        {/* Botão para buscar os dados */}
        <button 
          onClick={fetchData} 
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 w-full text-sm"
        >
          Calcular
        </button>

        {/* Exibição de erro */}
        {error && <div className="text-red-600 mt-2 text-sm">{error}</div>}

        {/* Exibição dos resultados alinhados à esquerda */}
        {resultado && (
          <div className="result mt-4 p-4 bg-gray-50 rounded shadow-sm text-left">
            <h2 className="text-lg font-medium text-gray-800 mb-2">Resultado</h2>
            <ul className="text-sm space-y-1">
              <li><strong>IP Original:</strong> {resultado.ipOriginal}</li>
              <li><strong>Intervalo de IPs:</strong> {resultado.ipInitRange} - {resultado.ipEndRange}</li>
              <li><strong>Gateway:</strong> {resultado.gateway}</li>
              <li><strong>Broadcast:</strong> {resultado.broadcast}</li>
              <li><strong>Classe:</strong> {resultado.classe}</li>
              <li><strong>IPs Usáveis:</strong> {resultado.qtdIpsUsaveis}</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
