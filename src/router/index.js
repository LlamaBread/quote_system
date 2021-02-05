import VueRouter from 'vue-router'
import Customer from '../components/Customer.vue'
import Header from '../components/Header';


export default new VueRouter({
    routes: [
        {
            path: '/customer/:id',
            name: 'Customer',
            component: Customer
        },
        {
            path: '/header/:id',
            name: 'Header',
            component: Header
        }
    ]
})