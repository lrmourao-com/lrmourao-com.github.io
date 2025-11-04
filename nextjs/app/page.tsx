import PageContent from './components/PageContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LR MOURÃO - soldadura e formação',
  description: 'LR MOURÃO - soldadura e formação',
  keywords: 'LR MOURÃO, formação, soldadura',
};

export default function Home() {
  return <PageContent lang="pt" />;
}
