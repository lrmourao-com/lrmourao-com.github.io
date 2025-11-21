import { Liquid } from 'liquidjs';
import path from 'path';
import { fileURLToPath } from 'url';
import type { EmailTemplateData } from '../types/email-types.js';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Liquid engine
const engine = new Liquid({
  root: path.join(__dirname, '../templates/emails'),
  extname: '.liquid',
  cache: process.env.NODE_ENV === 'production', // Enable caching in production
  strictFilters: false, // Allow filters to fail gracefully
  strictVariables: false, // Allow undefined variables
});

/**
 * Renders an email template with the provided data
 * @param templateName - Name of the template file (without .liquid extension)
 * @param data - Data to pass to the template
 * @returns Rendered HTML string
 */
export async function renderEmailTemplate(
  templateName: string,
  data: EmailTemplateData
): Promise<string> {
  try {
    const html = await engine.renderFile(templateName, data);
    return html;
  } catch (error) {
    console.error(`Error rendering email template "${templateName}":`, error);
    throw new Error(`Failed to render email template: ${templateName}`);
  }
}

/**
 * Renders an email template from a string (useful for testing or dynamic templates)
 * @param templateString - Template string with Liquid syntax
 * @param data - Data to pass to the template
 * @returns Rendered HTML string
 */
export async function renderEmailString(
  templateString: string,
  data: EmailTemplateData
): Promise<string> {
  try {
    const html = await engine.parseAndRender(templateString, data);
    return html;
  } catch (error) {
    console.error('Error rendering email template string:', error);
    throw new Error('Failed to render email template from string');
  }
}

/**
 * Checks if a template file exists
 * @param templateName - Name of the template file (without .liquid extension)
 * @returns true if template exists, false otherwise
 */
export async function templateExists(templateName: string): Promise<boolean> {
  try {
    await engine.renderFile(templateName, {});
    return true;
  } catch {
    return false;
  }
}

export { engine as liquidEngine };
