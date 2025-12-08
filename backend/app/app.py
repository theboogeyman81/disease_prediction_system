from fastapi import FastAPI , Path , Query
from fastapi.middleware.cors import CORSMiddleware




app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins = ["http://localhost:5173" , "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

@app.get("/")
def home():
    return {"message" : "DISEASE PREDICTION SYSTEM"}


@app.get("/health")
def health_check():
    return{
        'satuts' : 'OK',
        'version' : MODEL_VERSION,
        'model_loaded' : model is not None
    }
