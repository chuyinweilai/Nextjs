module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 1200,
      unitPrecision: 5,
      // exclude: [/\/node_modules\//],
      include: /\/pages\//,    // 如果设置了include，那将只有匹配到的文件才会被转换，
      landscapeUnit: 'vw',
    }
  }
}