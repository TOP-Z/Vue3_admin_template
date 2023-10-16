// 封装一个函数：获取一个结果：当前早上|上午|下午|晚上
export const getNowTime = () => {
    let message = ''
    // 通过内置构造函数Date
    const now = new Date().getHours()
    if (now <= 9) {
        message = '早上'
    } else if (now <= 12) {
        message = '上午'
    } else if (now <= 18) {
        message = '下午'
    } else {
        message = '晚上'
    }
    return message
}