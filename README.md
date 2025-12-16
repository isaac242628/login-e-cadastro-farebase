# Nike App - React Native + Expo

Aplicativo Nike desenvolvido com React Native, Expo Router, e Firebase Authentication, consumindo a API de produtos Nike.

## Funcionalidades

- Autenticação com Firebase (Login e Registro)
- Listagem de produtos Nike da API
- Visualização detalhada de produtos
- Navegação por tabs (Produtos e Perfil)
- Design moderno inspirado na Nike

## Tecnologias

- **React Native** - Framework para desenvolvimento mobile
- **Expo** (~52.0.0) - Plataforma para desenvolvimento React Native
- **Expo Router** (~4.0.0) - Navegação baseada em sistema de arquivos
- **Firebase** (^10.13.0) - Autenticação de usuários
- **AsyncStorage** - Persistência de dados local

## Pré-requisitos

- Node.js (v18 ou superior)
- npm ou yarn
- Expo CLI (instalado globalmente)
- Expo Go app no seu dispositivo móvel (iOS ou Android)

## Instalação

1. Clone o repositório:
```bash
git clone <seu-repositorio>
cd nike-app-expo
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Configure o Firebase:
   - Crie um projeto no [Firebase Console](https://console.firebase.google.com/)
   - Ative o Authentication com Email/Password
   - Copie as credenciais para `config/firebase.js`

## Executando o Projeto

### Desenvolvimento

```bash
# Iniciar o servidor Expo
npm start

# Executar no Android
npm run android

# Executar no iOS
npm run ios
```

### Testando no Dispositivo

1. Instale o **Expo Go** no seu dispositivo
2. Execute `npm start`
3. Escaneie o QR Code com a câmera (iOS) ou Expo Go (Android)

## Estrutura do Projeto

```
nike-app-expo/
├── app/
│   ├── (auth)/              # Grupo de autenticação
│   │   ├── _layout.js       # Layout do grupo de auth
│   │   ├── login.js         # Tela de login
│   │   └── register.js      # Tela de registro
│   ├── (tabs)/              # Grupo de tabs
│   │   ├── _layout.js       # Layout dos tabs
│   │   ├── index.js         # Tela de produtos (home)
│   │   ├── profile.js       # Tela de perfil
│   │   └── product/[id].js  # Tela de detalhes do produto
│   ├── _layout.js           # Layout raiz
│   └── index.js             # Ponto de entrada
├── config/
│   ├── api.js               # Configuração da API
│   └── firebase.js          # Configuração do Firebase
├── services/
│   └── api.js               # Serviços de API
├── hooks/
│   └── useProducts.js       # Hook customizado para produtos
├── app.json                 # Configuração do Expo
├── babel.config.js          # Configuração do Babel
└── package.json             # Dependências do projeto
```

## API

A aplicação consome a API de produtos Nike:

**Endpoint:** `https://apiprodutosnike.webapptech.site/api/produtos`

**Resposta:**
```json
[
  {
    "id": 1,
    "nome": "Nike Air Max",
    "descricao": "Tênis esportivo",
    "preco": "499.90",
    "imagem": "/images/produto.jpg"
  }
]
```

## Funcionalidades Principais

### Autenticação
- Login com email e senha
- Registro de novos usuários
- Persistência de sessão
- Logout

### Produtos
- Listagem em grid 2 colunas
- Carregamento assíncrono
- Imagens otimizadas
- Navegação para detalhes

### Perfil
- Informações do usuário
- Menu de opções
- Logout seguro

## Customização

### Cores e Estilos
As cores principais do app seguem a identidade Nike:
- Fundo: `#000` (Preto)
- Texto: `#fff` (Branco)
- Cards: `#1a1a1a` (Cinza escuro)
- Bordas: `#333` (Cinza)

### Firebase
Para usar seu próprio Firebase, edite `config/firebase.js` com suas credenciais.

## Troubleshooting

### Erro ao executar no iOS
```bash
cd ios && pod install && cd ..
```

### Erro de cache
```bash
npx expo start -c
```

### Erro de dependências
```bash
rm -rf node_modules
npm install
```

## Licença

MIT

## Contato

Para dúvidas ou sugestões, abra uma issue no repositório.
