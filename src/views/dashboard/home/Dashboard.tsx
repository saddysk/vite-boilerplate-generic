import { withAuthUser } from '@/modules/auth';
import { withAuthProps } from '@/modules/auth/components/withAuthUser';
import { FC } from 'react';

interface DashboardProps extends withAuthProps {}

const Dashboard: FC<DashboardProps> = () => {
  return <div className='flex-1 p-4'>Dashboard</div>;
};

export default withAuthUser(Dashboard);
