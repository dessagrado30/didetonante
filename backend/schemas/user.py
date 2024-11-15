from typing import Optional
from pydantic import BaseModel

class Base_Model(BaseModel):
    id: Optional[int]
    name: str
    email: str
    password: str

class UserCount(BaseModel):
    total: int