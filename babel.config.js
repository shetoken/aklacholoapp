module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
      'nativewind/babel',
    ],
    // NOTE: the react-native-reanimated babel plugin is added automatically by
    // both babel-preset-expo and nativewind/babel, so we don't list it here.
  };
};
