import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Es6Module from '@/components/Es6Module'
import CommonJSModule from '@/components/CommonJSModule'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Es6Module',
            component: Es6Module
        },
        {
            path: '/commonjsmodule',
            name: 'CommonJSModule',
            component: CommonJSModule
        },
        {
            path: '/hello',
            name: 'Hello',
            component: Hello
        }
    ]
})
