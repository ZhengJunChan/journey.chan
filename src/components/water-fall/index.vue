<!-- [water_fall_component 瀑布流]   @Author: 郑君婵   @DateTime: 2017-09-18 -->
<template>
    <div id="waterFall" class="water_fall_component">
    	<div v-for="item in items">
    		<img :src="item.coverImg">
    	</div>
    </div>
</template>

<script>

import { activityList } from '@/data'

/**
 * init
 */
// var $items, itemWidth, time;

/**
 * 随机高度，随机图片，布局函数
 */
// var WaterFall = {
//   rdmImg: function(){
//     var width = Math.floor(Math.random() * 100) + 300,
//         height = Math.floor(Math.random() * 500) + 300;
//     return "http://placekitten.com/" + height + '/' + width;
//   },
//   rdmHeight: function(){
//     return Math.round(Math.random() * 200) + itemWidth;
//   },
// }

/**
 * export数据层
 */
// var activityList = (function(){
//        var arr = new Array();
//         for(var i= 0; i< activityList.length; i++){
//             var img = {};
//             img.src = activityList[i].coverImg;
//             arr.push(img);
//         }
//         return arr;
//   })();

export default{
  props: {
    list: {
      type: Array,
      defualt () {
        return []
      }
    }
  },
  data () {
    return {
      $items: [],
      timer: null,
      itemWidth: 0,
      activityList: activityList
    }
  },
  mounted () {
    console.log(this.list)
  },
  methods: {
    init () {
      window.addEventListener('resize', () => {
        clearTimeout(this.timer)

        this.timer = setTimeout(() => {
          // WaterFall.arrange()
        }, 500)
      })

      /**
       * 时间大小的设置决定是先加载img还是arrange布局
       */
      setTimeout(() => {
        this.$items = document.querySelectorAll('#waterFall div')
        this.itemWidth = this.$items[0].offsetWidth
        // this.WaterFall.arrange()
      }, 0)
    },
    // WaterFall () {
    //   let viewWidth = document.documentElement.clientWidth || document.body.clientWidth
    //   let cols = Math.floor( viewWidth / this.itemWidth );

    //   //存放每列当前长度的数组并初始化
    //   let colsHeight = [];
    //   for(let i = 0; i< cols; i++){
    //     colsHeight.push(0);
    //   }

    //   //安置每一项item
    //   this.$items.forEach( (ele, idx) => {
    //     let col = 0
    //     let curHeight = colsHeight[0]

    //     for(let i = 0; i< colsHeight.length; i++){
    //       if(colsHeight[i] < curHeight){
    //         curHeight = colsHeight[i]
    //         col = i
    //       }
    //     }

    //     ele.style.left = col * itemWidth + 'px'
    //     ele.style.top = curHeight + 'px'
    //     ele.style.height = WaterFall.rdmHeight() + 'px'

    //     colsHeight[col] += ele.offsetHeight;
    //   })
    // },
    getItemWidth () {
      // let width = this.totalWidth
      // if (this.totalWidth) {}
    }
  }
}

</script>

<style lang="less">
@import './main.less';
</style>