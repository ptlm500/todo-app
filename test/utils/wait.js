/**
 * Returns a promise set to resolve at the time set by amount
 * @param {number} [amount=0] time to wait for
 */
const wait = (amount = 0) =>
  new Promise(resolve => setTimeout(resolve, amount));

export default wait;
