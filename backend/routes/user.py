from fastapi import APIRouter, Form
from cryptography.fernet import Fernet
from starlette.status import HTTP_204_NO_CONTENT
from fastapi.responses import RedirectResponse
from sqlalchemy.ext.declarative import declarative_base
from typing import Annotated


from backend.models.user import Usr, session
# from backend.schemas.user import Base_Model

key = Fernet.generate_key()
f = Fernet(key)
user = APIRouter()
Base = declarative_base()


@user.post("/users/add")
def create_user(username: Annotated[str, Form()], organization: Annotated[str, Form()], email: Annotated[str, Form()], subject: Annotated[str, Form()], message: Annotated[str, Form()]):
    
    user = Usr(
        username=username, 
        organization=organization,
        email=email,
        subject=subject,
        message=message
        # password=f.encrypt(password.encode("utf-8"))
    )
    session.add(user)
    session.commit()
    return RedirectResponse("/", status_code=303)

@user.get(
    "/users",
    tags=["users"],
    description="Get a list of all users",
)
def get_general():
    db = session.query(Usr).all()
    return db

@user.get(
    "/users/{id}",
    tags=["users"],
    description="Get a single user by Id",
)
def get_user(id: str):
    db = session.query(Usr).filter(
        Usr.id == id
    ).first()
    return db

# @user.put(
#     "/users/{id}", 
#     tags=["users"],  
#     description="Update a User by Id"
# )
# def actualice_user(user: Base_Model, id: int):
#     session.query(Usr).filter(
#         Usr.id == id
#     ).update(
#         {
#             Usr.username:user.name, 
#             Usr.email:user.email, 
#             Usr.password:f.encrypt(user.password.encode("utf-8"))
#         }
#     )
#     session.commit()


@user.delete("/{id}", 
    tags=["users"], 
    status_code=HTTP_204_NO_CONTENT
)
def delete_user(id: int):
    db = session.query(Usr).filter(
        Usr.id == id
    ).delete()
    session.commit()
    return db

# Base.metadata.drop_all(engine)
# Base.metadata.create_all(engine)

