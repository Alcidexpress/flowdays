import os

class Config:
    SECRET_KEY = os.getenv("SECRET_KEY", "dev-secret-key-change-in-production")
    JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY", "jwt-secret-key-change-in-production")
    SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URL", "mysql+mysqlconnector://root:Telco0032@localhost/tasks_db")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "AIzaSyCFCwANcUSW0q3wtaHFMMIwoTmA2hrTfl8")
