/*
 * @Description:团队开发项目的时候，需要统一包管理器工具,因为不同包管理器工具下载同一个依赖,可能版本不一样,
导致项目出现bug问题,因此包管理器工具需要统一管理！！！
 * @Author: 振顺
 * @Date: 2023-10-11 14:54:40
 * @LastEditTime: 2023-10-11 14:54:53
 * @LastEditors: 振顺
 */
if (!/pnpm/.test(process.env.npm_execpath || '')) {
  console.warn(
    `\u001b[33mThis repository must using pnpm as the package manager ` +
      ` for scripts to work properly.\u001b[39m\n`,
  )
  process.exit(1)
}
