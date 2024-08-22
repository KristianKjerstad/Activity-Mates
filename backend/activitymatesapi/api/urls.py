

from django.urls import path
from ninja import NinjaAPI
from api.views.group_views import router as group_router
from api.views.user_views import router as user_router


api = NinjaAPI()
api.add_router("groups", group_router, tags=["Groups"])
api.add_router("users", user_router, tags=["Users"])

urls = [
    path("api/", api.urls)
]