# FileMaster

FileMaster or FileHub is a comprehensive file management tool, offering intuitive and powerful features to organize and manage files seamlessly.

## Installation

### Prerequisites

-   Docker
-   Docker Compose

### Steps

1. **Clone the repository**

2. **Copy the example environment file and modify it as needed**

    ```sh
    cp .env.example .env
    ```

3. **Build and start the Docker containers**

    ```sh
    docker-compose up -d --build
    ```

4. **Install Laravel dependencies**

    ```sh
    docker-compose exec app composer install
    ```

5. **Generate application key**

    ```sh
    docker-compose exec app php artisan key:generate
    ```

6. **Run database migrations**

    ```sh
    docker-compose exec app php artisan migrate
    ```

7. **Install Node.js dependencies**

    ```sh
    docker-compose exec app npm install
    ```

8. **Compile the front-end assets**

    ```sh
    docker-compose exec app npm run dev
    ```
