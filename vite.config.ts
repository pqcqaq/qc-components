import { Plugin, defineConfig } from "vite";
import path, { join } from "path";
// import setupPlugins from "./vite/plugins";
import dts from "vite-plugin-dts";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import VueSetupExtend from "vite-plugin-vue-setup-extend";
import libCss from "vite-plugin-libcss";
import fs from "fs";

function getComponentEntries(baseDir: string) {
	const entries: string[] = [];
	fs.readdirSync(baseDir).forEach((dir) => {
		const componentPath = path.join(baseDir, dir);
		if (fs.statSync(componentPath).isDirectory()) {
			const indexPath = path.join(componentPath, "index.ts");
			if (fs.existsSync(indexPath)) {
				entries.push(indexPath);
			}
		}
	});
	return entries;
}

const componentsDir = join(__dirname, "./qc-components");
const entries = getComponentEntries(componentsDir);

console.log("entries", entries);

export default defineConfig(({ command, mode }) => {
	return {
		publicPath: "/",
		plugins: [
			// vue({ reactivityTransform: true }),
			vue(),
			//生成ts声明文件
			dts({
				include: ["./qc-components", "./qc-components/types"],
			}),
			AutoImport({
				//安装两行后你会发现在组件中不用再导入ref，reactive等
				imports: ["vue", "vue-router"],
				ignore: ["h"], // 自动添加 import { h } from '/node_modules/.vite/deps/vue.js 代码问题处理
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
			VueSetupExtend(),
			libCss(),
		],
		//设置别名
		resolve: {
			alias: {
				"../../../": join(__dirname, "./qc-components/"),
				"@lib": join(__dirname, "./lib/"),
			},
			extensions: [".vue", ".js", ".json", ".ts", ".tsx"], //使用别名省略的后缀名
		},
		build: {
			outDir: "lib",
			lib: {
				formats: ["es"],
				entry: entries, // 使用生成的入口对象
				name: "QcComponents",
				fileName: (format) => `[name]/index.${format}.js`, // 生成的文件名，保留目录结构
			},
			rollupOptions: {
				external: ["vue", "ant-design-vue", "vue-router"],
				output: {
					dir: "lib",
					entryFileNames: (info) => {
						console.log("info", info);
						const path = info.facadeModuleId;
						const out = path
							?.replace(
								"D:/Develop/Coding/VueDevelop/qc-components/qc-components/",
								""
							)
							.replace("/index.ts", "");
						console.log("path", out);
						return out + "/index.js";
					}, // 生成的文件名，保留目录结构
					globals: {
						vue: "Vue",
					},
					exports: "named",
				},
			},
			cssCodeSplit: true,
			exclude: [join(__dirname, "src/**/*")],
		},
	};
});
