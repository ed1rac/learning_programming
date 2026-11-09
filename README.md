# 👨‍💻 Learning Programming

<div align="center">
  <img src="https://media.giphy.com/media/qgQUggZd3pbYQCyhgP/giphy.gif" width="150" alt="Coding GIF">
  <br>
  <strong>Repositório central para o aprendizado e ensino de múltiplas linguagens de programação!</strong>
</div>

<div align="center">
  <img src="https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white" alt="C">
  <img src="https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white" alt="C++">
  <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java">
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker">
</div>

---

## 🌟 Sobre o Projeto

O repositório **Learning Programming** é um ambiente rico e versátil criado pelo **Professor Ed** para consolidar o aprendizado prático em diversas linguagens. Ele funciona como uma "caixa de ferramentas" universal e um *template* base para as disciplinas de Programação do Centro Universitário Unipê (João Pessoa - Paraíba).

A estrutura deste projeto é fortemente sustentada por configurações de ambiente modernas (como DockerContainers/Codespaces), permitindo que você experimente, compile e execute códigos de dezenas de ecossistemas sem causar conflito de instalações no seu próprio computador.

### 📚 Ecossistema Suportado

Neste repositório, você encontrará suporte nativo, arquivos e estruturas para trabalhar fluidamente com:
- **C e C++**
- **Java**
- **Python**
- **JavaScript (Node.js & P5.js)**
- **HTML e CSS**

---

## 💻 Instruções de Uso no Terminal

Abaixo seguem as instruções de como utilizar o terminal para compilar as suas criações:

### Para compilar Códigos em C/C++:

**1. Usando o Make:**
A forma mais ágil é utilizando o utilitário `make`:
```bash
make <nome_do_arquivo>
```

**2. Usando diretamente o GCC gcc:**
Como alternativa, você pode invocar o compilador nativo:
```bash
gcc <nome_do_arquivo>.c -o <nome_do_arquivo>
```

> ⚠️ *Dica Matemática importante:* Se o seu código utilizar as funções da documentação de `<math.h>` (como sqrt ou pow), lembre-se de obrigatoriamente adicionar a flag de compilação `-lm` no final do processo:
> `gcc <nome_do_arquivo>.c -o <nome_do_arquivo> -lm`

### Para Executar o Programa (C/C++):
Após compilar sucesso e o arquivo binário `.exe`/`elf` for finalizado pelo compilador, execute com o barra-ponto a partir do seu diretório atual:
```bash
./<nome_do_arquivo>
```

**Comandos do terminal**

| Comando           | Descrição                      |
| ----------------- | ------------------------------ |
| ls                | Lista os arquivos e diretórios |
| cd <diretório>    | Muda o diretório atual         |
| cd ..             | Volta um diretório             |
| mkdir <diretório> | Cria um diretório              |
| code <arquivo>    | Abre o arquivo no VS Code      |
| rm <arquivo>      | Remove o arquivo               |
| clear             | Limpa a tela                   |


*Obs*: se a biblioteca `math.h` for usada, adicione o parâmetro `-lm` no final do comando `gcc`

**Teclas de atalho**

| Ação                     | Tecla        |
| ------------------------ | ------------ |
| Compilar e executar      | Ctrl-F5      |
| Compilar sem executar    | Ctrl-Shift-B |
| Depurar                  | F5           |
| Indentar automaticamente | Ctrl-Shift-I |


## 👨‍💻 Autor

👋 Feito por **Prof. Ed (Edkallenn Lima)**
- ⭐️ Página Pessoal e Publicações: [edkallenn.github.io](https://edkallenn.github.io/)
- 🌐 Redes Sociais: [LinkedIn](https://www.linkedin.com/in/edkallenn/) | [GitHub](https://github.com/ed1rac)

---

## ☕ Apoie o Projeto (Me Pague um Café / Buy Me a Coffee)

Este projeto é desenvolvido com dedicação e carinho. Se este projeto foi útil para os seus estudos, trabalho ou produtividade diária e você quiser apoiar o desenvolvimento contínuo:

- ☕ **Buy Me a Coffee (Internacional / Cartão / QR Code)**:
  - 👉 **[https://buymeacoffee.com/edkallenn](https://buymeacoffee.com/edkallenn)**
  - [![](https://img.shields.io/badge/☕_Buy_Me_a_Coffee-Apoiar_Projeto-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/edkallenn)
  - Escaneie o QR Code abaixo com a câmera do celular para abrir diretamente:

<div align="center">
  <a href="https://buymeacoffee.com/edkallenn" target="_blank">
    <img src="./bmc_qr.png" alt="Buy Me a Coffee QR Code — Edkallenn (@ed1rac)" width="220" />
  </a>
</div>

- 🇧🇷 **PIX (Brasil — Qualquer valor, taxa zero)**:
  - **Chave PIX (E-mail)**: `edkevan@gmail.com`
  - **Titular**: Edkallenn

Muito obrigado pelo apoio! 🚀

---
