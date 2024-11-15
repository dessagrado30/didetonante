from datetime import datetime
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, DateTime

from backend.config.db import engine

Base = declarative_base()

class Usr(Base):
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