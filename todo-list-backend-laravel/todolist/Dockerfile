FROM php:8.4-fpm
WORKDIR /app
#ARG user=user
#ARG uid=1000

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpq-dev \ 
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip  && docker-php-ext-install pdo pdo_pgsql

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Get latest Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer


#RUN useradd -G www-data,root -u $uid -d /home/$user $user
#RUN mkdir -p /home/$user/.composer && \
#    chown -R $user:$user /home/$user  

COPY . ./
#RUN chown -R www-data: /app
#USER $user

#CMD php artisan serve --port=8000 --host=0.0.0.0
