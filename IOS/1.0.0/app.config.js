module.exports = ({ config }) => {
  const mapsKey = process.env.GOOGLE_MAPS_API_KEY;
  return {
    ...config,
    plugins: [
      ...(config.plugins ?? []),
      'expo-sharing',
      ...(mapsKey ? [["react-native-maps", { androidGoogleMapsApiKey: mapsKey, iosGoogleMapsApiKey: mapsKey }]] : []),
    ],
  };
};
