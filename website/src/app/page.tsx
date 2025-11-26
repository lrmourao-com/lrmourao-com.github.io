import LRMouraoPage from './[lang]/page';
import { Metadata } from 'next';
import { I18nProvider } from '@/components/I18nProvider';
import { constructMetadata } from '@/lib/site-metadata';

export async function generateMetadata(): Promise<Metadata> {
  return constructMetadata({ lang: 'pt', pageKey: 'index' });
}

export default function RootPage() {
  return (
    <I18nProvider lang="pt">
      <LRMouraoPage params={Promise.resolve({ lang: 'pt' })} />
    </I18nProvider>
  );
}
