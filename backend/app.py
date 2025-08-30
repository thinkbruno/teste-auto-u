from flask import Flask, render_template, request

app = Flask(__name__)

# Função simples de classificação
def classify_email(text):
    keywords_produtivo = ["suporte", "problema", "ajuda", "erro", "atualização", "sistema"]
    
    if any(word in text.lower() for word in keywords_produtivo):
        categoria = "Produtivo"
        resposta = "Obrigado pelo contato. Nossa equipe analisará sua solicitação e responderá em breve."
    else:
        categoria = "Improdutivo"
        resposta = "Agradecemos sua mensagem!"
    
    return categoria, resposta


@app.route("/", methods=["GET", "POST"])
def index():
    categoria, resposta, email_text = None, None, None
    
    if request.method == "POST":
        email_text = request.form["email_text"]
        categoria, resposta = classify_email(email_text)
    
    return render_template("index.html", categoria=categoria, resposta=resposta, email_text=email_text)


if __name__ == "__main__":
    app.run(debug=True)
