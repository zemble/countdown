# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a complete airport-board style countdown timer application designed for zero-cost hosting and iframe embedding. The project includes a full-featured animated countdown with timezone support, perfect for Moodle integration and educational websites.

## Architecture

### Current Structure
- **`index.html`**: Main application with airport board HTML structure and flip animation elements
- **`styles.css`**: Complete CSS styling with airport board aesthetics and responsive flip animations
- **`countdown.js`**: Full countdown logic with timezone support, URL parameter parsing, and animation control
- **`example.html`**: Demonstration page showing various embedding configurations
- **Module System**: Uses universal module pattern (UMD-style) to support both Node.js and browser environments
- **Zero Dependencies**: Pure vanilla JavaScript with no external libraries required

### Key Design Patterns
- **Class-based Architecture**: `CountdownTimer` class encapsulates all countdown functionality
- **URL Parameter Configuration**: Supports date, time, timezone, title, and theme parameters
- **iframe Detection**: Automatically optimizes layout when embedded in iframes
- **Responsive Design**: CSS Grid and Flexbox with mobile-first responsive breakpoints
- **Animation System**: CSS keyframe animations with JavaScript timing control
- **Timezone Aware**: Built-in timezone support using JavaScript Date objects

## Common Commands

### Running the Application
```bash
# Open main countdown timer
open index.html

# Open examples page
open example.html

# Test with specific parameters (in browser)
open "index.html?date=2024-12-31&time=23:59:59&title=New%20Year%20Countdown"

# Serve locally for development
python3 -m http.server 8000
# Then visit http://localhost:8000
```

### Development
```bash
# View project structure
ls -la

# Check git status
git status

# View recent changes
git --no-pager log --oneline -5
```

### GitHub Pages Deployment
```bash
# Initialize git repository (if not already done)
git init
git add .
git commit -m "Initial commit"

# Push to GitHub and enable Pages
git remote add origin https://github.com/username/countdown.git
git push -u origin main

# Enable GitHub Pages in repository settings
# Your countdown will be available at: https://username.github.io/countdown/
```

### Testing
```bash
# Test different URL configurations
open "index.html?date=2024-12-25&title=Christmas"
open "index.html?date=2024-07-04&timezone=America/New_York&title=Independence%20Day"

# Test responsive behavior by resizing browser window
# Test iframe embedding using example.html
```

## Development Guidelines

### Code Organization
- **HTML Structure**: `index.html` contains the flip digit elements and semantic markup
- **Styling**: `styles.css` handles all visual styling, animations, and responsive behavior
- **Logic**: `countdown.js` contains the countdown calculation, DOM manipulation, and configuration
- **Documentation**: `example.html` provides live examples and embedding code
- **Modularity**: Code is organized in classes and functions for easy maintenance

### Key Features
- **Airport Board Animation**: Realistic flip animations for digit changes
- **Timezone Support**: Configure countdown for any global timezone
- **URL Parameters**: Easy configuration via query parameters
- **iframe Optimized**: Automatically detects and optimizes for iframe embedding
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Accessibility**: Supports reduced motion preferences
- **Zero Dependencies**: No external libraries required

## File Structure Context

This is a complete countdown timer application with:
- **Core Files**: `index.html`, `styles.css`, `countdown.js` - the main application
- **Documentation**: Comprehensive `README.md` with deployment and embedding instructions
- **Examples**: `example.html` demonstrating various configurations and use cases
- **Git Repository**: Ready for GitHub Pages deployment

**URL Parameters for Configuration:**
- `date=YYYY-MM-DD` - Target date
- `time=HH:MM:SS` - Target time (24-hour format)
- `timezone=TIMEZONE` - Timezone identifier (e.g., America/New_York)
- `title=TITLE` - Display title (URL encoded)
- `theme=THEME` - Visual theme

**Perfect for Moodle Integration:**
The countdown timer is specifically designed for embedding in Moodle courses using iframe tags, with automatic iframe detection and responsive behavior.
