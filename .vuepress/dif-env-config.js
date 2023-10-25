const args = process.argv.slice(2); // 去除前两个默认参数
let version;

// 遍历命令行参数，查找--version参数并获取其值
args.forEach(arg => {
  if (arg.startsWith('--version=')) {
    version = arg.split('=')[1];
  }
});

let OauthConfig = {
    clientId: '',
    clientSecret: ''
};

// 根据版本选择不同的主机
if (version === 'development') {
  // 使用开发环境主机
  OauthConfig.clientId = '5b411ba555a1d5c4e52d';
  OauthConfig.clientSecret = '78e3e61ef1a3deb4824990a3fc869ca7ce587e2c';
} else if (version === 'production') {
    OauthConfig.clientId = '5b411ba555a1d5c4e52d';
    OauthConfig.clientSecret = '78e3e61ef1a3deb4824990a3fc869ca7ce587e2c';
}

module.exports = {
    OauthConfig
}