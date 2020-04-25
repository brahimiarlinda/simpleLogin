// in this file you can append custom step methods to 'I' object
const { adminCredentials } = require('./constants');

module.exports = () => {
  return actor({
    loginAdmin() {
      this.amOnPage('/');
      this.fillField('#email', adminCredentials.USERNAME);
      this.fillField('#pass', adminCredentials.PASSWORD);
      this.doubleClick('#u_0_b');
    }
  });
}