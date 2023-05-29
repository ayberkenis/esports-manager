from __future__ import annotations

from abstract import BaseModel
from datetime import datetime
from players import Player
from manager import Manager
from owner import Owner

import json


class Team(BaseModel):
    """
    This class represents a team in the game.
    This class is an abstract class and should not be instantiated.
    """
    __slots__ = ('id', 'name', 'abbreviation',
                 'origin', 'created_at', 'updated_at',
                 'players', 'manager', 'coach', 'owner',
                 'total_played', 'total_won', 'total_lost', 'total_drawn', 'total_kills_scored', 'total_assists_scored',
                 'total_deaths_scored', 'history')

    def __init__(self):
        self.id: int
        self.name: str
        self.abbreviation: str
        self.origin: str
        self.created_at: datetime
        self.updated_at: datetime
        self.players: list[Player]
        self.manager: Manager
        self.coach: int
        self.owner: Owner
        self.total_played: int
        self.total_won: int
        self.total_lost: int
        self.total_drawn: int
        self.total_kills_scored: int
        self.total_assists_scored: int
        self.total_deaths_scored: int
        self.history: json

