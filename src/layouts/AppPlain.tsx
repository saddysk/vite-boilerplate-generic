import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Layout from './Layout';

const AppPlain: FC = () => {
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
};

export default AppPlain;
