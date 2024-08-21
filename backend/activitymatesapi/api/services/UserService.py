


from typing import List
from uuid import UUID
from api.repositories.UserRepository import UserRepository

from api.schemas.UserSchema import CreateUserSchema, UserSchema


class UserService():

    user_repository = UserRepository()

    def get_all_users(self) -> List[UserSchema]:
        all_users = self.user_repository.get_all()
        return all_users


    def get_user(self, id: UUID) -> UserSchema:
        user = self.user_repository.get(id=id)
        return user
    
    def delete_user(self, id: UUID):
        user = self.user_repository.delete(id=id)

    def create_user(self, new_user: CreateUserSchema) -> UserSchema:
        user = self.user_repository.create(new_user=new_user)
        return user
    
    def update_user(self, id: UUID, new_user: UserSchema):
        new_user = self.user_repository.update(id=id, new_user=new_user)
        return new_user