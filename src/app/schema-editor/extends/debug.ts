export const logProperty = ( target: object, propertyKey: string | symbol) => {
  // tslint:disable-next-line:no-console
  console.info('logProperty', target);
  console.info('logProperty', propertyKey);
};

export const logClass = (config?: any) => {
  return (Constructor: any): any =>  {
    return class extends Constructor {
      constructor( ...args: any[] ) {
        super(...args);
        console.log('logClass this', this);
      }
    };
  };
};
