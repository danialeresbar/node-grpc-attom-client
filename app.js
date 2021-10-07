const path = require('path');
const PROTO_PATH = path.resolve(__dirname, './model.proto');

const GRPCClient = require('node-grpc-client');

const myClient = new GRPCClient(PROTO_PATH, 'provider.home.info.v1', 'ProviderHomeInfoAPI', 'localhost:50051');

const dataToSend = {
    address_1: '7898 Capeside Way',
    address_2: 'Jacksonville FL 32222'
};

(async function () {

    const response1 = await myClient.getBasicInfoSync(dataToSend);
    console.log('The answer of request 1: ', response1);

})();