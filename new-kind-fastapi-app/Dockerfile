# Use the official Nginx image based on Alpine Linux
FROM python:3.10-alpine
# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

# Install basic utilities: bash, curl, vim, and build dependencies
RUN apk update && apk add --no-cache \
    bash \
    curl \
    vim \
    gcc \
    musl-dev \
    libffi-dev \
    openssl-dev \
    make \
    && rm -rf /var/cache/apk/*

# Create a non-root user and group
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Set the working directory to /usr/share/nginx/html (default Nginx web root)
WORKDIR /code

COPY ./requirements.txt /code/requirements.txt
RUN echo "nameserver 8.8.8.8" > /etc/resolv.conf 
# && pip install pipenv 
# && pipenv install --system
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt
# Copy the project root's index.html to the web root
COPY /app /code/

# Expose port 80 to the outside world
EXPOSE 8000

# docker build --network=host -t myapi .
# docker build --no-cache --network=host -t myapi .
# docker image tag a70409e64346 somesh3168/myapi
# docker push somesh3168/myapi
CMD ["uvicorn", "main:app","--host", "0.0.0.0", "--reload","--port", "8000"]
