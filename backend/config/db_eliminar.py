from datetime import datetime
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, DateTime

#https://www.youtube.com/watch?v=OTypc5mEllU

engine = create_engine("mysql+pymysql://root:WSXZ1048@localhost:3306/PROCESOS")

Base = declarative_base()

# class User(Base):
#     __tablename__ = 'users'
#     id = Column(Integer(), primary_key=True)
#     username = Column(String(50), nullable=False, unique=True)
#     email = Column(String(50), nullable=False, unique=True)
#     password = Column(String(225), nullable=False)
#     created_at = Column(DateTime(), default=datetime.now())

#     def __str__(self):
#         return self.username

class User(Base):
    __tablename__ = 'community'
    id = Column(Integer(), primary_key=True)
    username = Column(String(50), nullable=False, unique=True)
    organization=Column(String(50), nullable=True)
    email = Column(String(50), nullable=False, unique=True)
    subject = Column(String(50), nullable=False)
    message = Column(String(500), nullable=False)
    created_at = Column(DateTime(), default=datetime.now())

    def __str__(self):
        return self.username

Session = sessionmaker(engine)
session = Session()

if __name__ == "__main__":

    Base.metadata.drop_all(engine)
    Base.metadata.create_all(engine)
