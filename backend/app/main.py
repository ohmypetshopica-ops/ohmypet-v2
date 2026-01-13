from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import engine, Base
from . import auth

# Crear las tablas automáticamente
Base.metadata.create_all(bind=engine)

# --- ESTA LÍNEA ES LA QUE FALTABA O ESTABA DAÑADA ---
app = FastAPI(title="OhMyPet API")

# Configuración CORS (CRÍTICO para que el Frontend funcione)
origins = [
    "http://localhost",
    "http://localhost:80",
    "http://138.68.25.226",      # Tu IP de DigitalOcean
    "http://138.68.25.226:80",
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Incluir las rutas de autenticación
app.include_router(auth.router)

@app.get("/")
def read_root():
    return {"message": "OhMyPet API v2 is running!"}
