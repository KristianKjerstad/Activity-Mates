FROM python:3.11.1-slim


WORKDIR /app
RUN apt update
RUN apt-get install gcc -y
RUN pip install --upgrade pip setuptools
COPY ./requirements.txt ./requirements.txt
RUN pip install -r requirements.txt

COPY activitymatesapi ./

EXPOSE 8000
USER 1000
CMD ["python", "-m", "uvicorn",  "activitymatesapi.asgi:application", "--reload", "--host", "0.0.0.0", "--port", "8000"]
