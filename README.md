# Color Palette Generator

A modern, interactive web application built with React and TypeScript that generates beautiful color palettes from any given color. This tool allows users to create tints and shades of a selected color, perfect for designers, developers, and anyone working with colors.

## Features

- **Color Input**: Enter colors via hex code or use the color picker
- **Palette Generation**: Automatically generates 21 color variations (tints and shades)
- **Interactive Display**: Click on any color to copy its hex value to clipboard
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Error Handling**: Provides feedback for invalid color inputs
- **TypeScript Support**: Fully typed for better development experience

## Technologies Used

- **React 19**: Modern React with hooks for state management
- **TypeScript**: Type-safe JavaScript for robust development
- **Vite**: Fast build tool and development server
- **values.js**: Color manipulation library for generating color variations
- **CSS**: Custom styling for a clean, modern interface

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/HamedSadim1/color-generator.git
   cd color-generator
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

1. Enter a hex color code in the text input (e.g., `#f15025`)
2. Or use the color picker to select a color visually
3. Click the "submit" button to generate the color palette
4. Browse through the generated colors
5. Click on any color square to copy its hex value to your clipboard

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code issues

## Project Structure

```
src/
├── components/
│   └── SingleColor.tsx    # Individual color component
├── types/
│   └── index.ts          # TypeScript type definitions
├── util/
│   └── index.ts          # Utility functions
├── App.tsx               # Main application component
├── main.tsx              # Application entry point
└── index.css             # Global styles
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**Hamed Sadim** - [GitHub](https://github.com/HamedSadim1)

---

Built with ❤️ using React and TypeScript
