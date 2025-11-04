# Content Management Guide

This directory contains all the translatable content for the website, organized by language.

## Structure

```
content/
├── index.ts    # TypeScript interfaces and content aggregator
├── pt.ts       # Portuguese translations (default language)
└── en.ts       # English translations
```

## How It Works

### Language Files

Each language has its own file that exports a single object with all translations:

**`pt.ts`** - Portuguese content
```typescript
export const pt = {
  welcome: { ... },
  services: { ... },
  // ... all Portuguese content
};
```

**`en.ts`** - English content
```typescript
export const en = {
  welcome: { ... },
  services: { ... },
  // ... all English content
};
```

### Index File

**`index.ts`** manages everything:
- Imports all language files
- Defines TypeScript interfaces for type safety
- Exports the content object and types

```typescript
import { pt } from './pt';
import { en } from './en';

export type Language = 'pt' | 'en';
export interface Content { ... }
export const content: Record<Language, Content> = { pt, en };
```

## Editing Content

### To Update Existing Content

1. **For Portuguese**: Edit `pt.ts`
2. **For English**: Edit `en.ts`
3. Save the file - TypeScript will validate the structure

### To Add New Content

1. **Update the interface** in `index.ts`:
   ```typescript
   export interface Content {
     // ... existing content ...
     newSection: {
       title: string;
       description: string;
     };
   }
   ```

2. **Add to Portuguese** (`pt.ts`):
   ```typescript
   export const pt = {
     // ... existing content ...
     newSection: {
       title: 'Novo Título',
       description: 'Nova descrição',
     },
   };
   ```

3. **Add to English** (`en.ts`):
   ```typescript
   export const en = {
     // ... existing content ...
     newSection: {
       title: 'New Title',
       description: 'New description',
     },
   };
   ```

4. TypeScript will ensure both languages match the structure!

## Adding a New Language

### Step 1: Create the Language File

Create `es.ts` for Spanish:

```typescript
export const es = {
  welcome: {
    title: 'Bienvenido.',
    intro: 'LR MOURÃO, desde 2010 tiene como objetivo...',
    // ... complete Spanish translation
  },
  // ... all sections
};
```

### Step 2: Update index.ts

```typescript
import { pt } from './pt';
import { en } from './en';
import { es } from './es'; // Add import

export type Language = 'pt' | 'en' | 'es'; // Add language

export const content: Record<Language, Content> = {
  pt,
  en,
  es, // Add to content
};
```

### Step 3: Create the Route

Create `app/es/page.tsx`:

```typescript
import PageContent from '../components/PageContent';

export default function SpanishPage() {
  return <PageContent lang="es" />;
}
```

## Content Structure

### Current Sections

```
content
├── welcome
│   ├── title
│   ├── intro
│   ├── services (array)
│   └── cta
├── services
│   ├── title
│   ├── welding
│   ├── coordination
│   ├── training
│   └── consultancy
├── advantages
│   ├── title
│   ├── intro
│   ├── qualityControl
│   └── professionalism
├── contact
│   ├── title
│   ├── intro
│   └── phone
├── nav
│   ├── home
│   ├── services
│   ├── advantages
│   └── contact
└── backToTop
```

## Best Practices

### 1. Keep Structure Identical

Both languages must have the exact same structure:

```typescript
// ✅ Good
pt: { welcome: { title: '...', intro: '...' } }
en: { welcome: { title: '...', intro: '...' } }

// ❌ Bad - missing intro in English
pt: { welcome: { title: '...', intro: '...' } }
en: { welcome: { title: '...' } }
```

### 2. Use Arrays for Lists

```typescript
// ✅ Good
services: ['Item 1', 'Item 2', 'Item 3']

// ❌ Bad
service1: 'Item 1',
service2: 'Item 2',
service3: 'Item 3'
```

### 3. Keep Related Content Together

Group related content in nested objects:

```typescript
training: {
  title: 'Training',
  intro: 'Introduction text',
  processes: [...],
  materials: [...]
}
```

### 4. Consistent Naming

Use the same keys across all languages:
- Use English for key names
- Use lowercase with camelCase
- Be descriptive but concise

## Type Safety

TypeScript ensures:
- All languages have the same structure
- No missing translations
- Correct data types throughout
- Compile-time error checking

If you add a field to one language but not another, you'll get an error at build time.

## Using Content in Components

```typescript
import { Language, content } from '../content';

function MyComponent({ lang }: { lang: Language }) {
  const t = content[lang];
  
  return (
    <div>
      <h1>{t.welcome.title}</h1>
      <p>{t.welcome.intro}</p>
      <ul>
        {t.welcome.services.map(service => (
          <li key={service}>{service}</li>
        ))}
      </ul>
    </div>
  );
}
```

## Benefits of This Structure

✅ **Separation of Concerns**: Each language in its own file  
✅ **Easy to Find**: Translators work on one file  
✅ **Type Safety**: TypeScript validates everything  
✅ **Scalable**: Easy to add more languages  
✅ **Maintainable**: Clear structure and organization  
✅ **No Duplication**: Shared interface ensures consistency  

## Troubleshooting

### Build Error: Missing Property

**Error**: `Property 'xyz' is missing in type...`

**Solution**: Add the missing property to the language file that's missing it.

### Build Error: Type Mismatch

**Error**: `Type 'string' is not assignable to type 'string[]'`

**Solution**: Check the interface definition and make sure your data matches (array vs string, etc.)

### Content Not Updating

1. Check you saved the file
2. Restart the dev server: `npm run dev`
3. Clear browser cache
4. Check for TypeScript errors in terminal

---

For more information, see the main [README.md](../README.md) file.

