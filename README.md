# 📘 **Pokédex App – React Native + TypeScript + React Native Paper**

Este é um aplicativo simples desenvolvido com **React Native + Expo**, que consome a API pública **PokéAPI**, exibe uma lista de pokémons e permite navegar para uma tela de detalhes.
O projeto utiliza:

* **TypeScript**
* **React Native Paper (UI)**
* **React Navigation (Stack Navigation)**
* **Expo**
* **Fetch API para requisição HTTP**

---

## 📱 **Demonstração**

Lista de recursos implementados:

✔ Listagem dos Pokémons
✔ Imagens carregadas da PokéAPI
✔ Navegação entre telas (Home → Details)
✔ UI moderna usando React Native Paper
✔ Componentes organizados em `/screens`

---

## 🚀 **Tecnologias utilizadas**

* **React Native**
* **TypeScript**
* **Expo**
* **React Native Paper**
* **React Navigation**
* **PokéAPI**
* **React Native Screens & SafeArea**

---

## 📦 **Instalação**

### 1️⃣ Clone o repositório:

```sh
https://github.com/EdmaelBarreto/Desafio-II---API-React-native-Paper-navega-o.git
```

```sh
cd seu-repositorio
```

---

### 2️⃣ Instale as dependências:

```sh
npm install
```

Ou, se usar yarn:

```sh
yarn install
```

---

### 3️⃣ Instale dependências específicas do projeto:

```sh
expo install react-native-paper react-native-safe-area-context
npm install @react-navigation/native @react-navigation/native-stack
expo install react-native-screens react-native-safe-area-context
```

---

### 4️⃣ Execute o projeto:

```sh
npm start
```

Ou:

```sh
expo start
```

Abra no **Expo Go** via QR Code.

---

## 📂 **Estrutura do Projeto**

```
/App.tsx
/screens
   ├── HomeScreen.tsx
   └── DetailsScreen.tsx
```

---

## 📘 **Descrição das Telas**

### 🏠 **HomeScreen**

* Busca dados na PokéAPI
* Exibe lista com Cards do React Native Paper
* Mostra imagem + nome do Pokémon
* Ao clicar, navega para a tela de detalhes

### 🔍 **DetailsScreen**

* Recebe parâmetros da navegação
* Exibe imagem maior e nome do Pokémon
* Layout limpo usando Card do Paper

---

## 🌐 **API Utilizada**

📌 **PokéAPI**
[https://pokeapi.co/api/v2/pokemon?limit=20](https://pokeapi.co/api/v2/pokemon?limit=20)

É uma API pública gratuita com milhares de informações sobre Pokémons.

---

## 📄 **Código principal**

O projeto inclui:

✔ `App.tsx` configurando navegação
✔ `HomeScreen.tsx` com consumo da API
✔ `DetailsScreen.tsx` para detalhes

---

## 🧪 **Como alterar o limite de pokémons**

No arquivo `HomeScreen.tsx`, basta trocar:

```ts
https://pokeapi.co/api/v2/pokemon?limit=20
```

Para:

```ts
https://pokeapi.co/api/v2/pokemon?limit=150
```

---

## 🤝 **Contribuindo**

Sinta-se livre para abrir **issues**, enviar **pull requests** ou sugerir melhorias.

---

## 📝 **Licença**

Este projeto está sob a licença MIT.

---
