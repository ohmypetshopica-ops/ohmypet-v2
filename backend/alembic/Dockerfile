# Usamos una versión ligera de Python
FROM python:3.10-slim

# Evita que Python genere archivos .pyc y guarda logs en tiempo real
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Carpeta de trabajo dentro del contenedor
WORKDIR /app

# Instalamos dependencias del sistema necesarias
RUN apt-get update \
    && apt-get install -y --no-install-recommends gcc libpq-dev \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Copiamos los requisitos primero (para aprovechar caché de Docker)
COPY requirements.txt .

# Instalamos las librerías de Python
RUN pip install --no-cache-dir --upgrade -r requirements.txt

# Copiamos el resto del código
COPY . .

# Comando para iniciar el servidor (Gunicorn + Uvicorn)
# Se ejecutará en el puerto 8000
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]