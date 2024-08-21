import os
from ast import literal_eval
from typing import List

from dotenv import load_dotenv

load_dotenv()


class Config:
    DB_NAME = os.getenv("DB_NAME", "activitymates")
    DB_USERNAME = os.getenv("DB_USERNAME", "postgres")
    DB_PASSWORD = os.getenv("DB_PASSWORD", "development")
    DB_HOST = os.getenv("DB_HOST", "localhost")
    DB_PORT = int(os.getenv("DB_PORT", "5432"))
    DJANGO_SECRET_KEY  = os.getenv("DJANGO_SECRET_KEY", "")



config = Config()