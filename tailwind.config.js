module.exports = {
  purge: ["./public/index.html", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
