module.exports = [{ 
        text: '首页', 
        link: '/', 
        icon: 'reco-home' 
    },{
        text: '算法-数据结构',
        items: [{ 
            text: '系统学习', 
            link: '/blog/algorithm/' 
        },{ 
            text: 'LeetCode', 
            link: '/blog/solution/' 
        }],
        icon: 'iconfont icon-suanfa2'
    },{
        text: 'CsSystem',
        items: [{
            text: '中间件', 
            items: [{ 
                text: 'Redis', 
                link: '/blog/cppbases/' 
            },{ 
                text: 'MySQL', 
                link: '/blog/mixprogram/' 
            }]
        }]
    }
]