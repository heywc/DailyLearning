/*
 * @Author: heywc “1842347744@qq.com”
 * @Date: 2023-01-16 11:26:49
 * @LastEditors: heywc “1842347744@qq.com”
 * @LastEditTime: 2023-01-29 14:29:21
 * @FilePath: /DailyLearning/demo/2023/backOfficeSystem/vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
export default defineConfig(({ command, mode }) => {
    // 环境变量通常可以从 process.env 获得。
    // 注意 Vite 默认是不加载 .env 文件的，因为这些文件需要在执行完 Vite 配置后才能确定加载哪一个，举个例子，root 和 envDir 选项会影响加载行为。不过当你的确需要时，你可以使用 Vite 导出的 loadEnv 函数来加载指定的 .env 文件。
    const env = loadEnv(mode, process.cwd(),''); // 当前环境变量
    const config = {
        plugins: [],
        define: {
            __APP_ENV__: env.APP_ENV,
        }
    }
    // 区分开发环境和生产环境的可通过判断 command（serve|dev|build）、mode(development|production)
    if (command === 'serve') {
        // dev 开发环境独有配置
        return {
            ...config,
        }
    } else if(command === 'build'){
        // build 生产环境独有配置
        return {
            ...config,
        }
    }
})
