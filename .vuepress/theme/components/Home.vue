<template>
  <div class="home">
    <div class="hero">
      <ModuleTransition>
        <img
          v-if="recoShowModule && $frontmatter.heroImage"
          :style="heroImageStyle || {}"
          :src="$withBase($frontmatter.heroImage)"
          alt="hero">
      </ModuleTransition>
      <ModuleTransition delay="0.04">
        <h1
          v-if="recoShowModule && $frontmatter.heroText !== null"
          :style="{ marginTop: $frontmatter.heroImage ? '0px' : '140px'}"
        >
          {{ $frontmatter.heroText || $title || 'vuePress-theme-reco' }}
        </h1>
      </ModuleTransition>
      <ModuleTransition delay="0.08">
        <p v-if="recoShowModule && $frontmatter.tagline !== null" class="description">
          {{ $frontmatter.tagline || $description || 'Welcome to your vuePress-theme-reco site' }}
        </p>
      </ModuleTransition>
      <!-- <ModuleTransition delay="0.16">
        <p class="action" v-if="recoShowModule && $frontmatter.actionText && $frontmatter.actionLink">
          <NavLink class="action-button" :item="actionLink"/>
        </p>
      </ModuleTransition> -->
    </div>
    <ModuleTransition delay="0.16" style="transition: transform 0.25s ease-in-out 0.1s, opacity 0.25s ease-in-out 0.1s; transform: translateY(0px); opacity: 1; text-align: center;">
      <div style="width: 100%; text-align: center;">
        <div class="h1_box">
          <span v-for="(h1div, index) in $frontmatter.features">
            <span class="h1f" v-if="index != 0"> / </span>
            <span class="h1" 
                  v-on:click="changeH1Active(index)" 
                  :style="`${h1_index === index && 'color: white;'}`">{{ h1div.title }}</span>
          </span>
        </div>
      </div>
    </ModuleTransition>
    <ModuleTransition delay="0.24">
      <div style="margin: 0; padding: 0; width: 100%; height: 100%;" v-if="recoShowModule && $frontmatter.features && $frontmatter.features.length">
        <div v-for="(h1feature, h1index) in $frontmatter.features">
          <div v-if="is_show[h1index]" class="features">
            <a v-for="(feature, index) in h1feature.children" :href="feature.link" :key="index" :index="index" class="feature" style="transition: transform 0.25s ease-in-out 0.04s, opacity 0.25s ease-in-out 0.04s;transform: translateY(0px);opacity: 1;">
              <i class="reco_icon" :class="feature.icon"></i>
              <h2 align="center">{{ feature.title }}</h2>
              <p align="center">{{ feature.details }}</p>
            </a>
          </div>
        </div>
      </div>
    </ModuleTransition>
    <ModuleTransition delay="0.32">
      <Content class="home-center" v-show="recoShowModule" custom/>
    </ModuleTransition>
  </div>
</template>

<script>
import { defineComponent, computed, ref, reactive, toRefs } from 'vue-demi'
import NavLink from '@theme/components/NavLink'
import { ModuleTransition } from '@vuepress-reco/core/lib/components'
import { useInstance } from '@theme/helpers/composable'

export default defineComponent({
  components: { NavLink, ModuleTransition },

  setup (props, ctx) {
    const instance = useInstance()
    const recoShowModule = computed(() => instance && instance.$parent.recoShowModule)
    const actionLink = computed(() => instance && {
      link: instance.$frontmatter.actionLink,
      text: instance.$frontmatter.actionText
    })
    const heroImageStyle = computed(() => instance.$frontmatter.heroImageStyle || {
      maxHeight: '200px',
      margin: '6rem auto 1.5rem'
    })
    const instanceRef = ref(instance)

    return { recoShowModule, actionLink, heroImageStyle, instance: ref(instanceRef) }
  },

  data() {
    return {
      h1_index: 0,
      is_show: []
    }
  },

  created:function() {
    this.is_show.push(true)
    for (let i = 1; i < this.instance.$frontmatter.features.length; i ++) {
      this.is_show.push(false)
    }
  },

  methods: {

    changeH1Active (index) {
      this.is_show[this.h1_index] = false;
      this.is_show[index] = true;
      this.h1_index = index;
    }
  }
})
</script>

<style lang="stylus">

.home {
  padding: $navbarHeight 2rem 0;
  max-width: 1140px;
  margin: 0px auto;

  .reco_icon {
    font-size: 100px;
    color: black;
  }

  .h1_box {
    background-color: $accentColor;
    box-shadow: 0 4px 16px rgba(69, 88, 115, 0.1);
    padding: 24px 32px;
    border-radius: 12px;
    margin-bottom: 12px;
    display: inline-block;
  }
  .h1f {
    flex: 1;
    font-size: 2rem;
    font-weight: 500;
    text-align: left;
    margin: 0 auto;
  }
  .h1 {
    flex: 1;
    font-size: 1.8rem;
    text-align: left;
    margin: 30px auto 0;
    cursor: pointer;
    position: relative
    &:hover {
      color: white;
      &:after {
        visibility: visible;
        transform: scaleX(1);
      }
    };
    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 3px;
      bottom: 0;
      left: 0;
      background-color: white;
      visibility: hidden;
      transform: scaleX(0);
      transition: .3s ease-in-out;
    }
  }

  .hero {
    text-align: center;
    h1 {
      display: block;
      font-size: 2.5rem;
      color: var(--text-color);
    }

    h1, .description, .action {
      margin: 1.8rem auto;
    }

    .description {
      font-size: 1.6rem;
      line-height: 1.3;
      color: var(--text-color);
    }

    .action-button {
      display: inline-block;
      font-size: 1.2rem;
      color: #fff;
      background-color: $accentColor;
      padding: 0.2rem 1.2rem;
      border-radius: $borderRadius
      transition: background-color 0.1s ease;
      box-sizing: border-box;
      load-start()

      &:hover {
        background-color: lighten($accentColor, 10%);
      }
    }
  }

  .features {
    padding: 1.2rem 0;
    max-width: 1140px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: stretch;
    justify-content: center;
  }

  .feature {
    text-align: center;
    flex-grow: 1;
    flex-basis: 30%;
    max-width: 18.5%;
    transition: all .5s
    color: var(--text-color);
    border: 1px solid #ebf2f2;
    border-radius: 10px;
    cursor: pointer;
    height: 350px;
    margin: 10px;
    padding: 30px 25px 20px;
    h2 {
      font-size: 1.6rem;
      font-weight: 500;
      border-bottom: none;
      padding-bottom: 0;
    }
    &:hover {
      background-color: #fbfffc;
      box-shadow: 0 10px 20px 0 rgba(108,135,135,.2);
      color: #3eaf7c;

      .iconfont {
        color: #3eaf7c;
      }

      &:after {
        visibility: visible;
        transform: scaleX(1);
        background-color: #3eaf7c;
      }
    }
    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: white;
      visibility: hidden;
      transform: scaleX(0);
      transition: .3s ease-in-out;
    }
  }
}

@media (max-width: $MQMobile) {
  .home {
    .features {
      flex-direction: column;
    }

    .feature {
      max-width: 100%;
      padding: 0 2.5rem;
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .home {
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    .hero {
      img {
        max-height: 210px;
        margin: 2rem auto 1.2rem;
      }

      h1 {
        font-size: 2rem;
      }

      h1, .description, .action {
        margin: 1.2rem auto;
      }

      .description {
        font-size: 1.2rem;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }

    .feature {
      h2 {
        font-size: 1.25rem;
      }
    }
  }
}
</style>
