/*
 * @Description:路由鉴权
 * @Author: 振顺
 * @Date: 2023-10-19 09:56:34
 * @LastEditTime: 2023-10-19 16:09:15
 * @LastEditors: 振顺
 */
// 路由鉴权,项目中路由能不能被访问的权限的设置(某一个路由什么条件下可以访问，什么条件下不可以访问)
import router from '@/router'
import setting from './setting'
import nprogress from 'nprogress'
// 引入进度条样式
import 'nprogress/nprogress.css'
nprogress.configure({ showSpinner: false })
//获取用户相关的小仓库内部token数据,判断用户是否成功
import useUserStore from './store/modules/user'
import pinia from './store'
let userStore = useUserStore(pinia)

// 全局守卫:项目当中任意切换路由都会触发的钩子
// 全局前置守卫
router.beforeEach(async (to, from, next) => {
    //to:你将要访问那个路由
    //from:你从来个路由而来
    //next:路由的放行函数
    nprogress.start()
    // 获取token
    let token = userStore.token
    // 获取用户名字
    let username = userStore.username
    // 用户登录判断
    if (token) {
        // 登录成功判断
        if (to.path == '/login') {
            next({ path: '/' })
        } else {
            if (username) {
                next()
            } else {
                //如果没有用户信息,在守卫这里发请求获取到了用户信息再放行
                try {
                    await userStore.userInfo()
                    next()
                } catch (error) {
                    //token过期:获取不到用户信息了
                    //用户手动修改本地存储token
                    //退出登录->用户相关的数据清空
                    userStore.userLogout()
                    next({ path: '/login', query: { redirect: to.path } })
                }
            }
        }
    } else {
        // 用户未登录判断
        if (to.path == '/login') {
            next()
        } else {
            next({ path: '/login', query: { redirect: to.path } })
        }
    }
})
// 全局后置守卫
router.afterEach((to, from) => {
    nprogress.done()
    document.title = `${setting.title} - ${to.meta.title}`
})

//第一个问题:任意路由切换实现进度条业务---nprogress
//第二个问题:路由鉴权(路由组件访问权限的设置)
//全部路由组件:登录|404|任意路由|首页|数据大屏|权限管理(三个子路由)|商品管理(四个子路由)


//用户未登录:可以访问login,其余六个路由不能访问(指向login)
//用户登录成功:不可以访问login[指向首页],其余的路由可以访问