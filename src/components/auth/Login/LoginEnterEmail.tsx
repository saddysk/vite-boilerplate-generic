// import { FC, useState } from 'react';
// import * as Yup from 'yup';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import { ReactComponent as IconMail } from '@/assets/icons/icon-mail.svg';
// import { ReactComponent as ArrowNarrowLeft } from '@/assets/icons/arrow-narrow-left.svg';
// import Icon from '@ui/Icon/Icon';
// import Input from '@ui/Input/Input';
// import Button from '@ui/Button/Button';
// import { useMutation } from '@tanstack/react-query';
// import { ErrorDto, LoginEmailOtpRequestDto, LoginEmailOtpResponseDto } from '@/api/data-contracts';
// import { AxiosError } from 'axios';
// import { authApi } from '@/api';
// import { useLogin } from './LoginProvider';

import { FC } from 'react';

// const initialData: LoginEmailOtpRequestDto = {
//   email: '',
// };

// const validations = Yup.object({
//   email: Yup.string().email('Please enter a valid email address').required('Email Address is required'),
// });

export interface LoginEnterEmailProps {
  onSuccess: (data: any) => void;
}

const LoginEnterEmail: FC<LoginEnterEmailProps> = ({ onSuccess }) => {
  // const [error, setError] = useState('');
  // const { setMethod, setEmail } = useLogin();

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  //   getValues,
  // } = useForm<typeof initialData>({
  //   defaultValues: initialData,
  //   resolver: yupResolver(validations),
  // });

  // const { mutate, isLoading } = useMutation(authApi.authControllerLoginEmailOtp, {
  //   onSuccess: ({ data }) => {
  //     setError(null);
  //     onSuccess(data);
  //   },
  //   onError: (error: AxiosError<ErrorDto>) => {
  //     if (error.response.status === 409) {
  //       // setError('409');
  //       setEmail(getValues('email'));
  //       setMethod('early-access');
  //     } else {
  //       setError(error.response?.data?.message as unknown as string);
  //     }
  //     // toast.error(error.response.data.detail);
  //   },
  // });

  // const onSubmit = (data: LoginEmailOtpRequestDto) => {
  //   setError(null);
  //   mutate(data);
  // };

  return (
    <>
      Enter Email Input
      {/* Start Sign in with your Email screen
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='absolute left-6 top-6 cursor-pointer' onClick={() => setMethod('wallet')}>
          <Icon size={24} icon={ArrowNarrowLeft} />
        </div>
        <div className='mx-auto mb-5 flex h-[55px] w-[55px] items-center justify-center rounded-full bg-indigo-50'>
          <Icon size={20} icon={IconMail} />
        </div>
        <h2 className='text-xl mb-6 font-bold text-gray-900'>Sign in with your Email</h2>
        <Input
          autoFocus
          type='text'
          iconLeft={IconMail}
          className='block w-full'
          placeholder='Enter your email'
          autoComplete='email'
          autoCorrect='off'
          spellCheck='false'
          {...register('email')}
          error={errors['email']?.message}
        />

        {error &&
          (error === '409' ? (
            <div className='min-w-md bg-indigo-200/20 text-indigo-800 rounded-lg border border-indigo-700/80 py-4 px-6 mt-4'>
              Hi! Thanks for your interest. At this moment, access to our offering is limited to invite only
              basis. However, we have now added you to our waitlist. You should receive an email when your
              early access is granted/available.
            </div>
          ) : (
            <div className='min-w-md bg-red-400/10 text-red-600 rounded-lg border border-red-700/80 py-4 px-6 mt-4'>
              {error}
            </div>
          ))}

        <Button type='submit' className='mt-6 w-full' size='lg' isLoading={isLoading}>
          Continue →
        </Button>
      </form> */}
      {/* End Sign in with your Email screen */}
    </>
  );
};

export default LoginEnterEmail;
