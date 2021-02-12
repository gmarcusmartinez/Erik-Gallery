import devKeys from './dev';
import prodKeys from './prod';

let keys: any;
if (process.env.NODE_ENV === 'production') keys = prodKeys;
else keys = devKeys;

export default keys;
