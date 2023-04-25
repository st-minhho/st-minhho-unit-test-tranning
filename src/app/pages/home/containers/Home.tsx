import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Home = (): JSX.Element => {
  const { t } = useTranslation('common');
  return (
    <>
      <div>{t('pages.homepage')}</div>
      <Link to={'/users'}>Users Page</Link>
    </>
  );
};

export default Home;
