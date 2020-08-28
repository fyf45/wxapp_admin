import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
      path: '/login',
      component: (resolve) => {
        require(['@/views/Login'], resolve);
      },
      name: 'login'
    },
    {
      path: '/',
      component: (resolve) => {
        require(['@/views/Main'], resolve);
      },
      meta: {
        requireAuth: true
      },
      redirect: {
        path: '/home'
      },
      children: [{
          path: '/404',
          component: (resolve) => {
            require(['@/views/pages/404'], resolve);
          },
          name: '404'
        },
        {
          path: '/home',
          component: (resolve) => {
            require(['@/views/pages/Home'], resolve);
          },
          name: '主页'
        },
        {
          path: '/reviewList',
          name: '审核列表',
          component: (resolve) => {
            require(['@/views/pages/Order/ReviewList'], resolve);
          }
        }, 
        {
          path: '/shipList',
          name: '发货列表',
          component: (resolve) => {
            require(['@/views/pages/Order/ShipList'], resolve);
          }
        },
        {
          path: '/orderlist/reviewdetail',
          name: '审核详情',
          component: (resolve) => {
            require(['@/views/pages/Order/ReviewDetails'], resolve);
          }
        },
        {
          path: '/orderlist/shipdetail',
          name: '发货详情',
          component: (resolve) => {
            require(['@/views/pages/Order/ShipDetails'], resolve);
          }
        },
        {
          path: '/goods',
          name: '商品列表',
          component: (resolve) => {
            require(['@/views/pages/Goods/GoodsList'], resolve);
          }
        }, ,
        {
          path: '/goods/goodsdetail',
          name: '添加商品',
          component: (resolve) => {
            require(['@/views/pages/Goods/GoodsDetail'], resolve);
          }
        },
        {
          path: '/programData',
          name: '方案列表',
          component: (resolve) => {
            require(['@/views/pages/Data/programDataList'], resolve);
          }
        },
        {
          path: '/programData/programDataDetail',
          name: '方案详情',
          component: (resolve) => {
            require(['@/views/pages/Data/programDataDetail'], resolve);
          }
        },
        {
          path: '/acupointData',
          name: '穴位列表',
          component: (resolve) => {
            require(['@/views/pages/Data/acupointDataList'], resolve);
          }
        },
        {
          path: '/acupointData/acupointDataDetail',
          name: '穴位详情',
          component: (resolve) => {
            require(['@/views/pages/Data/acupointDataDetail'], resolve);
          }
        },
        {
          path: '/pro',
          name: '角色列表',
          component: (resolve) => {
            require(['@/views/pages/User/proList'], resolve);
          }
        }, ,
        {
          path: '/user',
          name: '用户列表',
          component: (resolve) => {
            require(['@/views/pages/User/userList'], resolve);
          }
        },
        {
          path: '/operation',
          name: '操作日志',
          component: (resolve) => {
            require(['@/views/pages/User/Operation'], resolve);
          }
        }
      ]
    },
    {
      path: '*',
      redirect: {
        path: '/404'
      }
    }
  ]
});
