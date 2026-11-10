# Bilad Analytics Dashboard

The Bilad analytics dashboard is a web application designed to explore and visualize official hotel and tourist accommodation survey data across all eighteen governorates of Iraq. The platform provides structured insights into regional visitor flows, workforce distribution, and economic performance within the national hospitality sector.

## Project Structure

```txt
bilad-analytics-dashboard/
├── public/
├── src/
│ ├── components/
│ │ ├── Header.jsx
│ │ ├── MetricCard.jsx
│ │ ├── ChartsSection.jsx
│ │ └── AnalyticsTable.jsx
│ ├── lib/
│ │ └── supabase.js
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
├── .env.local
├── package.json
└── tailwind.config.js
```

## Key Features

- National overview tracking total accommodations, annual guests, overnight stays, and sector revenues.
- Relational database architecture hosted on Supabase, supporting multi-year comparisons and facility classifications.
- Interactive data visualizations built with Recharts, highlighting regional visitor volumes and structural metrics.
- Responsive user interface styled with Tailwind CSS, featuring a dark theme tailored for analytical data displays.

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, Recharts, Lucide Icons
- **Backend & Database:** Supabase PostgreSQL
- **Deployment:** Vercel / Netlify

## Database Schema

The application utilizes a normalized PostgreSQL database consisting of three core tables:

1. `governorates`: Stores regional entities and geographic classifications across Iraq.
2. `annual_tourism_stats`: Tracks annual performance indicators including hotel counts, guest totals, bed nights, and financial revenues.
3. `accommodation_types`: Categorizes facilities by type such as star ratings, motels, and tourist villages.

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your local machine and an active Supabase account.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/bilad-analytics-dashboard.git
cd bilad-analytics-dashboard
```

2. Install the required dependencies:

```bash
npm install
```

3. Create a local environment file named .env.local in the project root directory and configure your Supabase keys:

```bash
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Set up the database by running the relational SQL setup scripts provided in the project documentation within your Supabase SQL editor.

## Running Locally

Start the local development server:

```Bash
npm run dev
```

Open your browser and navigate to http://localhost:5173.
