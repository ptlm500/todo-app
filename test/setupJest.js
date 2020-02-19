// const fetchMock = require('jest-fetch-mock');

// module.exports = () => {
//   fetchMock.enableMocks();
// };

global.fetch = require('jest-fetch-mock');
