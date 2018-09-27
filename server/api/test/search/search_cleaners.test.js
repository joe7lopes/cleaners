const request = require('supertest');
const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const admin = require('firebase-admin');
const test = require('firebase-functions-test')();



describe('Cloud Functions', ()=> {
    let myFunctions, adminInitStub;

    before(() => {
        adminInitStub = sinon.stub(admin, 'initializeApp');
        myFunctions = require('../../index');
    });

    after(()=>{
        adminInitStub.restore();
        test.cleanup();
    });



    describe('Search Cleaners', () => {

        let oldDatabase;

        before(() => {
            oldDatabase = admin.database;
        });

        after(()=>{
            admin.database = oldDatabase;
        });


        it('should search by price', (done)=>{

            const refParam = 'users';
            const pushParam = {
                firstName: 'Alice',
                lastName: 'moure',
                price:'100',
                type: 'CLEANER',
                isNew: false
            }

            const databaseStub = sinon.stub();
            const refStub = sinon.stub();
            const pushStub = sinon.stub();

            Object.defineProperty(admin, 'database', {get: () =>databaseStub});
            databaseStub.returns({ref: refStub});
            refStub.withArgs(refParam).returns({push: pushStub});
            pushStub.withArgs(pushParam).returns(Promise.resolve({ref: 'new_ref'}));

            const price = 100;
            request(myFunctions.api)
                .get(`/search/cleaners?price=${price}`)
                .end((err, res)=>{
                    if(err){
                        console.log(err);
                        done();
                    }
                    expect(res.statusCode).to.equal(200);
                    expect(res.body).to.equal("100");
                    done();
                });
        });



    });








});

