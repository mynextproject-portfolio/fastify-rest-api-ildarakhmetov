// Global test setup
jest.setTimeout(10000);

// Mock environment variables if needed
process.env.NODE_ENV = 'test';
process.env.PORT = '0'; // Use random port for testing 