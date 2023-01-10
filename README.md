# node-prisma-postgresql-demo
## Get started
- Install dependencies
    ```
    yarn install
    ```

- Migrate prisma
    ```
    npx prisma migrate dev --name "init"
    ```

## Run
- start database
    ```
    docker-compose up -d
    ```

- start API
    ```
    node index.js
    ```

## Check database
```
npx prisma studio
```