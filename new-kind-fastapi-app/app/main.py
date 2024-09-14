# import uvicorn
from dotenv import load_dotenv
from fastapi import FastAPI
import os


load_dotenv()

app = FastAPI()

AUTH_STATUS = os.getenv('AUTH_STATUS','No')

@app.get("/")
def read_root():
    return {"Hello": f"World : {22}", 'Authenticated':AUTH_STATUS}

# Start command :: uvicorn main:app --reload
