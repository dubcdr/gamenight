# Database Setup

This directory contains database initialization scripts and migration files.

## Getting Started

### 1. Start PostgreSQL with Docker Compose

```bash
docker-compose up -d postgres
```

This will start a PostgreSQL 16 container with:
- Database: `gamenight`
- User: `gamenight`
- Password: `gamenight`
- Port: `5432`

The `init.sql` script will run automatically on first startup.

### 2. Configure Environment Variables

Copy `.env.example` to `.env` in the root directory and update if needed:

```bash
cp .env.example .env
```

### 3. Working with Migrations

#### Generate a new migration

After creating or modifying entities:

```bash
yarn migration:generate apps/api/src/migrations/MigrationName
```

#### Run migrations

```bash
yarn migration:run
```

#### Revert the last migration

```bash
yarn migration:revert
```

## TypeORM Configuration

The TypeORM configuration is defined in two places:

1. **`apps/api/src/datasource.ts`** - Used by the TypeORM CLI for migrations
2. **`apps/api/src/app/app.module.ts`** - Used by NestJS at runtime

Both configurations should be kept in sync.

## Creating Entities

Create entity files in the NestJS application with the `.entity.ts` suffix:

```typescript
// apps/api/src/app/user/user.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;
}
```

Then import the entity in your module:

```typescript
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  // ...
})
```
