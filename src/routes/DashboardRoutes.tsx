// import { inAppContainer } from '@/containers/AppContainer';
import { inDashboardContainer } from '@/containers/DashboardContainer';
import loadable from '@loadable/component';

const Dashboard = loadable(() => import('@/views/dashboard/home/Dashboard'));

export default [
  {
    index: true,
    element: inDashboardContainer({ Children: <Dashboard /> }),
  },
  // For: Reference
  // {
  //   path: 'payment-links',
  //   children: [
  //     {
  //       path: '',
  //       element: inDashboardContainer({ Children: <PaymentLinks /> }),
  //     },
  //     {
  //       path: 'create',
  //       element: inAppContainer(<CreatePaymentLink />),
  //     },
  //     {
  //       path: ':id',
  //       element: inDashboardContainer({ Children: <PaymentLinkDetails /> }),
  //     },
  //     {
  //       path: ':id/edit',
  //       element: inAppContainer(<EditPaymentLink />),
  //     },
  //   ],
  // },
];
