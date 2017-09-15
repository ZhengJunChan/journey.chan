<template>
<div class="home_Page">
	<!-- <upload></upload> -->
	<div class="banner">
	</div>
</div>
</template>

<script>

import { Upload } from '@/components'

export default {
  components: {
    Upload
  },
  mounted () {
    console.log(this.$box)
  }
}

</script>

<style lang="less" scoped>
@import './home.less';
</style>