import { Metadata } from 'next'
import SignUp from './components/SignUp'
import MainHeader from '@/components/theme/MainHeader'
import MainFooter from '@/components/theme/MainFooter'

export const metadata: Metadata = { title: 'Sign Up' }

const SignUpPage = () => {
  return (
    <>
      <MainHeader />
      <SignUp />
      <MainFooter />
    </>
  );
};

export default SignUpPage
