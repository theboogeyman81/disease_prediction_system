
from typing import Annotated, Literal
from pydantic import BaseModel , Field , compute_field , field_validator




class UserInputH(BaseModel):
    age: Annotated[int , Field(...,gt=25 , lt=100, description='Age of the patient')]
    sex: Annotated[Literal['male' , 'female'] , Field(...,description='Sex of the patient')]
    cp: Annotated[Literal['0' , '1' , '2' , '3'] , Field(... , description='chest pain type')]
    trestbps:Annotated[int ,Field(..., gt=90 , lt=200 , description='resting blood pressure (in mm Hg on admission to the hospital)')]
    chol:Annotated[int , Field(... , gt= 100 , lt=600 , description='serum cholestoral in mg/dl' )]
    fbs: Annotated[bool , Field(..., description='(fasting blood sugar &gt; 120 mg/dl) (1 = true; 0 = false)')]
    restecg:Annotated[Literal['0' , '1' , '2'] , Field(..., description = 'resting electrocardiographic results')]
    thalach:Annotated[int , Field(...,gt=70 , lt= 210 , description='maximum heart rate achieved')]
    exang:Annotated[bool , Field(...,description='exercise induced angina (1 = yes; 0 = no)')]
    oldpeak:Annotated[int , Field(..., gt=0 , lt=7 , description='ST depression induced by exercise relative to rest')]
    slope:Annotated[Literal['0' , '1' , '2'] , Field(...,description='the slope of the peak exercise ST segment')]
    ca: Annotated[Literal['0' , '1' , '2' , '3' , '4'] , Field(...,description='number of major vessels (0-3) colored by flourosopy')]
    thal: Annotated[Literal['1' , '2' , '3'], Field(...,description='1 = normal; 2 = fixed defect; 3 = reversable defect')]


