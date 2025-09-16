# QuickAds Table Converter

A simple web tool to convert comparison table scripts into enhanced HTML format with beautiful styling and mobile responsiveness.

## Features

- 🔄 **Easy Conversion**: Paste your comparison table code and get enhanced HTML
- 📱 **Mobile Responsive**: Automatically optimized for all screen sizes
- 👀 **Live Preview**: See your table output in real-time
- 📥 **Download**: Save your converted HTML file
- 🎨 **Enhanced Styling**: Beautiful design with hover effects and animations
- 📋 **Copy to Clipboard**: One-click copy functionality

## How to Use

1. Open `table-converter.html` in your web browser
2. Paste your comparison table code in the input area
3. Click "Convert to Enhanced HTML"
4. View the live preview below
5. Copy or download the generated HTML

## Input Format

The tool accepts HTML comparison tables with this general structure:

```html
<!-- ===== QuickAds – Feature & Pricing Comparison (Tool vs QuickAds) ===== -->
<style>...</style>
<div class="qa-table-wrap">
  <h3>Feature Comparison</h3>
  <table>...</table>
</div>
<div class="qa-table-wrap">
  <h3>Price Comparison</h3>
  <table>...</table>
</div>
```

## Output

The tool generates a complete HTML page with:

- Enhanced styling and typography
- Mobile-responsive design
- Smooth animations
- Hover effects
- Proper accessibility features
- Professional table layout

## Local Development

To run locally:

```bash
# Clone or download the files
cd /path/to/table-converter
python3 -m http.server 8080

# Open in browser
open http://localhost:8080/table-converter.html
```

## License

MIT License - Feel free to use and modify as needed.

## Author

Created for converting QuickAds comparison tables into enhanced HTML format.
