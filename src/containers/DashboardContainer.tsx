/*
 * WHEN TO USE:
 * ---
 * Dashboard pages
 * Admin panels
 * Any page needing full dashboard UI (sidebar, header, etc.)
 */

import { FC, ReactNode } from 'react';
import AppContainer from './AppContainer';
import Layout from '@/layouts/Layout';
import Header from '@/components/dashboard/Header';
import Sidebar from '@/components/dashboard/Sidebar';
import { Outlet } from 'react-router-dom';
// import { useLocalStorage, createBreakpoint } from 'react-use';

// TODO: In case of any global modal
// const ModalResponsiveNote = loadable(() => import('@/components/dashboard/common/ModalMobileWarning'));

export interface DashboardContainerProps {
  Children: ReactNode;
}

// const useBreakpoint = createBreakpoint();

export const DashboardContainer: FC<DashboardContainerProps> = ({ Children }) => {
  const Child = Children ?? <Outlet />;

  // const [mobileWarning, setMobileWarning] = useLocalStorage('mobileWarning', false);
  // const breakpoint = useBreakpoint();

  // const onCloseMobileWarningModal = () => {
  //   setMobileWarning(true);
  // };

  return (
    <AppContainer>
      <Layout>
        {/* {!mobileWarning && breakpoint === 'tablet' && (
          <ModalResponsiveNote onClose={onCloseMobileWarningModal} />
        )} */}
        <div className='flex w-full flex-col bg-white min-h-screen'>
          <Header />
          <div className='container-lg flex-1'>
            <div className='flex size-full'>
              <Sidebar />
              <div className='flex-1 overflow-y-auto px-8 py-6'>{Child}</div>
            </div>
          </div>
        </div>
      </Layout>
    </AppContainer>
  );
};

export function inDashboardContainer(props: DashboardContainerProps) {
  return <DashboardContainer {...props} />;
}

export default DashboardContainer;
