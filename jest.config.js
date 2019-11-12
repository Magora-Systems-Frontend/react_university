module.exports = {
  moduleNameMapper: {
    "\\.(css|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
    ".+\\.(svg|png|jpg)$": "<rootDir>/__mocks__/fileMock.js"
  },
};
