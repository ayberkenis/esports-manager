from abc import ABC
from datetime import datetime
from abstract import People


class Manager(People, ABC):
    __slots__ = ()

    def __init__(self):
        super().__init__()
