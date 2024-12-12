# MAFE-PARDO-PRUEBA-TECNICA

## Descripción

Este repositorio contiene la prueba técnica presentada para la convocatoria de **Desarrollador/a Junior**. El proyecto consiste en el desarrollo de una aplicación **full-stack** denominada **Botanic Store**, que incluye tanto el backend como el frontend.

- **Base de datos:** La base de datos se encuentra en **SQL Server**.
- **Backend:** API REST desarrollada con **Django Rest Framework** usando arquitectura MVC.
- **Frontend:** Aplicación web desarrollada con **React** y **Vite**.
- **Estado de gestión:** Se utiliza **Redux** para la gestión del estado en el frontend.

La aplicación permite gestionar productos  y visualizar vendedores y ventas, tambien proporciona una interfaz de usuario interactiva para realizar diferentes acciones sobre los datos interactuiando con el API Rest y la base de datos.

## Requisitos

### Backend

- Python 3.x
- Django 3.x o superior
- Django Rest Framework
- Base de datos configurada (SQLite, PostgreSQL, etc.)

### Frontend

- Node.js 14.x o superior
- React 18.x
- Vite 4.x
- Redux 4.x

## Instalación

### Backend

1. Clona el repositorio en tu máquina local:
   ```bash
   git clone https://github.com/tu_usuario/MAFE-PARDO-PRUEBA-TECNICA.git
   cd MAFE-PARDO-PRUEBA-TECNICA/botanicStoreApi

   - python -m venv venv
   - pip install -r requirements.txt 

2. Configuracion de la base de datos ejemplo:
   ```bash
   DATABASES = {
    'default': {
        'ENGINE': 'mssql',
        'NAME': 'botanic_db',
        'USER': 'user',
        'PASSWORD':'password',
        'PORT': '',
        'HOST': 'host',
        'OPTIONS': {
            'driver': 'ODBC Driver 17 for SQL Server'
        }
    }
}
3. Has migraciones y corre el proyecto 
    py .\manage.py migrate
    py .\manage.py runserver

### Frontend
1. Navega hasta la app
    ```bash
    cd MAFE-PARDO-PRUEBA-TECNICA/botanicStore

2. Ejecuta los siguiente comandos
   ```bash
    npm i 
    npm run dev 

y listo !


