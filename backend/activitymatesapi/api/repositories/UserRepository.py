



from abc import abstractmethod
from uuid import UUID

from django.shortcuts import get_object_or_404
from api.models import User
from api.repositories.RepositoryInterface import Repository
from api.schemas.UserSchema import UserSchema, CreateUserSchema


class UserRepository(Repository):


    def get_all(self) -> list[UserSchema]:
        users = User.objects.all()
        return [UserSchema.from_model(user) for user in users]
    

    def get(self, id: UUID, resolve_data=False) -> UserSchema:
        user = get_object_or_404(User, id=id)
        if (resolve_data):
            raise NotImplementedError
        return UserSchema.from_model(user)
    

    def delete(self, id: UUID):
        user = get_object_or_404(User, id=id)
        user.delete()

    def create(self, new_user: CreateUserSchema):
        user = User.objects.create(
            full_name=new_user.full_name,
            phone_number = new_user.phone_number,
            email = new_user.email,
            country = new_user.country,
            city = new_user.city,
            date_of_birth = new_user.date_of_birth
        )
        return UserSchema.from_orm(user)



    def update(self, id: UUID, new_user: UserSchema):
        user = get_object_or_404(User, id=id)

        user.full_name = new_user.full_name
        user.phone_number = new_user.phone_number
        user.email = new_user.email
        user.country = new_user.country
        user.city = new_user.city
        user.date_of_birth = new_user.date_of_birth
        user.groups = new_user.groups
        user.events = new_user.events
        user.save()
        return UserSchema.from_orm(user)


