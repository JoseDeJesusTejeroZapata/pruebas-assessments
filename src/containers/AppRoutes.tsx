import { MainLayout } from '@/layouts/MainLayout';
import { PrivateRoutesUser } from '@/models';
import { AccountsView, Assessment2, AssessmentEndView, AssessmentEndView2, DashboardView, Page404View } from '@/pages';
import { Route, Routes } from 'react-router-dom';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path={PrivateRoutesUser.DASHBOARD_CRM} element={<DashboardView />} />
        <Route path={PrivateRoutesUser.ASSESSMENT_VIEW_2} element={<Assessment2 />} />
        <Route path={PrivateRoutesUser.ACCOUNTS_BY_STATUS} element={<AccountsView />} />
        <Route path={PrivateRoutesUser.ASSESSMENT_END_VIEW_1} element={<AssessmentEndView />} />
        <Route path={PrivateRoutesUser.ASSESSMENT_END_VIEW_2} element={<AssessmentEndView2 />} />
      </Route>

      <Route path="*" element={<Page404View />} />
    </Routes>
  );
};
