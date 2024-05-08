// import { Plugin, defineConfig } from "vite";
// import path, { join } from "path";
// // import setupPlugins from "./vite/plugins";
import dts from "vite-plugin-dts";
// import vue from "@vitejs/plugin-vue";
// import Components from "unplugin-vue-components/vite";
// import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

// export default defineConfig(({ command, mode }) => {
// 	return {
// 		publicPath: "/",
// 		plugins: [
// 			// vue({ reactivityTransform: true }),
// 			vue(),
// 			//生成ts声明文件
// 			dts({
// 				include: "./qc-components",
// 			}),
// 			Components({
// 				resolvers: [AntDesignVueResolver()],
// 			}),
// 		],
// 		//设置别名
// 		resolve: {
// 			alias: {
// 				"@/qc-components": join(__dirname, "./qc-components/"),
// 			},
// 			extensions: [".vue", ".js", ".json", ".ts", ".tsx"], //使用别名省略的后缀名
// 		},
// 		build: {
// 			outDir: "lib", //输出文件名称
// 			lib: {
// 				entry: join(__dirname, "./qc-components/index.ts"), //指定组件编译入口文件
// 				name: "qc-components", //指定打包后全局变量的名字
// 				fileName: (format) => `index.${format}.js`, // 打包后的文件名
// 			}, //库编译模式配置
// 			rollupOptions: {
// 				// 确保外部化处理那些你不想打包进库的依赖
// 				external: ["vue"],
// 				output: {
// 					// 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
// 					globals: {
// 						vue: "Vue",
// 					},
// 				},
// 			}, // rollup打包配置
// 		},
// 	};
// });

import { fileURLToPath, URL } from "node:url";

import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// ant-desing按需引入
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

// 打包体积可视化插件
// import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		// visualizer({ // 生成的分析图文件名，默认stats.html
		//   file: 'stats.html',
		//   open: true // 打包后自动打开分析图
		// }),
		dts({
			include: "./qc-components",
		}),
		AutoImport({
			//安装两行后你会发现在组件中不用再导入ref，reactive等
			imports: ["vue", "vue-router"],
			dts: "src/auto-import.d.ts",
			//ant-design-vue
			resolvers: [AntDesignVueResolver()],
		}),
		Components({
			resolvers: [
				AntDesignVueResolver({
					importStyle: false, // 不动态引入css,这个不强求
				}),
			],
		}),
	],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
			images: fileURLToPath(
				new URL("./src/assets/images", import.meta.url)
			),
		},
	},
	css: {
		preprocessorOptions: {
			less: {
				modifyVars: {
					// 或者globalVars
					// `themeColor` is global variables fields name
					themeColor: "#1677FF", // #1890FF
				},
				javascriptEnabled: true,
			},
		},
	},
	// 构建为库
	build: {
		outDir: "lib", //输出文件名称
		lib: {
			// 构建为库。如果指定了 build.lib，build.cssCodeSplit 会默认为 false。
			// __dirname的值是vite.config.ts文件所在目录
			entry: resolve(__dirname, "qc-components/index.ts"), // entry是必需的，因为库不能使用HTML作为入口。
			name: "QcCompoments", // 暴露的全局变量
			// fileName: "qc-components", // 输出的包文件名，默认是package.json的name选项
			fileName: (format) => `index.${format}.js`, // 打包后的文件名
		},
		rollupOptions: {
			// 自定义底层的Rollup打包配置
			// https://rollupjs.org/configuration-options/
			// 确保外部化处理那些你不想打包进库的依赖
			external: ["vue", "swiper", "@vuepic/vue-datepicker", "qrcode"],
			output: {
				// format: 'es', // 默认es，可选 'amd' 'cjs' 'es' 'iife' 'umd' 'system'
				exports: "named", // https://rollupjs.org/configuration-options/#output-exports
				//   // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
				globals: {
					vue: "Vue",
					// 'vue-router': 'VueRouter', // 引入vue-router全局变量，否则router.push将无法使用
					swiper: "Swiper",
					"@vuepic/vue-datepicker": "VueDatePicker",
					qrcode: "qrcode",
				},
			},
		},
		/** 设置为 false 可以禁用最小化混淆，或是用来指定使用哪种混淆器。
        默认为 Esbuild，它比 terser 快 20-40 倍，压缩率只差 1%-2%。
        注意，在 lib 模式下使用 'es' 时，build.minify 选项不会缩减空格，因为会移除掉 pure 标注，导致破坏 tree-shaking。
        当设置为 'terser' 时必须先安装 Terser。（yarn add terser -D）
    */
		minify: "terser", // Vite 2.6.x 以上需要配置 minify: "terser", terserOptions 才能生效
		terserOptions: {
			// 在打包代码时移除 console、debugger 和 注释
			compress: {
				/* (default: false) -- Pass true to discard calls to console.* functions.
          If you wish to drop a specific function call such as console.info and/or
          retain side effects from function arguments after dropping the function
          call then use pure_funcs instead
        */
				drop_console: true, // 生产环境时移除console
				drop_debugger: true,
			},
			format: {
				comments: false, // 删除注释comments
			},
		},
	},
});
