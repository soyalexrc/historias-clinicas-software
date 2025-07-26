# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a healthcare management system (historias-clinicas-software) built with Next.js 14.2.4, TypeScript, and modern React. It manages clinical records, patient information, and billing for medical facilities.

## Essential Commands

```bash
# Development
yarn dev          # Start development server on http://localhost:3000

# Build & Deploy
yarn build        # Build for production (includes Prisma generation and migrations)
yarn start        # Start production server

# Code Quality
yarn lint         # Run ESLint
```

## Architecture Overview

### Tech Stack
- **Frontend**: Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS, Shadcn/ui
- **Backend**: Next.js API routes, Server Actions
- **Databases**: PostgreSQL (primary via Prisma), MongoDB (secondary via Prisma)
- **Authentication**: Clerk
- **Real-time**: Firebase Firestore
- **State Management**: Redux Toolkit

### Database Strategy

The system uses a dual-database approach:
- **PostgreSQL**: Transactional data (patients, tickets, services, billing)
- **MongoDB**: Document-based comprehensive patient medical records

Prisma schemas are located in:
- `/prisma/postgres/schema.prisma` - PostgreSQL schema
- `/prisma/mongo/schema.prisma` - MongoDB schema

### Key Directories

```
/src/app/api/          # API endpoints
  /auth/              # Authentication
  /ticket/            # Billing/invoice management
  /mongo/             # MongoDB operations

/src/app/sistema/     # Main application pages
  /administracion/    # Admin panel
  /atencion/          # Medical attention workflow
  /filiacion/         # Patient registration
  /reportes/          # Reports generation

/src/components/      # React components organized by feature
/src/lib/            # Utilities, database config, interfaces
/src/actions/        # Server Actions
```

### User Roles & Access

The system supports multiple roles with different access levels:
- `admin` - Full system access
- `attention` - Medical staff for patient care
- `cashier` - Billing and payment processing
- `reporting` - Report generation and analytics

### Core Features

1. **Patient Management**: Registration, medical history, allergies, vital signs
2. **Medical Records**: Anamnesis, physical exams, diagnoses, prescriptions
3. **Billing Integration**: Electronic invoices, service tracking, validation
4. **Reporting**: PDF/Excel generation for various reports
5. **Real-time Queue**: Patient queue management via Firebase

### Development Patterns

- Use Server Components by default, Client Components only when needed
- Form validation with React Hook Form + Zod
- API routes follow `/api/[feature]/[action]` pattern
- Prisma clients are configured in `/src/lib/db/prisma.ts`
- Multi-tenant support via `RucE` field in database schemas

### Environment Variables

Key environment variables needed:
- Database URLs (PostgreSQL pooling/non-pooling, MongoDB)
- Clerk authentication keys
- Firebase configuration
- Environment-specific settings

### Current Development Focus

Recent work includes:
- Report generation improvements (PDF with logos, Excel exports)
- Ticket validation workflows
- Service insertion enhancements
- UI skeleton loaders for better UX