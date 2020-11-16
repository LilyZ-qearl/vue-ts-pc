/*
 * @Description: 
 * @Version: 2.0
 * @Autor: zhangyi
 * @Date: 2020-11-04 13:57:42
 * @LastEditors: zhangyi
 * @LastEditTime: 2020-11-04 18:00:23
 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const resolve = dir => {
  return path.join(__dirname, dir)
}

// 线上打包路径，请根据项目实际线上情况
const PUBLIC_URL = process.env.NODE_ENV === 'production' ? './' : '/'


module.exports = {
	publicPath : PUBLIC_URL,
	outputDir : 'dist',
	assetsDir : '',
	indexPath : 'index.html',
	pages : undefined,
	productionSourceMap : false,
	configureWebpack: config => {
		if (process.env.NODE_ENV === "production") {
			// 为生产环境修改配置...
			config.mode = "production";
		} else {
			// 为开发环境修改配置...
			config.mode = "development";
		}
	
		Object.assign(config, {
			// 开发生产共同配置
			resolve: {
				extensions: [".js", ".vue", ".json", ".ts", ".tsx"],
			},
			alias: {
				"@": path.resolve(__dirname, "./src"),
			}
		});
	},
	css : {
		requireModuleExtension: false,
		extract: true,
		sourceMap: false,
		loaderOptions: {} // css预设器配置项
	},
	devServer : {
		port: 3000,
		// proxy: { //多个代理
		// 	'/api': {
		// 	target: '',   //代理接口
		// 	changeOrigin: true,
		// 	pathRewrite: {
		// 		'^/api': '/'    //代理的路径
		// 	}
		// },
		// "/foo": {
		// 	target: "",
		// 	ws: true,
		// 	changeOrigin: true,
		// 	pathRewrite: {
		// 	'^/foo': '/'
		// 		}
		// 	}
		// }
	},
};