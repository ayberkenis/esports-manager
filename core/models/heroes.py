from abstract import BaseModel
import json
from typing import Union
from datetime import datetime


class Hero(BaseModel):
    __slots__ = ('id', 'name', 'type', 'role', 'traits', 'created_at', 'updated_at')

    def __init__(self):
        self.id: int
        self.name: str
        self.type: str
        self.role: Union['Support', 'Anchor', 'Roamer']
        self.traits: json
        self.created_at: datetime
        self.updated_at: datetime