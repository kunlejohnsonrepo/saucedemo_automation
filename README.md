# task-issues

### Setup

- Run the following commands

```bash
cp .env.sample .env
npm i
docker-compose up --build -V --remove-orphans
```

- Import Postman collection (`postman_collection.json`) into the Postman

- Test endpoints from API documentation

### Entities

- agent

  - id (UUID)
  - name
  - status (value: 'AVAILABLE' or 'ASSIGNED')

- issue
  - id (UUID)
  - agent_id (UUID, nullable)
  - title
  - status (value: 'PENDING', 'ASSIGNED' or 'RESOLVED')

### API documentation

Generated at [http://localhost:8080/api-docs](http://localhost:8080/api-docs)

### Docker compose commands

```bash
docker-compose up -V
docker-compose down
```

### Testing

```bash
npm test
npm run test:coverage
```

### Technologies used

- Node.js, TypeScript, NestJS, TypeORM (PostgreSQL)
