import React from 'react';
import SignIn from './components/SignIn';
import { Metadata } from 'next';
import MainHeader from '@/components/theme/MainHeader';
import MainFooter from '@/components/theme/MainFooter';

export const metadata: Metadata = { title: 'Sign In' };

const SignInPage = () => {
  return (
    <>
      <MainHeader />
      <SignIn />
      <MainFooter />
    </>
  );
};

export default SignInPage;
