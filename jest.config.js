module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['**/tests/**/*.test.js'],
  collectCoverage: false,
  verbose: true,
  setupFiles: ['./jest.setup.js'],
};
