# Jireh Mecate - Portfolio

A minimalist, mobile-friendly React portfolio website showcasing my work, travels, and experience.

## Features

- ✨ Minimalist, clean design
- 📱 Fully responsive (mobile-first)
- 🌙 Dark mode support
- 🗺️ Travel documentation
- 💼 Experience showcase (Freelance & University projects)
- 🛠️ Tech stack and tools

## Tech Stack

- React 18
- React Router DOM
- Vite
- Tailwind CSS
- Dark mode support

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Deploy to Vercel

1. **Install Vercel CLI** (optional):
   ```bash
   npm i -g vercel
   ```

2. **Deploy via Vercel Dashboard**:
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite and configure settings
   - Click "Deploy"

3. **Deploy via CLI**:
   ```bash
   vercel
   ```

The project is pre-configured with `vercel.json` for optimal deployment settings.

## Project Structure

```
src/
  ├── components/
  │   ├── Header.jsx      # Navigation and dark mode toggle
  │   ├── About.jsx       # About page
  │   ├── Travels.jsx     # Travel documentation
  │   ├── Experience.jsx  # Freelance and University experience
  │   └── Uses.jsx        # Tech stack and tools
  ├── App.jsx             # Main app component with routing
  ├── main.jsx            # Entry point
  └── index.css           # Global styles
```

## Pages

- **About** - Introduction and social links
- **Travels** - Travel documentation (Taiwan, Vietnam, Bohol, Batangas)
- **Experience** - Freelance projects and University experience
- **Uses** - Technology stack and tools

## Customization

Update your information in:
- `src/components/About.jsx` - Personal information
- `src/components/Travels.jsx` - Travel entries
- `src/components/Experience.jsx` - Projects and experience
- `src/components/Uses.jsx` - Tech stack

## License

© 2025 Jireh Mecate

