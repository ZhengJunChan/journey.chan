<template>
<div class="home_Page">
	<div class="banner">
		<div>
			<ul class="nav_bar">
				<router-link tag="li" to="/">新大陆</router-link>
				<router-link tag="li" to="/">自由行</router-link>
				<router-link tag="li" to="/">俱乐部</router-link>
				<router-link tag="li" to="/">快报</router-link>
			</ul>
		</div>

		<div class="activity_btn">
			<btn type="item" text="开启新的旅途" @clicked="goActivity"></btn>
		</div>

	</div>

	<div class="module_box img_list">
		<div class="header">
			<h2 class="box_title">
				<router-link to="/">新大陆</router-link>
			</h2>
			<p class="desc">最近又发现特别美腻的地方啦啦啦啦！！！！快来！！！</p>
		</div>

		<ul class="list">
			<router-link tag="li" to="/" v-for="(item,index) in activityList"
			:key="item.id" :style="{backgroudImage: `url(${item.coverImg})`}" v-if="index<5">
				<div>
					
				</div>
			</router-link>
		</ul>
	</div>

</div>
</template>

<script>

import { Btn } from '@/components'
import { activityList } from '@/data'

export default {
  components: {
    Btn
  },
  data () {
    return {
      activityList: activityList
    }
  },
  mounted () {
    console.log(activityList)
  },
  methods: {
    goActivity () {
      alert('go')
    }
  }
}

</script>

<style lang="less" scoped>
@import './home.less';
</style>