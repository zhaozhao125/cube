module.exports = {
  plugins: {
    autoprefixer: {},
    // css转化rem
    // 'postcss-px2rem': {
    //   remUnit: 37.5
    // }
    'postcss-px-to-viewport': {
      'viewportWidth': 375
      // 'minPixelValue': 1,
      // 'viewportUnit': 'vw'
    }
  }
}
