process.env.TZ = 'UTC'
module.exports = {
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
    '.+\\.(css|styl|less|sass|scss|ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        'jest-css-modules-transform',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  collectCoverageFrom: [
    '**/src/components/**/*.{js,jsx,ts,tsx}',
    '**/src/utils/*.{js,jsx,ts,tsx}',
    '**/src/share/**/*.{js,jsx,ts,tsx}',
    '**/src/pages/**/components/**/*.{js,jsx,ts,tsx}',
    '**/src/pages/**/*.{js,jsx,ts,tsx}',
    '!**/src/assets/**',
    '!**/src/utils/request.{js,jsx,ts,tsx}',
    '!**/src/typed/**',
    '!**/src/game/resource/**',
  ],
  coverageThreshold: {
    global: {
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0,
    },
  },
  collectCoverage: true,
  coverageReporters: ['clover', 'html', 'text-summary'],
}
