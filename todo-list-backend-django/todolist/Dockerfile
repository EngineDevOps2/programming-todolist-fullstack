# Dockerfile  
FROM python:3.12 

# Set the working directory  
WORKDIR /app  

# Copy requirements file  
COPY requirements.txt /app/  

# Install dependencies  
RUN pip install --no-cache-dir -r requirements.txt  

# Copy the application code  
COPY . /app/  

# Expose the port  
EXPOSE 8000  

# Run the application  
#CMD ["gunicorn", "myproject.wsgi:application", "--bind", "0.0.0.0:8000"]
#CMD python manage.py migrate &&  gunicorn todolist.wsgi:application --bind 0.0.0.0:8000"
ENTRYPOINT ["sh", "-c", "python manage.py migrate && exec gunicorn todolist.wsgi:application --bind 0.0.0.0:8000"]  

