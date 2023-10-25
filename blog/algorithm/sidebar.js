const {getChildren} = require("vuepress-sidebar-atuo")

module.exports = [
    './',
    {
        title: '动态规划',
        collapsable: false,
        children: getChildren('./blog/algorithm/array/')
    }]