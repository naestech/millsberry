# Millsberry - Next.js Refactor

A modern refactor of the classic Millsberry virtual town experience, built with Next.js 15, React, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **UI Library**: React 19
- **Build Tool**: Webpack (via Next.js)

## 📁 Project Structure

```
millsberry/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with global styles
│   ├── page.tsx           # Home page (Millsberry Gazette)
│   ├── globals.css        # Global styles with Tailwind directives
│   ├── users/page.tsx     # Users listing page
│   ├── signup/page.tsx    # User registration page
│   ├── home/page.tsx      # User dashboard
│   ├── games/page.tsx     # Games listing page
│   └── main_map/page.tsx  # Town map page
├── public/                 # Static assets
│   ├── graphics/          # Original Millsberry graphics
│   └── favicon.ico        # Site favicon
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── tsconfig.json          # TypeScript configuration
├── next.config.js         # Next.js configuration
└── package.json           # Dependencies and scripts
```

## 🎨 Design & Layout

The application features a classic three-column layout that faithfully recreates the original Millsberry experience:

- **Left Sidebar (150px)**: Navigation buttons (Sign Up, Map, Games)
- **Middle Content (650px)**: Main Gazette content, news, polls, and articles
- **Right Sidebar (275px)**: Ads, weather, home tour, high scores, and featured content

The layout uses CSS Grid (`grid-cols-[150px_650px_275px]`) to ensure precise column widths and horizontal alignment, matching the original table-based design.

## 🎯 Key Features

### ✅ Completed
- **Next.js 15 Migration**: Successfully migrated from Express.js to Next.js with App Router
- **TypeScript Integration**: Full TypeScript support with proper type definitions
- **Tailwind CSS v3**: Modern utility-first CSS framework with custom Millsberry theme
- **Responsive Layout**: Three-column layout that matches the original design
- **Static Asset Handling**: Proper serving of original graphics and assets
- **Component Structure**: Modular React components with proper separation of concerns

### 🎨 Styling Features
- **Custom Color Palette**: Millsberry-specific colors (`#1887b6`, `#cbf2fe`, `#156a8a`)
- **CSS Grid Layout**: Precise three-column layout with exact pixel widths
- **Legacy Style Cleanup**: Removed conflicting CSS files and implemented proper resets
- **Tailwind Utilities**: Comprehensive use of Tailwind classes for consistent styling

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd millsberry
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to see the Millsberry Gazette!

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Tailwind CSS Configuration

The project uses Tailwind CSS v3 with a custom configuration that includes:

- **Custom Colors**: Millsberry brand colors
- **Content Scanning**: Scans `app/` and `components/` directories
- **PostCSS Integration**: Proper PostCSS configuration for processing

### Custom Colors
```javascript
colors: {
  'millsberry-blue': '#1887b6',
  'millsberry-lightBlue': '#cbf2fe', 
  'millsberry-darkBlue': '#156a8a',
}
```

## 🔧 Configuration Files

### `tailwind.config.js`
- Content paths for scanning
- Custom theme extensions
- Millsberry color palette

### `postcss.config.js`
- Tailwind CSS plugin
- Autoprefixer for browser compatibility

### `next.config.js`
- Image optimization settings
- App Router configuration

## 📱 Pages

- **Home (`/`)**: Millsberry Gazette with three-column layout
- **Users (`/users`)**: User listing page
- **Signup (`/signup`)**: User registration form
- **Home Dashboard (`/home`)**: User's personal dashboard
- **Games (`/games`)**: Available games listing
- **Main Map (`/main_map`)**: Town map and locations

## 🎯 Layout Structure

The main page layout follows the original Millsberry design:

```
┌─────────────────────────────────────────────────────────────┐
│                    Header Navigation                        │
├─────────┬─────────────────────────────────┬─────────────────┤
│         │                                 │                 │
│  Left   │         Middle Content         │    Right        │
│ Sidebar │         (650px width)          │   Sidebar       │
│(150px)  │                                 │   (275px)      │
│         │                                 │                 │
│ Sign Up │         Gazette Banner          │     Ads         │
│   Map   │                                 │   Weather       │
│  Games  │         News Content            │  Home Tour      │
│         │                                 │ High Scores     │
│         │         Poll Results            │ Featured        │
│         │                                 │   Citizen       │
└─────────┴─────────────────────────────────┴─────────────────┘
```

## 🔄 Migration History

This project successfully migrated from:
- **Express.js** → **Next.js 15**
- **Pug templates** → **React components**
- **Legacy CSS** → **Tailwind CSS v3**
- **JavaScript** → **TypeScript**

## 📄 License

This project maintains the original Millsberry branding and content while modernizing the technical implementation.

---

**Note**: This is a refactor of the classic Millsberry virtual town experience, preserving the original design and content while modernizing the technology stack.

