from .abstract import BaseModel
from __future__ import annotations


class Player(BaseModel):
    """
    This class represents a player in the game.
    This class is an abstract class and should not be instantiated.
    """
    __slots__ = ('id', 'name', 'surname', 'origin', 'age', 'stats', 'buffs',
                 'overall_rating',  'chemistry_rating', 'position', 'traits',
                 'weak_heroes', 'strong_heroes', 'weak_against', 'strong_against',
                 'role', 'current_team', 'previous_teams', 'price', 'salary', 'contract_length', 'contract_expires',
                 'total_played', 'total_won', 'total_lost', 'total_drawn', 'total_kills_scored', 'total_assists_scored',
                 'total_deaths_scored')


    def create(self):
        pass

    def create_player(self):
        pass
