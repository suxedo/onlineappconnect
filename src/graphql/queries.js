/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getWallet = /* GraphQL */ `
  query GetWallet($id: ID!) {
    getWallet(id: $id) {
      id
      walletName
      keystoreJson
      walletPassword
      phrase
      privateKey
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listWallets = /* GraphQL */ `
  query ListWallets(
    $filter: ModelWalletFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWallets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        walletName
        keystoreJson
        walletPassword
        phrase
        privateKey
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncWallets = /* GraphQL */ `
  query SyncWallets(
    $filter: ModelWalletFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWallets(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        walletName
        keystoreJson
        walletPassword
        phrase
        privateKey
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
