


from abc import ABC, abstractmethod


class Repository(ABC):

    @abstractmethod
    def get_all(self, id: str):
        raise NotImplementedError
    

    
