import React from 'react';
import LanguagesInput from '../components/languages-page/LanguagesInput';
import LanguagesList from '../components/languages-page/LanguagesList';
import PageLayout from './PageLayout';

export default function MenuDashboard() {
  return (
    <PageLayout>
      <LanguagesInput />
      <LanguagesList />
    </PageLayout>
  );
}
