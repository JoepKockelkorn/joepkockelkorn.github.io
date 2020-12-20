module.exports = (isProd) => ({
    prefix: '',
    purge: {
      enabled: isProd,
      content: [
        './apps/**/*.html',
        './apps/**/*.ts',
        './libs/**/*.html',
        './libs/**/*.ts',
      ]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        fontFamily: {
          'reem': ['Reem Kufi', 'sans-serif']
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
});
