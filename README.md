# 🎮 Tetris Portfolio - zybo (Zübeyr Almaho)

A creative, animated portfolio website featuring falling Tetris blocks background. Built with modern web technologies for an innovative and interactive user experience.

## 🚀 Features

- **Animated Tetris Background**: Continuously falling tetris blocks creating a dynamic backdrop
- **Three Main Sections**:
  - 👤 **About**: Personal information, skills, and introduction
  - 💼 **Projects**: Portfolio projects showcase with technologies and links
  - 📞 **Contact**: Contact information and CV download
- **Tetris-Style Navigation**: Navigation arrows made from tetris blocks for seamless section transitions
- **Modern UI/UX**: Clean, artistic design with glassmorphism effects and gradient backgrounds
- **Responsive Design**: Perfect viewing experience across all devices
- **Smooth Animations**: Fluid transitions and interactive hover effects
- **Tetris Border Decorations**: Colorful tetris blocks decorating card borders

## 🛠️ Technologies

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **HTML5 Canvas**: Tetris animations and effects
- **React Hooks**: Modern state management

## 📦 Installation & Setup

1. **Start development server**:
   ```bash
   npm run dev
   ```

2. **Open in browser**:
   http://localhost:3000

## 🎨 Customization

### Update Profile Information

Edit `src/components/ProfileCard.tsx`:
- Change name and title
- Update description text
- Modify skills array
- Add your profile photo

### Add/Edit Projects

Edit the `projects` array in `src/components/ProjectsCard.tsx`:
```typescript
const projects: Project[] = [
  {
    id: 1,
    title: "Your Project",
    description: "Project description",
    image: "/path/to/image",
    link: "https://your-project-url.com",
    technologies: ["React", "Next.js", "TypeScript"]
  },
  // ...more projects
];
```

### Update Contact Information

Edit the `contactInfo` array in `src/components/ContactCard.tsx`:
```typescript
{
  icon: <svg>...</svg>,
  label: "Platform Name",
  value: "Your Value",
  link: "https://your-link.com"
}
```

## 🎮 Navigation System

- **Right-side Tetris Arrows**: Click to navigate between sections
- **Section Flow**: About → Projects → Contact
- **Interactive Indicators**: Color-coded section indicators
- **Keyboard Friendly**: Accessible navigation with proper ARIA labels

## 📱 Responsive Design

Fully responsive across all devices:
- **Desktop** (1200px+): Full tetris decorations and animations
- **Tablet** (768px - 1199px): Optimized spacing and navigation
- **Mobile** (768px and below): Compact navigation and touch-friendly interface

## 🎨 Design Features

- **Glassmorphism Effects**: Semi-transparent cards with backdrop blur
- **Gradient Backgrounds**: Beautiful color transitions for each section
- **Tetris Block Borders**: Colorful tetris pieces decorating card edges
- **Smooth Animations**: Enhanced transitions and hover effects
- **Color-Coded Sections**: Purple (About), Green (Projects), Orange (Contact)

## 🚀 Production Build

1. **Create production build**:
   ```bash
   npm run build
   ```

2. **Start production server**:
   ```bash
   npm start
   ```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles & animations
│   ├── layout.tsx           # Main layout component
│   └── page.tsx             # Home page
├── components/
│   ├── ContactCard.tsx      # Contact section card
│   ├── ProfileCard.tsx      # About section card
│   ├── ProjectsCard.tsx     # Projects section card
│   └── TetrisNavigation.tsx # Navigation component
└── hooks/
    └── useTetris.ts         # Tetris animation hook
```

## 🎯 Planned Features

- [ ] Blog section integration
- [ ] Dark/Light theme toggle
- [ ] Language switcher (EN/TR)
- [ ] Contact form with email integration
- [ ] Automatic CV updates
- [ ] Analytics integration
- [ ] Performance optimizations

## 👨‍💻 Developer

**Zübeyr Almaho (zybo)**  
Creative Web Developer & Designer

---

⭐ If you like this project, don't forget to give it a star!
