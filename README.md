# Airport Board Countdown Timer

A beautiful, animated countdown timer that mimics the classic airport arrivals board flip display. Perfect for embedding in Moodle courses, websites, or displaying on screens.

![Airport Board Style Countdown](https://img.shields.io/badge/Style-Airport%20Board-yellow) ![Responsive](https://img.shields.io/badge/Design-Responsive-green) ![Zero%20Cost%20Hosting](https://img.shields.io/badge/Hosting-Free-blue)

## 🌟 Features

- **Classic Airport Board Animation**: Realistic flip animations for each digit
- **Timezone Support**: Configure countdown for any timezone
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **iframe Ready**: Optimized for embedding in Moodle and other platforms
- **URL Configuration**: Easy setup via URL parameters
- **Zero-Cost Hosting**: Deploy free on GitHub Pages
- **Accessibility**: Supports reduced motion preferences

## 🚀 Quick Start

### Basic Usage
```html
<iframe src="https://yourusername.github.io/countdown/" width="800" height="300" frameborder="0"></iframe>
```

### With Configuration
```html
<iframe src="https://yourusername.github.io/countdown/?date=2024-12-31&time=23:59:59&title=New%20Year%20Countdown&timezone=America/New_York" width="800" height="300" frameborder="0"></iframe>
```

## 📋 URL Parameters

Configure your countdown timer using these URL parameters:

| Parameter | Description | Example | Default |
|-----------|-------------|---------|----------|
| `date` | Target date (YYYY-MM-DD) | `2024-12-31` | Next New Year |
| `time` | Target time (HH:MM:SS) | `23:59:59` | `00:00:00` |
| `timezone` | Timezone identifier | `America/New_York` | `UTC` |
| `title` | Display title | `New%20Year%20Countdown` | `Countdown Timer` |
| `theme` | Color theme | `dark` | `default` |

### Example URLs

**New Year Countdown (UTC):**
```
https://yourusername.github.io/countdown/?date=2024-12-31&time=23:59:59&title=New%20Year%20Countdown
```

**Course Deadline (Eastern Time):**
```
https://yourusername.github.io/countdown/?date=2024-05-15&time=23:59:00&timezone=America/New_York&title=Final%20Project%20Due
```

**Event Countdown (Pacific Time):**
```
https://yourusername.github.io/countdown/?date=2024-07-04&time=18:00:00&timezone=America/Los_Angeles&title=Independence%20Day%20Celebration
```

## 🎓 Moodle Integration

### Method 1: HTML Block
1. In your Moodle course, turn on editing
2. Add a "HTML" block
3. Insert the iframe code:

```html
<div style="text-align: center; margin: 20px 0;">
  <iframe src="https://yourusername.github.io/countdown/?date=2024-12-31&time=23:59:59&title=Course%20Deadline&timezone=America/New_York" 
          width="100%" 
          height="300" 
          frameborder="0" 
          style="max-width: 800px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
  </iframe>
</div>
```

### Method 2: Page Resource
1. Create a new "Page" resource in your course
2. In the content editor, switch to HTML view
3. Insert the iframe code
4. Adjust width/height as needed

### Method 3: Label Activity
1. Add a "Label" activity to your course
2. Insert the iframe code in the label content
3. Use for inline countdown displays

## 🏗️ Deployment to GitHub Pages

### Option 1: Direct Upload
1. Create a new repository on GitHub
2. Upload `index.html`, `styles.css`, and `countdown.js`
3. Go to repository Settings → Pages
4. Select "Deploy from a branch" → "main" branch
5. Your countdown will be available at `https://yourusername.github.io/repositoryname/`

### Option 2: Fork and Deploy
1. Fork this repository
2. Enable GitHub Pages in your fork's settings
3. Your countdown will be available immediately

## 🎨 Customization

### Themes
Currently supports the default airport board theme. Additional themes can be added by modifying the CSS.

### Size Adjustments
The countdown automatically adapts to different container sizes:
- **Desktop**: Full-size display with horizontal layout
- **Tablet**: Medium size with adjusted spacing  
- **Mobile**: Compact vertical layout

### Custom Styling
You can override styles by adding CSS after the iframe or by modifying `styles.css`:

```css
/* Example: Custom background for iframe container */
iframe {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 15px;
}
```

## ⚙️ Technical Details

### Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Performance
- Automatic pause/resume when tab is hidden
- Optimized animations with CSS transforms
- Minimal JavaScript footprint
- No external dependencies

### Accessibility
- Respects `prefers-reduced-motion` settings
- High contrast colors
- Semantic HTML structure
- Keyboard navigation friendly

## 🔧 Development

### Local Development
```bash
# Clone the repository
git clone https://github.com/yourusername/countdown.git

# Navigate to directory  
cd countdown

# Open in browser (or use a local server)
open index.html

# For development with live reload, use a simple server
python3 -m http.server 8000
# Then open http://localhost:8000
```

### File Structure
```
countdown/
├── index.html          # Main HTML structure
├── styles.css          # Airport board styling and animations
├── countdown.js        # Countdown logic and configuration
└── README.md           # This documentation
```

## 📱 Responsive Breakpoints

| Screen Size | Layout | Digit Size | Behavior |
|-------------|--------|------------|----------|
| > 768px | Horizontal | Large (60x80px) | Full desktop experience |
| 481-768px | Vertical | Medium (45x60px) | Tablet-friendly |
| ≤ 480px | Compact | Small (35x50px) | Mobile-optimized |

## 🐛 Troubleshooting

**Countdown shows wrong time:**
- Check timezone parameter
- Ensure date format is YYYY-MM-DD

**Not displaying in iframe:**
- Verify HTTPS is being used
- Check iframe dimensions
- Ensure URL is correctly formatted

**Animations not working:**
- User may have reduced motion enabled
- Check browser compatibility
- Verify CSS is loading correctly

## 📄 License

MIT License - feel free to use, modify, and distribute as needed.

## 🤝 Contributing

Pull requests are welcome! Areas for contribution:
- Additional color themes
- Timezone detection improvements  
- Sound effects for countdown completion
- Additional animation styles

---

**Made with ❤️ for educators and event organizers**
