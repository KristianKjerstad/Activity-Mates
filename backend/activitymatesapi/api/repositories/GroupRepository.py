



from uuid import UUID

from django.shortcuts import get_object_or_404
from api.models import Group
from api.repositories.RepositoryInterface import Repository
from api.schemas.GroupSchema import CreateGroupSchema, GroupSchema


class GroupRepository(Repository):

    def get_all(self) -> list[GroupSchema]:
        groups = Group.objects.all().prefetch_related("category")
        return [GroupSchema.from_orm(group) for group in groups]
    

    def get(self, id: UUID) -> GroupSchema:
        group = get_object_or_404(Group, id=id)
        return GroupSchema.from_orm(group)
    

    def delete(self, id: UUID):
        group = get_object_or_404(Group, id=id)
        group.delete()

    def create(self, new_group: CreateGroupSchema) -> GroupSchema:
        group = Group.objects.create(
            name = new_group.name,
            age_interval = new_group.age_interval,
            country = new_group.country,
            city = new_group.city,
            category = new_group.category

        )
        return GroupSchema.from_orm(group)
    

    def update(self, id: UUID, new_group: GroupSchema) -> GroupSchema:
        group = get_object_or_404(Group, id=id)

        group.name = new_group.name
        group.age_interval = new_group.age_interval,
        group.country = new_group.country,
        group.city = new_group.city,
        group.category = new_group.category
        group.save()
        return GroupSchema.from_orm(group)
        