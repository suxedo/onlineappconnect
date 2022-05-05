export const schema = {
    "models": {
        "Wallet": {
            "name": "Wallet",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "walletName": {
                    "name": "walletName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "keystoreJson": {
                    "name": "keystoreJson",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "walletPassword": {
                    "name": "walletPassword",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "phrase": {
                    "name": "phrase",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "privateKey": {
                    "name": "privateKey",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Wallets",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        }
    },
    "enums": {},
    "nonModels": {},
    "version": "3400652331c6208a0bd2cd75a79b27e6"
};