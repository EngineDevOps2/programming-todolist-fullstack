# FROM php:8.4-fpm
#######
# # Set working directory
# WORKDIR /app

# # Install system dependencies
# RUN apt-get update && apt-get install -y  \
#     git \
#     curl  \
#     libpq-dev \ 
#     libpng-dev \ 
#     libonig-dev  \
#     libxml2-dev  \
#     zip  \
#     unzip &&  \ 
#     docker-php-ext-install pdo pdo_pgsql

# # Clear cache
# RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# # Get latest Composer
# RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
# #COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# # Copy application code
# COPY . ./

# # Install Composer dependencies
# RUN composer install

# # Run migrations and start the server
# ENTRYPOINT ["sh", "-c", "php artisan migrate && php artisan serve --port=8000 --host=0.0.0.0"]
FROM php:8.4-apache
RUN apt-get update && apt-get install -y  \
    git \
    curl  \
    libpq-dev \ 
    libpng-dev \ 
    libonig-dev  \
    libxml2-dev  \
    zip  \
    unzip &&  \ 
    docker-php-ext-install pdo pdo_pgsql   && apt-get clean && rm -rf /var/lib/apt/lists/*  && a2enmod rewrite 
    
# Copy Laravel app files
COPY . /var/www/html

# Set write permissions to used folders
RUN chown -R www-data:www-data /var/www/html /var/www/html/storage /var/www/html/bootstrap/cache

# Change working directory to Laravel app root
WORKDIR /var/www/html

# Install composer and Laravel dependencies with composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer \
    && composer install --no-dev --optimize-autoloader

# Expose port 80 for Apache
EXPOSE 80
