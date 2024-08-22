#
#
#   Groups 
#
#

from uuid import UUID

from ninja import Router
from api.schemas.GroupSchema import CreateGroupSchema, GroupSchema
from api.services.GroupService import GroupService


group_service = GroupService()

router = Router()


@router.get("/")
def get_all_groups(request):
    groups: list[GroupSchema] = group_service.get_all_groups()
    return groups


@router.get("/{id}", response=GroupSchema)
def get_group(request, id: UUID) -> GroupSchema:
    group = group_service.get_group(id=id)
    return group


@router.put("/{id}", response=GroupSchema)
def update_group(request, id: UUID, group: GroupSchema):
    group = group_service.update_group(id=id, new_group=group)
    return group


@router.post("/", response=GroupSchema)
def create_group(request, group: CreateGroupSchema):
    new_group = group_service.create_group(new_group=group)
    return new_group

@router.delete("/{id}", response=GroupSchema)
def delete_group(request, id: UUID):
    group = group_service.delete_group(id=id)
    return group
