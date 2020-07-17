module.exports = {
    port: 3001,
    theme: 'reco',
    title: '博客',
    description: '总结',
    themeConfig: {
        nav: [{
                text: 'leetcode系列',
                items: [{
                    text: '题库系列',
                    link: '/leetcode-algorithm/'
                }]
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
            '/leetcode-algorithm/': getLeetcode('算法', '数据库', 'shell', '多线程')
        }
    }
}

// leetcode笔记
function getLeetcode(groupA, groupB, groupC, groupD) {
    return [{
            title: groupA,
            collapsable: false,
            children: [
                'docs/1.两数之和',
            ]
        },
        {
            title: groupB,
            collapsable: false,
            children: []
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