import { Page404View } from '@/pages/page404/Page404View';
import { Route, Routes } from 'react-router-dom';

interface Props {
   children: JSX.Element[] | JSX.Element;
}
function RoutesWithNotFound({ children }: Props) {
   return (
      <Routes>
         {children}
         <Route path="*" element={<Page404View />} />
      </Routes>
   );
}
export default RoutesWithNotFound;