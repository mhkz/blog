module.exports = {
    port: 3001,
    base: '/blog/',
    theme: 'reco',
    codeTheme: 'tomorrow',
    title: '博客',
    description: '总结',
    themeConfig: {
        codeTheme: 'tomorrow',
        nav: [{
                text: 'leetcode系列',
                link: '/leetcode/'
            },
            {
                text: '读书笔记',
                ariaLabel: '了解更多',
                items: [{
                        // text: '计算机类',
                        items: [{
                            text: "深入理解计算机系统",
                            link: '/csapp/'
                        }]

                    },
                    {
                        text: 'linux',
                        link: '/linux/'
                    }

                ]
            },
            {
                text: '技术人生',
                items: [{
                        text: '数据结构与算法',
                        link: '/algorithm/'
                    },
                    {
                        text: 'linux',
                        link: '/linux/'
                    }

                ]
            },
            {
                text: '生活点滴',
                ariaLabel: '了解更多',
                items: [{
                    items: [{
                            text: '生活记录',
                            link: '/life/'
                        },
                        {
                            text: '年终总结',
                            link: '/year-end-summary/'
                        }
                    ]
                }]
            }
        ],
        sidebar: {
            '/leetcode/': getLeetcode('算法', '数据库', 'shell', '多线程')
        }
    }
}

// leetcode笔记
function getLeetcode(groupA, groupB, groupC, groupD) {
    return [{
            title: groupA,
            collapsable: false,
            children: [
                'docs/1.两数之和.md',
                'docs/7.整数反转.md',
                'docs/9.回文数.md',
                'docs/13.罗马数字转整数.md',
                'docs/14. 最长公共前缀.md'
            ]
        },
        {
            title: groupB,
            collapsable: false,
            children: [
                'docs/175.组合两表.md',
                'docs/176.第二高的薪水.md',
                'docs/177.第N高薪水.md',
            ]
        },
        {
            title: groupC,
            collapsable: false,
            children: []
        },
        {
            title: groupD,
            collapsable: false,
            children: []
        }
    ]
}