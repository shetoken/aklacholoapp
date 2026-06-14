module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
      'nativewind/babel',
    ],
    // Reanimated 4 uses the react-native-worklets babel plugin (not the old
    // react-native-reanimated/plugin). babel-preset-expo (SDK 54) adds it
    // automatically when react-native-worklets is installed, so we don't list
    // it manually. nativewind/babel (css-interop 0.2.x) also references
    // react-native-worklets/plugin, which now resolves because Reanimated 4
    // brings react-native-worklets as a dependency.
  };
};
