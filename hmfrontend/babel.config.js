module.exports = {
  presets: ['module:@react-native/babel-preset'],
  env: {
    production: {
      // react-native paper plugin
      plugins: ['react-native-paper/babel'],
    },
  },
};
