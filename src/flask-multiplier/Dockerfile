FROM python:3.11-slim-bullseye AS base
WORKDIR /app

FROM base AS dependencies
COPY requirements.txt .
RUN pip3 install --no-cache-dir -r requirements.txt

FROM dependencies AS build
COPY . .

FROM base AS release
COPY --from=dependencies /usr/local/lib/python3.11/site-packages /usr/local/lib/python3.11/site-packages
COPY --from=build /app ./
ENV FLASK_APP=main
CMD ["python3", "-m", "flask", "run", "--host=0.0.0.0"]