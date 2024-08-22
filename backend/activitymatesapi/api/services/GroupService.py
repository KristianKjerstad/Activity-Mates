

from uuid import UUID
from api.repositories.GroupRepository import GroupRepository
from api.schemas.GroupSchema import CreateGroupSchema, GroupSchema


class GroupService():


    group_repository = GroupRepository()


    def get_all_groups(self):
        all_groups = self.group_repository.get_all()
        return all_groups
    
    def get_group(self, id: UUID) -> GroupSchema:
        group = self.group_repository.get(id=id)
        return group
    
    def delete_group(self, id: UUID):
        group = self.group_repository.delete(id=id)

    def create_group(self, new_group: CreateGroupSchema) -> GroupSchema:
        group = self.group_repository.create(new_group=new_group)
        return group
    
    def update_group(self, id: UUID, new_group: GroupSchema):
        new_group = self.group_repository.update(id=id, new_group=new_group)
        return new_group