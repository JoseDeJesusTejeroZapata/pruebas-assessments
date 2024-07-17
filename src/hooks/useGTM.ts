// import { useEffect, useMemo } from 'react';
// import GTM, { DataLayerArgs, TagManagerArgs } from 'react-gtm-module';

// export interface IUseGTMProps {
//    gtmId?: string;
//    dataLayer?: DataLayerArgs;
//    initialize?: boolean;
// }

// export const trackEvent = (event: string) => {
//    GTM.dataLayer({ dataLayer: { event } });
// };

// const useGTM = ({ gtmId = 'GTM-TXT57QDB', dataLayer, initialize = false }: IUseGTMProps) => {
//    const tagManagerArgs: TagManagerArgs = useMemo(
//       () => ({
//          gtmId,
//          dataLayer,
//       }),
//       [gtmId, dataLayer],
//    );

//    useEffect(() => {
//       if (initialize) GTM.initialize(tagManagerArgs);
//       else GTM.dataLayer({ dataLayer });
//    }, [initialize, dataLayer, tagManagerArgs]);
// };

// export default useGTM;
