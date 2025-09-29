# LLM Coding Presentation

A modular presentation about coding with Large Language Model agents, built with HTML, CSS, and JavaScript.

## 📁 Project Structure

```
LLM-presentation/
├── README.md                          # This file
├── styles.css                         # Unified CSS styles
├── slides.json                        # Slide configuration
├── presentation.js                    # Basic presentation logic
├── presentation-dynamic.js            # Advanced dynamic loading
├── index.html                         # Static presentation (all slides embedded)
├── presentation-dynamic.html          # Dynamic presentation (loads slides separately)
└── slides/                           # Individual slide files
    ├── slide-01-title.html
    ├── slide-02-introduction.html
    ├── slide-03-agentic-coder.html
    ├── slide-04-in-ide-tools.html
    ├── slide-05-cli-agents.html
    ├── slide-06-use-cases.html
    ├── slide-07-mcp.html
    ├── slide-08-best-practices.html
    ├── slide-09-future.html
    └── slide-10-qa.html
```

## 🚀 Usage

### Option 1: Static Presentation (Recommended for simplicity)
Open `index.html` in your browser. All slides are embedded in a single file.

### Option 2: Dynamic Presentation (Recommended for development)
1. Serve the files using a local web server (required for file loading):
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```
2. Open `http://localhost:8000/presentation-dynamic.html`

## ✨ Features

### Unified Styling System
- **CSS Custom Properties**: Consistent color scheme using CSS variables
- **Typography Classes**: Standardized fonts and sizing (`.slide-title`, `.slide-text`, `.slide-list`)
- **Responsive Design**: Works on desktop and mobile devices
- **Accent Colors**: Semantic color classes for consistent theming

### Navigation
- **Keyboard Controls**: 
  - `→` or `Space`: Next slide
  - `←`: Previous slide
  - `Home`: First slide
  - `End`: Last slide
- **Mouse Controls**: Previous/Next buttons
- **Progress Indicator**: Shows current slide number and title

### Modular Architecture
- **Separate Files**: Each slide is in its own HTML file for easy editing
- **Dynamic Loading**: Slides can be loaded asynchronously
- **Configuration**: `slides.json` controls slide order and metadata
- **Extensible**: Easy to add, remove, or reorder slides

## 🎨 Customization

### Adding New Slides
1. Create a new HTML file in the `slides/` directory
2. Follow the existing slide structure
3. Add the slide to `slides.json` configuration
4. The slide will automatically appear in the dynamic presentation

### Modifying Styles
Edit `styles.css` to customize:
- Colors (CSS custom properties in `:root`)
- Typography (font sizes, weights)
- Layout and spacing
- Animations and transitions

### Changing Content
Edit individual slide files in the `slides/` directory to update content.

## 🛠 Technical Details

### CSS Architecture
- Uses CSS custom properties for maintainable theming
- Tailwind CSS for utility classes
- Custom classes for presentation-specific styling
- Responsive design with mobile-first approach

### JavaScript Features
- **PresentationManager Class**: Handles slide navigation and loading
- **Event Handling**: Keyboard and mouse interactions
- **Error Handling**: Graceful fallback if dynamic loading fails
- **Public API**: External control of presentation state

### Browser Compatibility
- Modern browsers (ES6+ features used)
- Requires JavaScript enabled
- Dynamic version requires local server (due to file loading restrictions)

## 📝 Development Notes

- The static version (`index.html`) is self-contained and works without a server
- The dynamic version requires a local server due to browser security restrictions on file loading
- Individual slide files can be used for focused editing and version control
- The modular structure makes it easy to collaborate on different slides

## 🤝 Contributing

To add or modify slides:
1. Edit the appropriate file in the `slides/` directory
2. Update `slides.json` if adding/removing slides
3. Test in both static and dynamic versions
4. Ensure consistent styling using the provided CSS classes
