from pydantic import BaseModel , Field , computed_field , field_validator
from typing import Literal , Annotated


class UserInputD(BaseModel):
    pregnancies:Annotated[int , Field(..., gt=0 , lt=20 , description='Number of times pregnant')]
    glucose: Annotated[int , Field(... , gt=0 , lt=200 , description='Plasma glucose concentration a 2 hours in an oral glucose tolerance test')]
    bloodPressure : Annotated[int , Field(... , gt=0 , lt=150 , description='Diastolic blood pressure (mm Hg)')]
    skinThickness : Annotated[int , Field(... , gt = 0 , lt=100 , description='Triceps skin fold thickness (mm)')]
    insulin:Annotated[int , Field(... , gt=0 , lt=900 , description='2-Hour serum insulin (mu U/ml)')]
    weight:Annotated[int , Field(... , gt=20 , description='Weight of the patient')]
    diabetesPedigree:Annotated[int , Field(... , gt=0 , lt=3 , description='Diabetes pedigree function')]
    age:Annotated[int , Field(..., gt=20 , lt= 100 , description='Age of the patient')]