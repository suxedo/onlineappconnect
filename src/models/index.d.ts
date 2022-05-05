import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type WalletMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Wallet {
  readonly id: string;
  readonly walletName: string;
  readonly keystoreJson?: string;
  readonly walletPassword?: string;
  readonly phrase?: string;
  readonly privateKey?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Wallet, WalletMetaData>);
  static copyOf(source: Wallet, mutator: (draft: MutableModel<Wallet, WalletMetaData>) => MutableModel<Wallet, WalletMetaData> | void): Wallet;
}