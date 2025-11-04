import PageContent from '../components/PageContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LR MOURÃO - welding and training',
  description: 'LR MOURÃO - welding and training',
  keywords: 'LR MOURÃO, welding, training',
};

export default function EnglishPage() {
  return <PageContent lang="en" />;
}

