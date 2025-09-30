// import { LoginEmailOtpResponseDto } from '@/api/data-contracts';
// import { FC, useState } from 'react';
// import OTPVerification from './OTPVerification';
// import LoginEnterEmail from './LoginEnterEmail';

import { FC } from 'react';

export interface LoginWithEmailProps {}

const LoginWithEmail: FC<LoginWithEmailProps> = () => {
  // const [showEnterEmail, setShowEnterEmail] = useState(true);
  // const [data, setData] = useState<LoginEmailOtpResponseDto>({
  //   email: null,
  //   sid: null,
  // });

  // if (showEnterEmail) {
  //   return (
  //     <LoginEnterEmail
  //       onSuccess={(data: LoginEmailOtpResponseDto) => {
  //         setData(data);
  //         setShowEnterEmail(false);
  //       }}
  //     />
  //   );
  // } else {
  //   return <OTPVerification data={data} />;
  // }

  return <>Login With Email</>;
};

export default LoginWithEmail;
