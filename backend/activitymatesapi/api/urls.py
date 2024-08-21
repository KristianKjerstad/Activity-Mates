

from django.contrib import admin
from django.urls import path

from api.views import api


urls = [
    path("api/", api.urls)
]