# Projeto de Calculadora de IP e CIDR

Este é um projeto completo que contém um **backend** em **Node.js** e um **frontend** em **React**. O backend calcula intervalos de IPs a partir de um endereço IP com CIDR e o frontend exibe esses resultados de forma interativa.

## Estrutura do Projeto

├── /server # Backend em Node.js
├── /front # Frontend em React 
└── .gitignore
└── package-lock.json
└── package.json
└── README.md # Este arquivo


## Tecnologias Usadas

- **Backend**: Node.js, Express, CORS
- **Frontend**: React, Tailwind CSS
- **API**: Calculadora de intervalos de IP, gateway, broadcast e validação de CIDR

---

## Instruções de Configuração

```bash
    cd server
    npm install
    cd ..
    cd front
    npm install
    cd ..
    npm run back # para iniciar o backend
    npm run front # para iniciar o front
```

## Funcionalidades

### Backend

A API do backend fornece diversas funcionalidades úteis para o cálculo e análise de redes e IPs. Abaixo estão as principais funcionalidades da API:

- **Cálculo do intervalo de IPs**:
    - Dado um IP com CIDR (como "192.168.1.0/24"), a API calcula o intervalo de IPs disponíveis para aquela rede.
    - Exemplo: Para o CIDR `/24`, o intervalo seria de `192.168.1.0` a `192.168.1.255`.

- **Cálculo do Gateway**:
    - A API retorna o endereço IP do gateway, que é o primeiro IP disponível após o endereço de rede.
    - Exemplo: Para `192.168.1.0/24`, o gateway será `192.168.1.1`.

- **Cálculo do Broadcast**:
    - A API retorna o endereço de broadcast, que é o último endereço de IP disponível na rede.
    - Exemplo: Para `192.168.1.0/24`, o endereço de broadcast será `192.168.1.255`.

- **Validação de IP e CIDR**:
    - A API valida o formato de IP e CIDR fornecido, garantindo que o IP esteja no formato correto e que o CIDR seja um número entre `0` e `32`.
    - Exemplo: A entrada `192.168.1.0/24` seria considerada válida, enquanto `192.168.1.0/35` seria inválida.

- **Exibição da Classe de IP**:
    - A API determina e exibe a classe do IP, que pode ser Classe A, B, C, etc.
    - Exemplo: O IP `192.168.1.0` pertence à Classe C.

- **Cálculo de IPs Usáveis**:
    - A API calcula e retorna a quantidade de IPs usáveis dentro do intervalo CIDR.
    - Exemplo: Para um CIDR `/24`, haverá 254 IPs usáveis (de `192.168.1.1` até `192.168.1.254`).

- **Cálculo de Broadcast e Gateway**:
    - Além de calcular o intervalo de IPs, a API também calcula o IP de broadcast e o gateway da rede.

---

### Frontend

O frontend React permite que os usuários insiram um IP com CIDR e vejam os resultados calculados pela API de forma clara e interativa. Algumas das funcionalidades do frontend incluem:

- **Entrada de IP com CIDR**:
    - O usuário pode inserir um endereço IP com CIDR (ex: `192.168.1.0/24`), que será enviado à API para análise.

- **Exibição dos Resultados**:
    - Após calcular o intervalo de IPs, a API retorna os seguintes dados, que são exibidos no frontend:
        - IP Original
        - Intervalo de IPs (IP inicial e final)
        - Gateway
        - Broadcast
        - Classe do IP
        - Quantidade de IPs Usáveis
    - Todos esses dados são apresentados de forma organizada em uma interface limpa e responsiva.

- **Interatividade e Estilo com Tailwind CSS**:
    - A interface do frontend é responsiva e moderna, utilizando o framework **Tailwind CSS** para garantir um design limpo e intuitivo.
    - O layout se adapta bem a diferentes tamanhos de tela, oferecendo uma experiência de usuário consistente em dispositivos móveis e desktops.
