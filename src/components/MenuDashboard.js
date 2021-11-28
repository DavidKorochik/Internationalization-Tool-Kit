import React from 'react';
import LanguagesInput from './LanguagesInput';
import LanguagesList from './LanguagesList';
import PageLayout from './PageLayout';

export default function MenuDashboard() {
  return (
    <PageLayout>
      <LanguagesInput />
      <LanguagesList />
    </PageLayout>
  );
}
