/**
 * 源音塘秋日祭音乐会
 */

let config = {
  stopToTop: true,
  title: '源音塘秋日祭音乐会',
  hideFooter: true,
  fullWidth: true,
  nav: {
    img: 'none',
    height: '45px'
  }
}

const autumnVote = {
  path: '/autumnvote2017',
  component: resolve => require(['@/activity/2017/autumn-vote'], resolve),
  children: [{
    path: '',
    meta: config,
    component: resolve => require(['@/activity/2017/autumn-vote/pages/home'], resolve)
  }, {
    path: 'rule',
    meta: config,
    component: resolve => require(['@/activity/2017/autumn-vote/pages/rule'], resolve)
  }, {
    path: 'works',
    redirect: '/autumnvote2017/works/all',
    component: resolve => require(['@/pages/view.vue'], resolve),
    children: [{
      path: ':page',
      meta: config,
      component: resolve => require(['@/activity/2017/autumn-vote/pages/works'], resolve)
    }]
  }, {
    path: 'great-works',
    meta: config,
    component: resolve => require(['@/activity/2017/autumn-vote/pages/great-works'], resolve)
  }]
}

export default autumnVote
