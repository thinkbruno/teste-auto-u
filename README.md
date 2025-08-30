# 📝 Classificador de Emails (Flask + Frontend) - AutoU

Este projeto é um **sistema simples de classificação de emails** desenvolvido com **Flask (Python)** no backend e **HTML/CSS/JS** no frontend.  

O objetivo é verificar se a lista de emails pode ser clasificada como produtiva e improdutiva.  

---

## 🚀 Tecnologias utilizadas
- **Python 3.x**
- **Flask** → microframework backend
- **Jinja2** → renderização de templates
- **HTML + CSS** → estrutura e estilo
- **JavaScript** → fade-in do resultado

---

## 📂 Estrutura de pastas

project/
│── app.py # Aplicação Flask (backend)
│── templates/
│ └── index.html # Template principal
│── static/
│ ├── style.css # Estilo da interface
│ └── script.js # Scripts (animação fade-in)
|── data/
| └── example_emails # lista de emails para usar de exemplo
│── README.md # Documentação


## ⚙️ Como rodar o projeto

1. **Clonar o repositório**
   ```bash
   git clone https://github.com/seu-usuario/classificador-chamados.git
   cd classificador-chamados

2. **Criar ambiente virtual**

python -m venv venv
source venv/bin/activate   # Linux/Mac
venv\Scripts\activate      # Windows

3. **Instalar dependências**
pip install flask

4. **Rodar o servidor Flask**

python app.py

5. **Acessar no navegador**

http://127.0.0.1:5000


## 🖼️ Como funciona o fluxo
O usuário abre a página inicial.
Digita a descrição do chamado no campo de texto.
Clica em Classificar.
O backend Flask processa a descrição e retorna a categoria correspondente.
O resultado aparece com fade-in.
O botão sempre é resetado para "Classificar" após o carregamento.

## 🎨 Detalhes visuais
Botão estilizado em azul, arredondado, com hover.
Resultado aparece suavemente com efeito fade-in.
Layout responsivo simples.

## 🔮 Melhorias futuras
Persistência dos dados em banco de dados (SQLite/Postgres).
Autenticação de usuários.

