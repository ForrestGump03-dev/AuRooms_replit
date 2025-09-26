# AuRooms - Luxury Guest House Website

## Panoramica del Progetto

AuRooms è un sito web moderno per un guest house di lusso a Cinisi, Sicilia. Il sito include un sistema di prenotazione completo con pagamenti Stripe, integrazione database PostgreSQL, conferme email automatiche e design autentico mediterraneo.

## Stato Attuale del Progetto

### ✅ Implementato (Frontend)
- **Design completo** con palette colori mediterranea (blu, bianco, beige, oro)
- **Pagine principali**: Home, Rooms, Services, Contact, Book
- **Componenti**: Header, Hero, RoomCard, TestimonialCard, ServiceCard, Footer, BookingForm
- **Responsive design** ottimizzato per mobile
- **Routing** con wouter
- **Styling** con Tailwind CSS e componenti shadcn/ui

### ❌ Non Implementato (Backend)
- **Database schema** - solo struttura vuota in `shared/schema.ts`
- **API routes** - solo template in `server/routes.ts`
- **Storage logic** - interfaccia vuota in `server/storage.ts`
- **Integrazione Stripe** - form funziona solo con console.log
- **Integrazione SendGrid** - nessuna email inviata
- **Salvataggio prenotazioni** - non persistono nel database

## Secrets e Variabili d'Ambiente Necessarie

### 🔑 Secrets da Configurare in Replit

Per rendere l'applicazione completamente funzionale, devi aggiungere questi secrets nel pannello Secrets di Replit:

#### Database (Già Disponibili)
```
DATABASE_URL=postgresql://...
PGHOST=...
PGUSER=...
PGPASSWORD=...
PGDATABASE=...
PGPORT=...
SESSION_SECRET=...
```

#### Stripe (Da Aggiungere)
```
STRIPE_SECRET_KEY=sk_test_... (o sk_live_... per produzione)
VITE_STRIPE_PUBLIC_KEY=pk_test_... (o pk_live_... per produzione)
```

#### SendGrid (Da Aggiungere)
```
SENDGRID_API_KEY=SG....
```

### Come Ottenere le API Keys

#### Stripe Setup
1. Vai su [stripe.com](https://stripe.com) e crea un account
2. Nel dashboard Stripe:
   - Vai su "Developers" → "API keys"
   - Copia la "Publishable key" (inizia con pk_test_)
   - Copia la "Secret key" (inizia con sk_test_)
   - Per produzione usa le chiavi "live" invece di "test"

#### SendGrid Setup  
1. Vai su [sendgrid.com](https://sendgrid.com) e crea un account
2. Nel dashboard SendGrid:
   - Vai su "Settings" → "API Keys"
   - Clicca "Create API Key"
   - Scegli "Full Access" o configura permessi specifici
   - Copia la chiave generata (inizia con SG.)

### Google Maps Integration

Per aggiungere Google Maps alla pagina Contact:

#### Google Maps API Setup
1. Vai su [Google Cloud Console](https://console.cloud.google.com)
2. Crea un nuovo progetto o seleziona uno esistente
3. Abilita le seguenti API:
   - Maps JavaScript API
   - Places API (opzionale)
   - Geocoding API (opzionale)
4. Vai su "Credentials" → "Create Credentials" → "API Key"
5. Aggiungi restrizioni per sicurezza:
   - Application restrictions: HTTP referrers
   - Aggiungi il dominio del tuo sito (*.replit.app)

#### Implementazione Tecnica
```bash
npm install @vis.gl/react-google-maps
```

Aggiungi secret:
```
VITE_GOOGLE_MAPS_API_KEY=AIza...
```

## Sviluppo Backend Necessario

### 1. Database Schema (`shared/schema.ts`)
Definire tabelle per:
- **Bookings**: prenotazioni con dettagli guest, date, prezzi
- **Rooms**: tipi di camere, prezzi, disponibilità
- **Guests**: informazioni clienti
- **Payments**: tracking pagamenti Stripe

### 2. API Routes (`server/routes.ts`)
Implementare endpoints:
- `POST /api/bookings` - crea nuova prenotazione
- `GET /api/bookings/:id` - dettagli prenotazione
- `POST /api/payments/create-intent` - Stripe payment intent
- `POST /api/payments/confirm` - conferma pagamento
- `GET /api/rooms` - lista camere disponibili
- `GET /api/rooms/availability` - check disponibilità

### 3. Business Logic
- **Validazione prenotazioni** - check date, disponibilità
- **Calcolo prezzi** - tariffe, tasse, servizi extra
- **Gestione pagamenti** - integrazione completa Stripe
- **Email automatiche** - conferme, ricevute via SendGrid

## Frontend Che Richiede Aggiornamenti

### BookingForm Component
Attualmente fa solo console.log, deve:
- Chiamare API `/api/bookings`
- Gestire Stripe checkout
- Mostrare stati di caricamento/errore
- Redirect dopo pagamento successo

### Pages con Dati Mock
- `Home.tsx` - room data hardcoded
- `Rooms.tsx` - array statico camere
- Tutte le testimonianze sono placeholder

## Configurazione Stripe Frontend

Il form di prenotazione dovrà essere aggiornato per usare Stripe Elements:

```jsx
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
```

## Integrazione Email SendGrid

Creare template email per:
- **Conferma prenotazione** - dettagli booking
- **Ricevuta pagamento** - dopo pagamento successo
- **Promemoria check-in** - 24h prima arrivo
- **Richiesta recensione** - dopo check-out

## Test e Deployment

### Cosa Testare Dopo Setup Secrets:
1. **Database connection** - verificare connessione PostgreSQL
2. **Stripe test payments** - usare carte di test
3. **SendGrid emails** - verificare invio email
4. **Form submissions** - end-to-end booking flow
5. **Google Maps** - verifica mappa Contact page

### Modalità Test Stripe:
- Carta test: `4242 4242 4242 4242`
- Expiry: qualsiasi data futura
- CVC: qualsiasi 3 cifre
- ZIP: qualsiasi

## Note per lo Sviluppatore

### Struttura Attuale:
- **Frontend**: React + TypeScript + Tailwind CSS
- **Backend**: Express.js + Drizzle ORM
- **Database**: PostgreSQL (Neon)
- **Build**: Vite
- **Routing**: wouter (non React Router)

### Priorità Sviluppo:
1. **Database schema** - definire tabelle booking/rooms/guests
2. **API bookings** - endpoint creazione prenotazioni  
3. **Stripe integration** - payment intent + confirmation
4. **SendGrid emails** - template e invio automatico
5. **Frontend updates** - collegare form a API reali
6. **Google Maps** - sostituire placeholder

### Design System:
- Colori: Mediterranean blue (#2563eb), warm white, sand beige, Sicilian gold
- Font: Playfair Display (serif) + Inter (sans)
- Componenti: shadcn/ui library
- Icons: Lucide React

## Contatto

Una volta implementati i secrets e il backend, l'applicazione sarà completamente funzionale con:
- Prenotazioni reali salvate nel database
- Pagamenti processati via Stripe  
- Email automatiche di conferma
- Dati persistenti e visibili nel database PostgreSQL

Il frontend è già completo e professionale - serve solo collegare il backend per rendere tutto operativo.