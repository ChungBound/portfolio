# Ben's Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and minimalist design
- 📱 Fully responsive across all devices
- ✨ Smooth animations with Framer Motion
- 🚀 Built with Next.js 14 and TypeScript
- 🎯 SEO optimized
- 🌙 Clean and accessible UI

## Technologies Used

- **Frontend Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
└── lib/
```

## Customization

To customize the portfolio for your own use:

1. Update personal information in the components
2. Replace project details in `Projects.tsx`
3. Modify the color scheme in `tailwind.config.ts`
4. Add your own images to the `public` folder
5. Update contact information in `Contact.tsx`

## Deployment

The project can be easily deployed to Vercel, Netlify, or any other static hosting platform.

```bash
npm run build
npm run start
```

## License

This project is open source and available under the [MIT License](LICENSE).
