# Digital Marketing Agency Website

A modern, responsive website template for a digital marketing agency built with Next.js and Tailwind CSS. This project features a clean design with animated components, a green-themed color scheme, and various sections to showcase services and expertise.

![Digital Marketing Agency Preview](public/img/preview.png)

## 🚀 Features

- **Responsive Design:** Fully mobile-friendly layout that adapts to all screen sizes
- **Modern UI:** Clean, professional interface with consistent green theme
- **Animated Components:** Smooth animations and transitions using Framer Motion
- **Component-Based Architecture:** Modular components for easy maintenance
- **SEO Friendly:** Built with best practices for search engine optimization

## 🛠️ Technologies

- [Next.js](https://nextjs.org/) - React framework for production
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Heroicons](https://heroicons.com/) - Beautiful hand-crafted SVG icons

## 📂 Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.js         # Root layout
│   └── page.jsx          # Home page
├── components/
│   ├── AnimationWrapper.jsx  # Animation container component
│   ├── Banner.jsx        # Hero banner section
│   ├── Contents.jsx      # Services content section
│   ├── EndSection.jsx    # Case studies section
│   ├── Footer.jsx        # Site footer
│   ├── Hero.jsx          # Logos and stats section
│   ├── Icons.jsx         # SVG icon components
│   ├── Navbar.jsx        # Navigation bar
│   ├── Other.jsx         # Additional services section
│   └── SectionTwo.jsx    # Call-to-action section
└── ...
```

## 🔧 Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/Social-media.git
   cd Social-media
   ```

2. Install the dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🎨 Customization

### Colors

The site uses a green theme throughout. Main color classes used:
- Primary: `text-green-600`, `bg-green-600`
- Secondary: `text-green-400`, `bg-green-400` 
- Accent: `text-[#c6ff81]`, `bg-[#c6ff81]`

To change the theme, search and replace these color classes throughout the components.

### Content

Update the content by editing the respective component files in the `src/components` directory.

### Images

Replace the images in the `public/img` directory with your own.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Heroicons](https://heroicons.com/) for the beautiful SVG icons
- [Framer Motion](https://www.framer.com/motion/) for animation capabilities
