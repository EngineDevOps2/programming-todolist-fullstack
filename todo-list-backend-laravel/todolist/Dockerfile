FROM php:8.4-fpm

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y  \
    git \
    curl  \
    libpq-dev \ 
    libpng-dev \ 
    libonig-dev  \
    libxml2-dev  \
    zip  \
    unzip &&  \ 
    docker-php-ext-install pdo pdo_pgsql

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Get latest Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copy application code
COPY . ./

# Install Composer dependencies
RUN composer install

# Run migrations and start the server
ENTRYPOINT ["sh", "-c", "php artisan migrate && php artisan serve --port=8000 --host=0.0.0.0"]
