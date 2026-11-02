# Pata Amiga — Site Institucional de ONG

## 🐾 Sobre a ONG

A **Pata Amiga** é uma ONG fictícia criada com o propósito de combater a fome e o abandono de cães e gatos. O site institucional tem como objetivo principal conscientizar a comunidade, apresentar os projetos de apoio e incentivar práticas de acolhimento, como pontos de alimentação, cuidados veterinários preventivos e adoção responsável.

## 🚀 Funcionalidades Principais

1. **Formulário de Contato Validado (`js/formulario.js`)**
   - Utiliza eventos de submissão (`submit` e `preventDefault()`).
   - Valida campos com `checkValidity()`, tratamento de espaços (`trim()`), verificação de tamanho mínimo para nome e mensagem, além de formato de e-mail.
   - Apresenta feedback visual dinâmico diretamente na página (mensagens de erro ou confirmação simulada).

2. **Painel Interativo de Resultados (`js/script.js`)**
   - Botão dinâmico na página "Sobre" que alterna a visibilidade de estatísticas e impacto da ONG utilizando manipulação de DOM (`style.display`).

3. **Design Responsivo e Acessível (`css/estilos.css`)**
   - Layout totalmente adaptado para dispositivos móveis através de `@media queries` (`max-width: 768px`).
   - Estilização moderna com Flexbox, animações suaves de carregamento (`@keyframes`) e foco na legibilidade.

## 📄 Estrutura das Páginas

| Página | Descrição |
| :--- | :--- |
| `index.html` | **Início:** Apresenta a causa da ONG, os pilares de atuação (Alimentamos, Cuidamos, Encontramos lares), seção de conscientização, dicas básicas de cuidados e chamada para ação. |
| `sobre.html` | **Sobre:** Conta a história da iniciativa, missão, objetivos, público atendido e o painel interativo de resultados. |
| `projetos.html` | **Projetos:** Detalha as três frentes de atuação da ONG (*Pote Cheio*, *Lar Temporário* e *Patinha Saudável*). |
| `contato.html` | **Contato:** Seção informativa com orientações de participação e o formulário de contato acadêmico simulado. |

## 🛠️ Tecnologias Utilizadas

O projeto foi desenvolvido puramente com tecnologias web fundamentais, sem o uso de frameworks externos:
- **HTML5:** Estruturação semântica do conteúdo (`header`, `nav`, `main`, `section`, `footer`).
- **CSS3:** Estilização visual, layouts flexíveis (Flexbox), variáveis visuais e responsividade.
- **JavaScript (ES6):** Manipulação do DOM, tratamento de eventos e validações de formulário.

## 📁 Estrutura de Pastas

```text
pata-amiga/
├── index.html
├── sobre.html
├── projetos.html
├── contato.html
├── README.md
├── css/
│   └── estilos.css
├── js/
│   ├── script.js
│   └── formulario.js
└── img/
    ├── abandonado.jpg
    ├── adocao.jpg
    ├── comedouros.jpg
    ├── cuidados.jpg
    ├── lar.jpg
    ├── larTemporario.jpg
    ├── logo.jpg
    ├── petLogo.jpg
    ├── racao.jpg
    └── vacinacao.jpg
```

## ▶️ Como Executar o Projeto

Como o site é estático, você não precisa instalar nenhum servidor ou dependência complexa:
1. Clone ou faça o download deste repositório em sua máquina.
2. Certifique-se de que a estrutura de pastas e imagens está mantida.
3. Dê dois cliques no arquivo `index.html` para abri-lo diretamente no seu navegador de preferência.

## 👥 Integrantes do Grupo

- **Victor Sousa dos Anjos**
- *(Adicionar demais integrantes aqui)*

## 📌 Notas Acadêmicas

Este projeto é um protótipo acadêmico desenvolvido estritamente para fins educacionais no âmbito do **Projeto Integrador da UNICID**. As doações, formulários e números exibidos são inteiramente simulados.