from backend.app.perdictors.perdict_heart_disease import predict_output_heart
from backend.app.perdictors.perdict_stroke import predict_output_storke
from backend.app.perdictors.predict_diabetes import predict_output_diabetes
from backend.app.schema.user_input_stroke import UserInputS
from fastapi import FastAPI , Path , Query
from fastapi.middleware.cors import CORSMiddleware
from starlette.responses import JSONResponse
from backend.app.schema.user_input_disbetes import UserInputD
from backend.app.schema.user_input_heart import UserInputH




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



@app.post('/predict_diabetes')
def predict_diabetes(data: UserInputD):
    user_input ={
        'pregnancies':data.pregnancies,
        'glucose':data.glucose,
        'bloodPressure':data.bloodPressure,
        'skinThickness':data.skinThickness,
        'insulin':data.insulin,
        'weight': data.weight,
        'diabetesPedigree': data.diabetesPedigree,
        'age': data.age
    }

    try: 
        prediction = predict_output_diabetes(user_input)

        return prediction

    except Exception as e:

        return JSONResponse(status_code=500,content={'error':str(e)})


@app.post('/predict_heart')
def predict_heart(data:UserInputH):
    user_input= {
        'age':data.age,
        'sex':data.sex,
        'cp':data.cp,
        'trestbps':data.tretbps,
        'chol':data.chol,
        'fbs':data.fbs,
        'restecg':data.restecg,
        'thalach':data.thalach,
        'exang' : data.exang,
        'oldpeak': data.oldpeak,
        'slope':data.slope,
        'ca' : data.ca,
        'thal':data.thal
    }

    try: 
        prediction = predict_output_heart(user_input)

        return prediction

    except Exception as e:

        return JSONResponse(status_code=500,content={'error':str(e)})


@app.post('/predict_storke')
def perdict_storke(data:UserInputS):
    user_input={
        'gender':data.gender,
        'age':data.age,
        'hypertension':data.hypertension,
        'heartDisease':data.heartDisease,
        'everMarried':data.everMarried,
        'workType':data.workType,
        'Residence_type':data.Residence_type,
        'AvgGlusoselLevel':data.AvgGlucoseLevel,
        'weight':data.weight,
        'SmokingStatus':data.SmokingStatus
    }


    try:
        prediction = predict_output_storke(user_input)

        return prediction

    except Exception as e:

        return JSONResponse(status_code=500, content={'error': str(e)})




