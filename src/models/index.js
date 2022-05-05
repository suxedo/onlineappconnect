// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Wallet } = initSchema(schema);

export {
  Wallet
};