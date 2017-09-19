<!-- [button_component 按钮]   @Author: 郑君婵   @DateTime: 2017-07-19 -->
<template>
    <div class="button_component" v-text="text || config.text" :style="setStyle()" @click="clicked">
    </div>
</template>

<script>

import configs from './config.js'

export default{
  props: {
    text: String,
    type: {
      type: String,
      default: 'item'
    }
  },
  data () {
    return {
      config: configs[this.type]
    }
  },
  mounted () {
    console.log(this.list)
  },
  methods: {
    setStyle () {
      return {
        color: this.config.color,
        width: this.config.width,
        height: this.config.height,
        textAlign: this.config.textAlign,
        lineHeight: this.config.lineHeight,
        backgroundColor: this.config.backgroundColor
      }
    },
    clicked () {
      this.$emit('clicked')
    }
  }
}

</script>

<style lang="less">
@import './main.less';
</style>