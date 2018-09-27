const sinon = require('sinon');
const test = require('firebase-functions-test')();
const admin = require('firebase-admin');

let adminInitStub;

before(() => {
    // adminInitStub = sinon.stub(admin, 'initializeApp');
});

after(() => {
    // adminInitStub.restore();
    // test.cleanup();
});
