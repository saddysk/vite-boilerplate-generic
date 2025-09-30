import { FC } from 'react';
// import * as logo from '@/assets/images/1811labs.svg';
import LoginWithEmail from '@/components/auth/Login/LoginWithEmail';
import LoginWithGoogle from '@/components/auth/Login/LoginWithGoogle';
import { useLogin } from '@/components/auth/Login/LoginProvider';

interface LoginProps {}

export declare type LoginMethod = 'email' | 'google';

const Login: FC<LoginProps> = () => {
  const { state } = useLogin();

  return (
    <div className='relative flex h-screen min-h-[600px] w-full items-center justify-center sm:px-4'>
      <div className='bg-gray-900/4 absolute bottom-0 h-1/2 w-full' />
      <div className='relative flex w-full max-w-[540px] flex-col items-center'>
        <div className='mb-16'>
          {/* <img src={logo.default} alt='Logo' /> */}
          Logo
        </div>
        <div className='ring-gray-900/4 relative w-full rounded-2xl bg-white p-8 text-center shadow-sm ring-1 sm:p-6'>
          {state.method === 'email' && <LoginWithEmail />}
          {state.method === 'google' && <LoginWithGoogle />}
        </div>
        <div className='mt-4'>
          {!state.showFooterMessage && (
            <ul className='flex'>
              <li className='text-sm text-gray-900'>
                © 1811 Labs<span className='mx-1'>·</span>
              </li>
              <li className='text-sm text-gray-900'>
                <a href='' className='hover:underline'>
                  Contact
                </a>
                <span className='mx-1'>·</span>
              </li>
              <li className='text-sm text-gray-900'>
                <a
                  href='https://1811labs.com/privacy-policy'
                  target='_blank'
                  rel='noreferrer'
                  className='hover:underline'>
                  Privacy & terms
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
