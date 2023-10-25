<template>
      <span class="leancloud-visitors"
            data-flag-title="Your Article Title">
        <span class="leancloud-visitors-count"></span>
      </span>
</template>

<script>
import { RecoIcon } from '@vuepress-reco/core/lib/components'
export default {
    name: 'Valine',
    components: { RecoIcon },
    mounted() {
        // valine库里面存在window变量；HTML会通过NodeJS进行服务端渲染来产生
        // 通过动态导入来解决“NodeJS环境下对window变量未定义”的问题
        import('valine').then(module => {
            const Valine = module.default
            if (typeof window !== 'undefined') {
                const isDev = window.location.hostname.includes('localhost');
                // if (isDev) return; // 不统计本地开发时的阅读量

                document.getElementsByClassName('leancloud-visitors')[0].id = window.location.pathname
                this.window = window
                window.AV = require('leancloud-storage')

                this.valine = new Valine()
                this.initValine()
            }
        })
    },

    methods: {
        initValine () {
            let path = window.location.pathname
            document.getElementsByClassName('leancloud-visitors')[0].id = path

            this.valine.init({
                el: '#vcomments',
                appId: 'RJ50RF5BLtwKMFRExnOMqh3k-gzGzoHsz',// your appId
                appKey: 'W30Aug6XcrXrCkirCwdsvcEV',// your appKey
                notify: false,
                verify: false,
                path,
                visitor: true,
                avatar: 'mm',
                placeholder: 'write here'
            })
        }
    },

    watch: {
        $route (to, from) {
            if (from.path !== to.path) {
                this.initValine()
            }
        }
    }
}
</script>

<style scoped>
.icon {
    width: 14px;
    margin-right: 4px;
    vertical-align: middle;
    opacity: 1;
}

.leancloud-visitors-count {
    vertical-align: middle;
}

.stat {
    font-size: 12px;
    opacity: .6;
}

.stat::after {
    content: "|";
    opacity: .4;
    margin: 0 6px;
}

.stat:last-child::after {
    content: " ";
}
</style>
