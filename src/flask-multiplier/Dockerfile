FROM python:3.11-bullseye

WORKDIR /app

COPY requirements.txt .
RUN pip3 install -r requirements.txt

COPY . .

ENV FLASK_APP=main

CMD ["python3", "-m", "flask", "run", "--host=0.0.0.0"]