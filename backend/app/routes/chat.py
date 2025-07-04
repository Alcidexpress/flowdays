from flask import Blueprint, request, jsonify
import os
import google.generativeai as genai

chat_bp = Blueprint("chat", __name__)

# Cargar API key desde el entorno
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "AIzaSyCFCwANcUSW0q3wtaHFMMIwoTmA2hrTfl8")
genai.configure(api_key=GEMINI_API_KEY)

# Inicializar el modelo Gemini-Pro
model = genai.GenerativeModel("gemini-1.5-flash")

@chat_bp.route("/send", methods=["POST"])
def send_message():
    data = request.get_json()
    user_input = data.get("message")

    if not user_input:
        return jsonify({"error": "Falta el mensaje"}), 400

    try:
        response = model.generate_content(user_input)
        return jsonify({"reply": response.text})

    except Exception as e:
        return jsonify({"error": "Error al procesar el mensaje", "details": str(e)}), 500
