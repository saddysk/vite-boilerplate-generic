// import { ReactComponent as Logo } from '@/assets/images/1811labs.svg';

const AppLoading = () => {
  return (
    <div className='min-h-full min-w-screen flex items-center justify-center'>
      <div className='w-[438px] sm:max-w-[438px] sm:w-11/12 p-12 md:p-8 text-center bg-white rounded-xl shadow'>
        <div>
          {/* <Logo className='inline-block h-10 w-auto' /> */}
          Logo
        </div>
        <div>
          <p className='text-base font-medium text-gray-500 my-6'>Welcome to 1811 Labs</p>
        </div>
        <span>Loading...</span>
      </div>
    </div>
  );
};

export default AppLoading;
