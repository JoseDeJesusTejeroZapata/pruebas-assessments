const Config: IConfig = {
   lifeFlexApi: {
      urlBase: '',
      apiKey: '',
   },
};

export default Config;
interface IConfig {
   lifeFlexApi: {
      urlBase: string;
      apiKey: string;
   };
}
