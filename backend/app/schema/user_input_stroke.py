
from typing import Annotated, Literal
from pydantic import BaseModel Field , computed_field , field_validator
from typingAnnotated,  Literal , Annotated




class UserInput(BaseModel):
    gender:Annotated[Literal['male' , 'femal'] , Field(...,description='gender of the patient')]
    age: Annotated[int , Field(... , gt=0 , lt=100 , description='age of the patient')]
    hypertension: Annotated[bool , Field(... , description='Hypertension binary feature')]
    heartDisease: Annotated[bool , Field(... , description='Heart disease binary feature')]
    everMarried:Annotated[bool , Field(... , description = 'Has the patient ever been married?')]
    workType: Annotated[Literal['Private' , 'Self-employed' , 'Govt_Job'] , Field(..., description='Work type of the patient')]
    Residence_type: Annotated[Literal['Urban' , 'Rural'] , Field (... , description='Residence type of the patient')]
    AvgGlucoseLevel: Annotated[int , Field(... , gt=55, lt=300, description='Average glucose level in blood')]
    weight:Annotated[float , Field(... , description='Weight of the patient')]
    SmokingStatus: Annotated[Literal['never smoked' , 'unknown' , 'formerly smoked'] , Field(... , description='Smoking status of the patient')]

