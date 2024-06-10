// vite.config.ts
import { defineConfig } from "file:///D:/Develop/Coding/VueDevelop/qc-components/node_modules/.pnpm/vite@5.2.11_@types+node@20.12.12_sass@1.77.2_terser@5.31.0/node_modules/vite/dist/node/index.js";
import { join } from "path";
import dts from "file:///D:/Develop/Coding/VueDevelop/qc-components/node_modules/.pnpm/vite-plugin-dts@3.9.1_@types+node@20.12.12_typescript@5.4.5_vite@5.2.11/node_modules/vite-plugin-dts/dist/index.mjs";
import vue from "file:///D:/Develop/Coding/VueDevelop/qc-components/node_modules/.pnpm/@vitejs+plugin-vue@5.0.4_vite@5.2.11_vue@3.4.27/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import AutoImport from "file:///D:/Develop/Coding/VueDevelop/qc-components/node_modules/.pnpm/unplugin-auto-import@0.17.6/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///D:/Develop/Coding/VueDevelop/qc-components/node_modules/.pnpm/unplugin-vue-components@0.27.0_vue@3.4.27/node_modules/unplugin-vue-components/dist/vite.js";
import { AntDesignVueResolver } from "file:///D:/Develop/Coding/VueDevelop/qc-components/node_modules/.pnpm/unplugin-vue-components@0.27.0_vue@3.4.27/node_modules/unplugin-vue-components/dist/resolvers.js";
import VueSetupExtend from "file:///D:/Develop/Coding/VueDevelop/qc-components/node_modules/.pnpm/vite-plugin-vue-setup-extend@0.4.0_vite@5.2.11/node_modules/vite-plugin-vue-setup-extend/dist/index.mjs";
import libCss from "file:///D:/Develop/Coding/VueDevelop/qc-components/node_modules/.pnpm/vite-plugin-libcss@1.1.1_vite@5.2.11/node_modules/vite-plugin-libcss/index.js";
var __vite_injected_original_dirname = "D:\\Develop\\Coding\\VueDevelop\\qc-components";
var vite_config_default = defineConfig(({ command, mode }) => {
  return {
    publicPath: "/",
    plugins: [
      // vue({ reactivityTransform: true }),
      vue(),
      //生成ts声明文件
      dts({
        include: ["./qc-components", "./qc-components/types"]
      }),
      AutoImport({
        //安装两行后你会发现在组件中不用再导入ref，reactive等
        imports: ["vue", "vue-router"],
        ignore: ["h"],
        // 自动添加 import { h } from '/node_modules/.vite/deps/vue.js 代码问题处理
        dts: "src/auto-import.d.ts",
        //ant-design-vue
        resolvers: [AntDesignVueResolver()]
      }),
      Components({
        resolvers: [
          AntDesignVueResolver({
            importStyle: false
            // 不动态引入css,这个不强求
          })
        ]
      }),
      VueSetupExtend(),
      libCss()
    ],
    //设置别名
    resolve: {
      alias: {
        "@/qc-components": join(__vite_injected_original_dirname, "./qc-components/")
      },
      extensions: [".vue", ".js", ".json", ".ts", ".tsx"]
      //使用别名省略的后缀名
    },
    build: {
      sourcemap: false,
      //是否生成map文件
      outDir: "lib",
      //输出文件名称
      lib: {
        formats: ["es", "cjs"],
        //指定打包格式
        entry: join(__vite_injected_original_dirname, "./qc-components/index.ts"),
        //指定组件编译入口文件
        name: "QcComponents",
        //指定打包后全局变量的名字
        fileName: (format) => `index.${format}.js`
        // 打包后的文件名
      },
      //库编译模式配置
      rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖
        external: ["vue"],
        output: {
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            vue: "Vue"
          },
          exports: "named"
          // https://rollupjs.org/configuration-options/#output-exports
        }
      },
      // rollup打包配置
      cssCodeSplit: true
      //是否拆分css
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxEZXZlbG9wXFxcXENvZGluZ1xcXFxWdWVEZXZlbG9wXFxcXHFjLWNvbXBvbmVudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXERldmVsb3BcXFxcQ29kaW5nXFxcXFZ1ZURldmVsb3BcXFxccWMtY29tcG9uZW50c1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovRGV2ZWxvcC9Db2RpbmcvVnVlRGV2ZWxvcC9xYy1jb21wb25lbnRzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgUGx1Z2luLCBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHBhdGgsIHsgam9pbiB9IGZyb20gXCJwYXRoXCI7XG4vLyBpbXBvcnQgc2V0dXBQbHVnaW5zIGZyb20gXCIuL3ZpdGUvcGx1Z2luc1wiO1xuaW1wb3J0IGR0cyBmcm9tIFwidml0ZS1wbHVnaW4tZHRzXCI7XG5pbXBvcnQgdnVlIGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWVcIjtcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gXCJ1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlXCI7XG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tIFwidW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZVwiO1xuaW1wb3J0IHsgQW50RGVzaWduVnVlUmVzb2x2ZXIgfSBmcm9tIFwidW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzXCI7XG5pbXBvcnQgVnVlU2V0dXBFeHRlbmQgZnJvbSBcInZpdGUtcGx1Z2luLXZ1ZS1zZXR1cC1leHRlbmRcIjtcbmltcG9ydCBsaWJDc3MgZnJvbSBcInZpdGUtcGx1Z2luLWxpYmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgY29tbWFuZCwgbW9kZSB9KSA9PiB7XG5cdHJldHVybiB7XG5cdFx0cHVibGljUGF0aDogXCIvXCIsXG5cdFx0cGx1Z2luczogW1xuXHRcdFx0Ly8gdnVlKHsgcmVhY3Rpdml0eVRyYW5zZm9ybTogdHJ1ZSB9KSxcblx0XHRcdHZ1ZSgpLFxuXHRcdFx0Ly9cdTc1MUZcdTYyMTB0c1x1NThGMFx1NjYwRVx1NjU4N1x1NEVGNlxuXHRcdFx0ZHRzKHtcblx0XHRcdFx0aW5jbHVkZTogW1wiLi9xYy1jb21wb25lbnRzXCIsIFwiLi9xYy1jb21wb25lbnRzL3R5cGVzXCJdLFxuXHRcdFx0fSksXG5cdFx0XHRBdXRvSW1wb3J0KHtcblx0XHRcdFx0Ly9cdTVCODlcdTg4QzVcdTRFMjRcdTg4NENcdTU0MEVcdTRGNjBcdTRGMUFcdTUzRDFcdTczQjBcdTU3MjhcdTdFQzRcdTRFRjZcdTRFMkRcdTRFMERcdTc1MjhcdTUxOERcdTVCRkNcdTUxNjVyZWZcdUZGMENyZWFjdGl2ZVx1N0I0OVxuXHRcdFx0XHRpbXBvcnRzOiBbXCJ2dWVcIiwgXCJ2dWUtcm91dGVyXCJdLFxuXHRcdFx0XHRpZ25vcmU6IFtcImhcIl0sIC8vIFx1ODFFQVx1NTJBOFx1NkRGQlx1NTJBMCBpbXBvcnQgeyBoIH0gZnJvbSAnL25vZGVfbW9kdWxlcy8udml0ZS9kZXBzL3Z1ZS5qcyBcdTRFRTNcdTc4MDFcdTk1RUVcdTk4OThcdTU5MDRcdTc0MDZcblx0XHRcdFx0ZHRzOiBcInNyYy9hdXRvLWltcG9ydC5kLnRzXCIsXG5cdFx0XHRcdC8vYW50LWRlc2lnbi12dWVcblx0XHRcdFx0cmVzb2x2ZXJzOiBbQW50RGVzaWduVnVlUmVzb2x2ZXIoKV0sXG5cdFx0XHR9KSxcblx0XHRcdENvbXBvbmVudHMoe1xuXHRcdFx0XHRyZXNvbHZlcnM6IFtcblx0XHRcdFx0XHRBbnREZXNpZ25WdWVSZXNvbHZlcih7XG5cdFx0XHRcdFx0XHRpbXBvcnRTdHlsZTogZmFsc2UsIC8vIFx1NEUwRFx1NTJBOFx1NjAwMVx1NUYxNVx1NTE2NWNzcyxcdThGRDlcdTRFMkFcdTRFMERcdTVGM0FcdTZDNDJcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XSxcblx0XHRcdH0pLFxuXHRcdFx0VnVlU2V0dXBFeHRlbmQoKSxcblx0XHRcdGxpYkNzcygpLFxuXHRcdF0sXG5cdFx0Ly9cdThCQkVcdTdGNkVcdTUyMkJcdTU0MERcblx0XHRyZXNvbHZlOiB7XG5cdFx0XHRhbGlhczoge1xuXHRcdFx0XHRcIkAvcWMtY29tcG9uZW50c1wiOiBqb2luKF9fZGlybmFtZSwgXCIuL3FjLWNvbXBvbmVudHMvXCIpLFxuXHRcdFx0fSxcblx0XHRcdGV4dGVuc2lvbnM6IFtcIi52dWVcIiwgXCIuanNcIiwgXCIuanNvblwiLCBcIi50c1wiLCBcIi50c3hcIl0sIC8vXHU0RjdGXHU3NTI4XHU1MjJCXHU1NDBEXHU3NzAxXHU3NTY1XHU3Njg0XHU1NDBFXHU3RjAwXHU1NDBEXG5cdFx0fSxcblx0XHRidWlsZDoge1xuXHRcdFx0c291cmNlbWFwOiBmYWxzZSwgLy9cdTY2MkZcdTU0MjZcdTc1MUZcdTYyMTBtYXBcdTY1ODdcdTRFRjZcblx0XHRcdG91dERpcjogXCJsaWJcIiwgLy9cdThGOTNcdTUxRkFcdTY1ODdcdTRFRjZcdTU0MERcdTc5RjBcblx0XHRcdGxpYjoge1xuXHRcdFx0XHRmb3JtYXRzOiBbXCJlc1wiLCBcImNqc1wiXSwgLy9cdTYzMDdcdTVCOUFcdTYyNTNcdTUzMDVcdTY4M0NcdTVGMEZcblx0XHRcdFx0ZW50cnk6IGpvaW4oX19kaXJuYW1lLCBcIi4vcWMtY29tcG9uZW50cy9pbmRleC50c1wiKSwgLy9cdTYzMDdcdTVCOUFcdTdFQzRcdTRFRjZcdTdGMTZcdThCRDFcdTUxNjVcdTUzRTNcdTY1ODdcdTRFRjZcblx0XHRcdFx0bmFtZTogXCJRY0NvbXBvbmVudHNcIiwgLy9cdTYzMDdcdTVCOUFcdTYyNTNcdTUzMDVcdTU0MEVcdTUxNjhcdTVDNDBcdTUzRDhcdTkxQ0ZcdTc2ODRcdTU0MERcdTVCNTdcblx0XHRcdFx0ZmlsZU5hbWU6IChmb3JtYXQpID0+IGBpbmRleC4ke2Zvcm1hdH0uanNgLCAvLyBcdTYyNTNcdTUzMDVcdTU0MEVcdTc2ODRcdTY1ODdcdTRFRjZcdTU0MERcblx0XHRcdH0sIC8vXHU1RTkzXHU3RjE2XHU4QkQxXHU2QTIxXHU1RjBGXHU5MTREXHU3RjZFXG5cdFx0XHRyb2xsdXBPcHRpb25zOiB7XG5cdFx0XHRcdC8vIFx1Nzg2RVx1NEZERFx1NTkxNlx1OTBFOFx1NTMxNlx1NTkwNFx1NzQwNlx1OTBBM1x1NEU5Qlx1NEY2MFx1NEUwRFx1NjBGM1x1NjI1M1x1NTMwNVx1OEZEQlx1NUU5M1x1NzY4NFx1NEY5RFx1OEQ1NlxuXHRcdFx0XHRleHRlcm5hbDogW1widnVlXCJdLFxuXHRcdFx0XHRvdXRwdXQ6IHtcblx0XHRcdFx0XHQvLyBcdTU3MjggVU1EIFx1Njc4NFx1NUVGQVx1NkEyMVx1NUYwRlx1NEUwQlx1NEUzQVx1OEZEOVx1NEU5Qlx1NTkxNlx1OTBFOFx1NTMxNlx1NzY4NFx1NEY5RFx1OEQ1Nlx1NjNEMFx1NEY5Qlx1NEUwMFx1NEUyQVx1NTE2OFx1NUM0MFx1NTNEOFx1OTFDRlxuXHRcdFx0XHRcdGdsb2JhbHM6IHtcblx0XHRcdFx0XHRcdHZ1ZTogXCJWdWVcIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGV4cG9ydHM6IFwibmFtZWRcIiwgLy8gaHR0cHM6Ly9yb2xsdXBqcy5vcmcvY29uZmlndXJhdGlvbi1vcHRpb25zLyNvdXRwdXQtZXhwb3J0c1xuXHRcdFx0XHR9LFxuXHRcdFx0fSwgLy8gcm9sbHVwXHU2MjUzXHU1MzA1XHU5MTREXHU3RjZFXG5cdFx0XHRjc3NDb2RlU3BsaXQ6IHRydWUsIC8vXHU2NjJGXHU1NDI2XHU2MkM2XHU1MjA2Y3NzXG5cdFx0fSxcblx0fTtcbn0pO1xuXG4vLyBpbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tIFwibm9kZTp1cmxcIjtcblxuLy8gaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCI7XG4vLyBpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuLy8gaW1wb3J0IHZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI7XG5cbi8vIC8vIGFudC1kZXNpbmdcdTYzMDlcdTk3MDBcdTVGMTVcdTUxNjVcbi8vIGltcG9ydCBBdXRvSW1wb3J0IGZyb20gXCJ1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlXCI7XG4vLyBpbXBvcnQgQ29tcG9uZW50cyBmcm9tIFwidW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZVwiO1xuLy8gaW1wb3J0IHsgQW50RGVzaWduVnVlUmVzb2x2ZXIgfSBmcm9tIFwidW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzXCI7XG5cbi8vIC8vIFx1NjI1M1x1NTMwNVx1NEY1M1x1NzlFRlx1NTNFRlx1ODlDNlx1NTMxNlx1NjNEMlx1NEVGNlxuLy8gLy8gaW1wb3J0IHsgdmlzdWFsaXplciB9IGZyb20gJ3JvbGx1cC1wbHVnaW4tdmlzdWFsaXplcidcblxuLy8gLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbi8vIGV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4vLyBcdHBsdWdpbnM6IFtcbi8vIFx0XHR2dWUoKSxcbi8vIFx0XHQvLyB2aXN1YWxpemVyKHsgLy8gXHU3NTFGXHU2MjEwXHU3Njg0XHU1MjA2XHU2NzkwXHU1NkZFXHU2NTg3XHU0RUY2XHU1NDBEXHVGRjBDXHU5RUQ4XHU4QkE0c3RhdHMuaHRtbFxuLy8gXHRcdC8vICAgZmlsZTogJ3N0YXRzLmh0bWwnLFxuLy8gXHRcdC8vICAgb3BlbjogdHJ1ZSAvLyBcdTYyNTNcdTUzMDVcdTU0MEVcdTgxRUFcdTUyQThcdTYyNTNcdTVGMDBcdTUyMDZcdTY3OTBcdTU2RkVcbi8vIFx0XHQvLyB9KSxcbi8vIFx0XHRkdHMoe1xuLy8gXHRcdFx0aW5jbHVkZTogXCIuL3FjLWNvbXBvbmVudHNcIixcbi8vIFx0XHR9KSxcbi8vIFx0XHRBdXRvSW1wb3J0KHtcbi8vIFx0XHRcdC8vXHU1Qjg5XHU4OEM1XHU0RTI0XHU4ODRDXHU1NDBFXHU0RjYwXHU0RjFBXHU1M0QxXHU3M0IwXHU1NzI4XHU3RUM0XHU0RUY2XHU0RTJEXHU0RTBEXHU3NTI4XHU1MThEXHU1QkZDXHU1MTY1cmVmXHVGRjBDcmVhY3RpdmVcdTdCNDlcbi8vIFx0XHRcdGltcG9ydHM6IFtcInZ1ZVwiLCBcInZ1ZS1yb3V0ZXJcIl0sXG4vLyBcdFx0XHRkdHM6IFwic3JjL2F1dG8taW1wb3J0LmQudHNcIixcbi8vIFx0XHRcdC8vYW50LWRlc2lnbi12dWVcbi8vIFx0XHRcdHJlc29sdmVyczogW0FudERlc2lnblZ1ZVJlc29sdmVyKCldLFxuLy8gXHRcdH0pLFxuLy8gXHRcdENvbXBvbmVudHMoe1xuLy8gXHRcdFx0cmVzb2x2ZXJzOiBbXG4vLyBcdFx0XHRcdEFudERlc2lnblZ1ZVJlc29sdmVyKHtcbi8vIFx0XHRcdFx0XHRpbXBvcnRTdHlsZTogZmFsc2UsIC8vIFx1NEUwRFx1NTJBOFx1NjAwMVx1NUYxNVx1NTE2NWNzcyxcdThGRDlcdTRFMkFcdTRFMERcdTVGM0FcdTZDNDJcbi8vIFx0XHRcdFx0fSksXG4vLyBcdFx0XHRdLFxuLy8gXHRcdH0pLFxuLy8gXHRdLFxuLy8gXHRyZXNvbHZlOiB7XG4vLyBcdFx0YWxpYXM6IHtcbi8vIFx0XHRcdFwiQFwiOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoXCIuL3NyY1wiLCBpbXBvcnQubWV0YS51cmwpKSxcbi8vIFx0XHRcdGltYWdlczogZmlsZVVSTFRvUGF0aChcbi8vIFx0XHRcdFx0bmV3IFVSTChcIi4vc3JjL2Fzc2V0cy9pbWFnZXNcIiwgaW1wb3J0Lm1ldGEudXJsKVxuLy8gXHRcdFx0KSxcbi8vIFx0XHR9LFxuLy8gXHR9LFxuLy8gXHRjc3M6IHtcbi8vIFx0XHRwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4vLyBcdFx0XHRsZXNzOiB7XG4vLyBcdFx0XHRcdG1vZGlmeVZhcnM6IHtcbi8vIFx0XHRcdFx0XHQvLyBcdTYyMTZcdTgwMDVnbG9iYWxWYXJzXG4vLyBcdFx0XHRcdFx0Ly8gYHRoZW1lQ29sb3JgIGlzIGdsb2JhbCB2YXJpYWJsZXMgZmllbGRzIG5hbWVcbi8vIFx0XHRcdFx0XHR0aGVtZUNvbG9yOiBcIiMxNjc3RkZcIiwgLy8gIzE4OTBGRlxuLy8gXHRcdFx0XHR9LFxuLy8gXHRcdFx0XHRqYXZhc2NyaXB0RW5hYmxlZDogdHJ1ZSxcbi8vIFx0XHRcdH0sXG4vLyBcdFx0fSxcbi8vIFx0fSxcbi8vIFx0Ly8gXHU2Nzg0XHU1RUZBXHU0RTNBXHU1RTkzXG4vLyBcdGJ1aWxkOiB7XG4vLyBcdFx0b3V0RGlyOiBcImxpYlwiLCAvL1x1OEY5M1x1NTFGQVx1NjU4N1x1NEVGNlx1NTQwRFx1NzlGMFxuLy8gXHRcdGxpYjoge1xuLy8gXHRcdFx0Ly8gXHU2Nzg0XHU1RUZBXHU0RTNBXHU1RTkzXHUzMDAyXHU1OTgyXHU2NzlDXHU2MzA3XHU1QjlBXHU0RTg2IGJ1aWxkLmxpYlx1RkYwQ2J1aWxkLmNzc0NvZGVTcGxpdCBcdTRGMUFcdTlFRDhcdThCQTRcdTRFM0EgZmFsc2VcdTMwMDJcbi8vIFx0XHRcdC8vIF9fZGlybmFtZVx1NzY4NFx1NTAzQ1x1NjYyRnZpdGUuY29uZmlnLnRzXHU2NTg3XHU0RUY2XHU2MjQwXHU1NzI4XHU3NkVFXHU1RjU1XG4vLyBcdFx0XHRlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsIFwicWMtY29tcG9uZW50cy9pbmRleC50c1wiKSwgLy8gZW50cnlcdTY2MkZcdTVGQzVcdTk3MDBcdTc2ODRcdUZGMENcdTU2RTBcdTRFM0FcdTVFOTNcdTRFMERcdTgwRkRcdTRGN0ZcdTc1MjhIVE1MXHU0RjVDXHU0RTNBXHU1MTY1XHU1M0UzXHUzMDAyXG4vLyBcdFx0XHRuYW1lOiBcIlFjQ29tcG9tZW50c1wiLCAvLyBcdTY2QjRcdTk3MzJcdTc2ODRcdTUxNjhcdTVDNDBcdTUzRDhcdTkxQ0Zcbi8vIFx0XHRcdC8vIGZpbGVOYW1lOiBcInFjLWNvbXBvbmVudHNcIiwgLy8gXHU4RjkzXHU1MUZBXHU3Njg0XHU1MzA1XHU2NTg3XHU0RUY2XHU1NDBEXHVGRjBDXHU5RUQ4XHU4QkE0XHU2NjJGcGFja2FnZS5qc29uXHU3Njg0bmFtZVx1OTAwOVx1OTg3OVxuLy8gXHRcdFx0ZmlsZU5hbWU6IChmb3JtYXQpID0+IGBpbmRleC4ke2Zvcm1hdH0uanNgLCAvLyBcdTYyNTNcdTUzMDVcdTU0MEVcdTc2ODRcdTY1ODdcdTRFRjZcdTU0MERcbi8vIFx0XHR9LFxuLy8gXHRcdHJvbGx1cE9wdGlvbnM6IHtcbi8vIFx0XHRcdC8vIFx1ODFFQVx1NUI5QVx1NEU0OVx1NUU5NVx1NUM0Mlx1NzY4NFJvbGx1cFx1NjI1M1x1NTMwNVx1OTE0RFx1N0Y2RVxuLy8gXHRcdFx0Ly8gaHR0cHM6Ly9yb2xsdXBqcy5vcmcvY29uZmlndXJhdGlvbi1vcHRpb25zL1xuLy8gXHRcdFx0Ly8gXHU3ODZFXHU0RkREXHU1OTE2XHU5MEU4XHU1MzE2XHU1OTA0XHU3NDA2XHU5MEEzXHU0RTlCXHU0RjYwXHU0RTBEXHU2MEYzXHU2MjUzXHU1MzA1XHU4RkRCXHU1RTkzXHU3Njg0XHU0RjlEXHU4RDU2XG4vLyBcdFx0XHRleHRlcm5hbDogW1widnVlXCIsIFwic3dpcGVyXCIsIFwiQHZ1ZXBpYy92dWUtZGF0ZXBpY2tlclwiLCBcInFyY29kZVwiXSxcbi8vIFx0XHRcdG91dHB1dDoge1xuLy8gXHRcdFx0XHRmb3JtYXQ6ICdlcycsIC8vIFx1OUVEOFx1OEJBNGVzXHVGRjBDXHU1M0VGXHU5MDA5ICdhbWQnICdjanMnICdlcycgJ2lpZmUnICd1bWQnICdzeXN0ZW0nXG4vLyBcdFx0XHRcdGV4cG9ydHM6IFwibmFtZWRcIiwgLy8gaHR0cHM6Ly9yb2xsdXBqcy5vcmcvY29uZmlndXJhdGlvbi1vcHRpb25zLyNvdXRwdXQtZXhwb3J0c1xuLy8gXHRcdFx0XHQvLyAgIC8vIFx1NTcyOCBVTUQgXHU2Nzg0XHU1RUZBXHU2QTIxXHU1RjBGXHU0RTBCXHU0RTNBXHU4RkQ5XHU0RTlCXHU1OTE2XHU5MEU4XHU1MzE2XHU3Njg0XHU0RjlEXHU4RDU2XHU2M0QwXHU0RjlCXHU0RTAwXHU0RTJBXHU1MTY4XHU1QzQwXHU1M0Q4XHU5MUNGXG4vLyBcdFx0XHRcdGdsb2JhbHM6IHtcbi8vIFx0XHRcdFx0XHR2dWU6IFwiVnVlXCIsXG4vLyBcdFx0XHRcdFx0Ly8gJ3Z1ZS1yb3V0ZXInOiAnVnVlUm91dGVyJywgLy8gXHU1RjE1XHU1MTY1dnVlLXJvdXRlclx1NTE2OFx1NUM0MFx1NTNEOFx1OTFDRlx1RkYwQ1x1NTQyNlx1NTIxOXJvdXRlci5wdXNoXHU1QzA2XHU2NUUwXHU2Q0Q1XHU0RjdGXHU3NTI4XG4vLyBcdFx0XHRcdFx0c3dpcGVyOiBcIlN3aXBlclwiLFxuLy8gXHRcdFx0XHRcdFwiQHZ1ZXBpYy92dWUtZGF0ZXBpY2tlclwiOiBcIlZ1ZURhdGVQaWNrZXJcIixcbi8vIFx0XHRcdFx0XHRxcmNvZGU6IFwicXJjb2RlXCIsXG4vLyBcdFx0XHRcdH0sXG4vLyBcdFx0XHR9LFxuLy8gXHRcdH0sXG4vLyBcdFx0LyoqIFx1OEJCRVx1N0Y2RVx1NEUzQSBmYWxzZSBcdTUzRUZcdTRFRTVcdTc5ODFcdTc1MjhcdTY3MDBcdTVDMEZcdTUzMTZcdTZERjdcdTZEQzZcdUZGMENcdTYyMTZcdTY2MkZcdTc1MjhcdTY3NjVcdTYzMDdcdTVCOUFcdTRGN0ZcdTc1MjhcdTU0RUFcdTc5Q0RcdTZERjdcdTZEQzZcdTU2NjhcdTMwMDJcbi8vICAgICAgICAgXHU5RUQ4XHU4QkE0XHU0RTNBIEVzYnVpbGRcdUZGMENcdTVCODNcdTZCRDQgdGVyc2VyIFx1NUZFQiAyMC00MCBcdTUwMERcdUZGMENcdTUzOEJcdTdGMjlcdTczODdcdTUzRUFcdTVERUUgMSUtMiVcdTMwMDJcbi8vICAgICAgICAgXHU2Q0U4XHU2MTBGXHVGRjBDXHU1NzI4IGxpYiBcdTZBMjFcdTVGMEZcdTRFMEJcdTRGN0ZcdTc1MjggJ2VzJyBcdTY1RjZcdUZGMENidWlsZC5taW5pZnkgXHU5MDA5XHU5ODc5XHU0RTBEXHU0RjFBXHU3RjI5XHU1MUNGXHU3QTdBXHU2ODNDXHVGRjBDXHU1NkUwXHU0RTNBXHU0RjFBXHU3OUZCXHU5NjY0XHU2Mzg5IHB1cmUgXHU2ODA3XHU2Q0U4XHVGRjBDXHU1QkZDXHU4MUY0XHU3ODM0XHU1NzRGIHRyZWUtc2hha2luZ1x1MzAwMlxuLy8gICAgICAgICBcdTVGNTNcdThCQkVcdTdGNkVcdTRFM0EgJ3RlcnNlcicgXHU2NUY2XHU1RkM1XHU5ODdCXHU1MTQ4XHU1Qjg5XHU4OEM1IFRlcnNlclx1MzAwMlx1RkYwOHlhcm4gYWRkIHRlcnNlciAtRFx1RkYwOVxuLy8gICAgICovXG4vLyBcdFx0Ly8gbWluaWZ5OiBcInRlcnNlclwiLCAvLyBWaXRlIDIuNi54IFx1NEVFNVx1NEUwQVx1OTcwMFx1ODk4MVx1OTE0RFx1N0Y2RSBtaW5pZnk6IFwidGVyc2VyXCIsIHRlcnNlck9wdGlvbnMgXHU2MjREXHU4MEZEXHU3NTFGXHU2NTQ4XG4vLyBcdFx0Ly8gdGVyc2VyT3B0aW9uczoge1xuLy8gXHRcdC8vIFx0Ly8gXHU1NzI4XHU2MjUzXHU1MzA1XHU0RUUzXHU3ODAxXHU2NUY2XHU3OUZCXHU5NjY0IGNvbnNvbGVcdTMwMDFkZWJ1Z2dlciBcdTU0OEMgXHU2Q0U4XHU5MUNBXG4vLyBcdFx0Ly8gXHRjb21wcmVzczoge1xuLy8gXHRcdC8vIFx0XHQvKiAoZGVmYXVsdDogZmFsc2UpIC0tIFBhc3MgdHJ1ZSB0byBkaXNjYXJkIGNhbGxzIHRvIGNvbnNvbGUuKiBmdW5jdGlvbnMuXG4vLyAgICAgICAgIC8vICAgSWYgeW91IHdpc2ggdG8gZHJvcCBhIHNwZWNpZmljIGZ1bmN0aW9uIGNhbGwgc3VjaCBhcyBjb25zb2xlLmluZm8gYW5kL29yXG4vLyAgICAgICAgIC8vICAgcmV0YWluIHNpZGUgZWZmZWN0cyBmcm9tIGZ1bmN0aW9uIGFyZ3VtZW50cyBhZnRlciBkcm9wcGluZyB0aGUgZnVuY3Rpb25cbi8vICAgICAgICAgLy8gICBjYWxsIHRoZW4gdXNlIHB1cmVfZnVuY3MgaW5zdGVhZFxuLy8gICAgICAgICAvLyAqL1xuLy8gXHRcdC8vIFx0XHRkcm9wX2NvbnNvbGU6IHRydWUsIC8vIFx1NzUxRlx1NEVBN1x1NzNBRlx1NTg4M1x1NjVGNlx1NzlGQlx1OTY2NGNvbnNvbGVcbi8vIFx0XHQvLyBcdFx0ZHJvcF9kZWJ1Z2dlcjogdHJ1ZSxcbi8vIFx0XHQvLyBcdH0sXG4vLyBcdFx0Ly8gXHRmb3JtYXQ6IHtcbi8vIFx0XHQvLyBcdFx0Y29tbWVudHM6IGZhbHNlLCAvLyBcdTUyMjBcdTk2NjRcdTZDRThcdTkxQ0Fjb21tZW50c1xuLy8gXHRcdC8vIFx0fSxcbi8vIFx0XHQvLyB9LFxuLy8gXHR9LFxuLy8gfSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTBULFNBQWlCLG9CQUFvQjtBQUMvVixTQUFlLFlBQVk7QUFFM0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sU0FBUztBQUNoQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLDRCQUE0QjtBQUNyQyxPQUFPLG9CQUFvQjtBQUMzQixPQUFPLFlBQVk7QUFUbkIsSUFBTSxtQ0FBbUM7QUFXekMsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxTQUFTLEtBQUssTUFBTTtBQUNsRCxTQUFPO0FBQUEsSUFDTixZQUFZO0FBQUEsSUFDWixTQUFTO0FBQUE7QUFBQSxNQUVSLElBQUk7QUFBQTtBQUFBLE1BRUosSUFBSTtBQUFBLFFBQ0gsU0FBUyxDQUFDLG1CQUFtQix1QkFBdUI7QUFBQSxNQUNyRCxDQUFDO0FBQUEsTUFDRCxXQUFXO0FBQUE7QUFBQSxRQUVWLFNBQVMsQ0FBQyxPQUFPLFlBQVk7QUFBQSxRQUM3QixRQUFRLENBQUMsR0FBRztBQUFBO0FBQUEsUUFDWixLQUFLO0FBQUE7QUFBQSxRQUVMLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQztBQUFBLE1BQ25DLENBQUM7QUFBQSxNQUNELFdBQVc7QUFBQSxRQUNWLFdBQVc7QUFBQSxVQUNWLHFCQUFxQjtBQUFBLFlBQ3BCLGFBQWE7QUFBQTtBQUFBLFVBQ2QsQ0FBQztBQUFBLFFBQ0Y7QUFBQSxNQUNELENBQUM7QUFBQSxNQUNELGVBQWU7QUFBQSxNQUNmLE9BQU87QUFBQSxJQUNSO0FBQUE7QUFBQSxJQUVBLFNBQVM7QUFBQSxNQUNSLE9BQU87QUFBQSxRQUNOLG1CQUFtQixLQUFLLGtDQUFXLGtCQUFrQjtBQUFBLE1BQ3REO0FBQUEsTUFDQSxZQUFZLENBQUMsUUFBUSxPQUFPLFNBQVMsT0FBTyxNQUFNO0FBQUE7QUFBQSxJQUNuRDtBQUFBLElBQ0EsT0FBTztBQUFBLE1BQ04sV0FBVztBQUFBO0FBQUEsTUFDWCxRQUFRO0FBQUE7QUFBQSxNQUNSLEtBQUs7QUFBQSxRQUNKLFNBQVMsQ0FBQyxNQUFNLEtBQUs7QUFBQTtBQUFBLFFBQ3JCLE9BQU8sS0FBSyxrQ0FBVywwQkFBMEI7QUFBQTtBQUFBLFFBQ2pELE1BQU07QUFBQTtBQUFBLFFBQ04sVUFBVSxDQUFDLFdBQVcsU0FBUyxNQUFNO0FBQUE7QUFBQSxNQUN0QztBQUFBO0FBQUEsTUFDQSxlQUFlO0FBQUE7QUFBQSxRQUVkLFVBQVUsQ0FBQyxLQUFLO0FBQUEsUUFDaEIsUUFBUTtBQUFBO0FBQUEsVUFFUCxTQUFTO0FBQUEsWUFDUixLQUFLO0FBQUEsVUFDTjtBQUFBLFVBQ0EsU0FBUztBQUFBO0FBQUEsUUFDVjtBQUFBLE1BQ0Q7QUFBQTtBQUFBLE1BQ0EsY0FBYztBQUFBO0FBQUEsSUFDZjtBQUFBLEVBQ0Q7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
