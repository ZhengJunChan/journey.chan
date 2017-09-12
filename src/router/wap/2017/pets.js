/**
 * 源音塘秋日祭音乐会
 */

let config = {
  stopToTop: true,
  title: '幻宠大陆',
  hideFooter: true,
  fullWidth: true,
  nav: {
    img: 'none',
    height: '45px'
  }
}

const pets = {
  meta: config,
  path: '/pets2017',
  component: resolve => require(['@/activity/2017/pets'], resolve)
  // children: [{
  //   path: '',
  //   meta: config,
  //   component: resolve => require(['@/activity/2017/autumn-vote/pages/home'], resolve)
  // }, {
  //   path: 'rule',
  //   meta: config,
  //   component: resolve => require(['@/activity/2017/autumn-vote/pages/rule'], resolve)
  // }, {
  //   path: 'works',
  //   redirect: '/autumnvote2017/works/all',
  //   component: resolve => require(['@/pages/view.vue'], resolve),
  //   children: [{
  //     path: ':page',
  //     meta: config,
  //     component: resolve => require(['@/activity/2017/autumn-vote/pages/works'], resolve)
  //   }]
  // }, {
  //   path: 'great-works',
  //   meta: config,
  //   component: resolve => require(['@/activity/2017/autumn-vote/pages/great-works'], resolve)
  // }]
}

export default pets
