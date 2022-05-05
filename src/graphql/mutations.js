/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createWallet = /* GraphQL */ `
  mutation CreateWallet(
    $input: CreateWalletInput!
    $condition: ModelWalletConditionInput
  ) {
    createWallet(input: $input, condition: $condition) {
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
export const updateWallet = /* GraphQL */ `
  mutation UpdateWallet(
    $input: UpdateWalletInput!
    $condition: ModelWalletConditionInput
  ) {
    updateWallet(input: $input, condition: $condition) {
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
export const deleteWallet = /* GraphQL */ `
  mutation DeleteWallet(
    $input: DeleteWalletInput!
    $condition: ModelWalletConditionInput
  ) {
    deleteWallet(input: $input, condition: $condition) {
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
