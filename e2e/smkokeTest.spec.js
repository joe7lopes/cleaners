const {screenId} = require('../cleaners/tests');

describe('Smoke tests', () => {

  before(async ()=>{
   await device.relaunchApp({delete: true});
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });
  
  it('should show registration screen', async () => {
    await expect(element(by.id(screenId.registration))).toBeVisible();
  });
  
 
});