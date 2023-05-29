from __future__ import annotations

from abc import ABC, abstractmethod
from datetime import datetime


class BaseModel(ABC):
    __slots__ = ()

    @abstractmethod
    def update_attribute(self, attr, value):
        setattr(self, attr, value)


class People(BaseModel, ABC):
    __slots__ = (
        'id', 'name', 'surname', 'origin', 'age', 'date_of_birth', 'stats', 'buffs', 'overall_rating',
        'chemistry_rating', 'traits',
        'weak_heroes', 'strong_heroes', 'weak_against', 'strong_against', 'role', 'current_team', 'previous_teams',
        'price',
        'salary', 'contract_length', 'contract_expires', 'total_played', 'total_won', 'total_lost', 'total_drawn',
        'total_kills_scored', 'total_assists_scored', 'total_deaths_scored', 'created_at', 'updated_at', 'history',
        'is_active', 'is_retired', 'is_onvacation', 'is_suspended', 'is_transfer_listed',
    )

    def __init__(self):
        self.id: int
        self.name: str
        self.surname: str
        self.origin: str
        self.age: int
        self.date_of_birth: datetime
        self.stats: dict
        self.buffs: dict
        self.overall_rating: int
        self.chemistry_rating: int
        self.traits: list
        self.weak_heroes: list
        self.strong_heroes: list
        self.weak_against: list
        self.strong_against: list
        self.role: str
        self.current_team: int
        self.previous_teams: list
        self.price: int
        self.salary: int
        self.contract_length: int
        self.contract_expires: datetime
        self.total_played: int
        self.total_won: int
        self.total_lost: int
        self.total_drawn: int
        self.total_kills_scored: int
        self.total_assists_scored: int
        self.total_deaths_scored: int
        self.created_at: datetime
        self.updated_at: datetime
        self.history: dict
        self.is_active: bool
        self.is_retired: bool
        self.is_onvacation: bool
        self.is_suspended: bool
        self.is_transfer_listed: bool
