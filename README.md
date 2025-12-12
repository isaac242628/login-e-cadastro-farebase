# Nike App - React Native + Expo + Firebase

Aplicativo de autenticação com tema Nike desenvolvido em React Native usando Expo e Firebase Authentication.

## 🚀 Funcionalidades

- ✅ Login com email e senha
- ✅ Cadastro de novos usuários
- ✅ Autenticação persistente com AsyncStorage
- ✅ Navegação protegida (rotas autenticadas)
- ✅ Tema Nike (preto, branco e cinza)
- ✅ Tela de produtos
- ✅ Tela de perfil do usuário

## 🏃 Executando o App

\`\`\`bash
# Iniciar o Expo
npm start

# Executar no Android
npm run android

# Executar no iOS
npm run ios

# Executar na Web
npm run web
\`\`\`

Escaneie o QR Code com o app **Expo Go** no seu celular ou use um emulador.

## 📁 Estrutura de Pastas

\`\`\`
├── app/
│   ├── (auth)/
│   │   ├── login.js          # Tela de login
│   │   ├── register.js       # Tela de cadastro
│   │   └── _layout.js        # Layout das rotas de autenticação
│   ├── (tabs)/
│   │   ├── index.js          # Tela principal (produtos)
│   │   ├── profile.js        # Tela de perfil
│   │   └── _layout.js        # Layout com tabs
│   └── _layout.js            # Layout raiz (proteção de rotas)
├── config/
│   └── firebase.js           # Configuração do Firebase
├── public/                   # Imagens do app
└── package.json
\`\`\`

## 🎨 Design

O app segue o design system da Nike:
- **Cores**: Preto (#000), Branco (#FFF), Cinza (#999, #666, #333)
- **Tipografia**: Sans-serif bold para títulos
- **Estilo**: Minimalista, clean, focado no produto

## 🔐 Segurança

- Senhas devem ter no mínimo 6 caracteres
- Autenticação gerenciada pelo Firebase
- Tokens armazenados de forma segura com AsyncStorage

## 📱 Funcionalidades Implementadas

### Autenticação
- Login com validação de campos
- Cadastro com confirmação de senha
- Logout com confirmação
- Proteção de rotas (redirecionamento automático)

### Navegação
- Stack Navigator para autenticação
- Bottom Tabs para app principal
- Redirecionamento automático baseado no estado de autenticação

## 🛠️ Tecnologias

- React Native
- Expo
- Expo Router
- Firebase Authentication
- AsyncStorage
- Expo Vector Icons

## 🐛 Troubleshooting

### Erro: "Cannot find module 'firebase'"
\`\`\`bash
npm install firebase
\`\`\`

### Erro: "AsyncStorage is not defined"
\`\`\`bash
npm install @react-native-async-storage/async-storage
\`\`\`

## 📄 Licença

Este é um projeto de demonstração para fins educacionais.
