let baseURLCfg =
  process.env.NODE_ENV === 'development'
    ? require('./dev.env')
    : require('./pro.env')

let baseURL = baseURLCfg.default.baseURL
export default baseURL
