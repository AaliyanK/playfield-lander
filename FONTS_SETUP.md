# Custom Fonts Setup

This project uses custom fonts:

- **Signifier** for main text (headlines, titles)
- **Consolas** for body text (paragraphs, descriptions)

## Adding Your Font Files

1. **Place your font files in the `public/fonts/` directory:**

   For Signifier:

   - `Signifier-Regular.woff2`
   - `Signifier-Medium.woff2`
   - `Signifier-Bold.woff2`

   For Consolas:

   - `Consolas-Regular.woff2`
   - `Consolas-Bold.woff2`

2. **Font file formats:**
   - Use `.woff2` format for best performance
   - If you only have `.ttf` or `.otf` files, convert them to `.woff2` using online tools like:
     - [CloudConvert](https://cloudconvert.com/ttf-to-woff2)
     - [FontSquirrel](https://www.fontsquirrel.com/tools/webfont-generator)

## Using the Fonts in Your Code

### CSS Classes

- Use `font-signifier` for main text (headlines, titles)
- Use `font-consolas` for body text (paragraphs, descriptions)

### Examples:

```jsx
<h1 className="font-signifier text-4xl">Main Headline</h1>
<p className="font-consolas text-base">Body text content</p>
```

### Default Behavior

- The body element uses Signifier by default
- You can override specific elements with `font-consolas` class

## Font Weights Available

**Signifier:**

- `font-normal` (400)
- `font-medium` (500)
- `font-bold` (700)

**Consolas:**

- `font-normal` (400)
- `font-bold` (700)

## Performance Notes

- Fonts are optimized using Next.js `localFont`
- Fonts are preloaded with `display: swap` for better performance
- Only the font weights you actually use will be loaded
