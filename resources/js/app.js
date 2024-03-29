import Vue from "vue";
import VueRouter from "vue-router";
import HeaderComponent from "./components/HeaderComponent";
import LoginComponent from "./components/LoginComponent";
import AboutComponent from "./components/AboutComponent";

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/login",
            name: "login",
            component: LoginComponent,
            // meta: { guestOnly: true }
        },
        {
            path: "/about",
            name: "about",
            component: AboutComponent,
            // meta: { AuthOnly: true }
        }
    ],
});

// function isLoggedIn() {
//     return localStorage.getItem("auth");
// }

// router.beforeEach((to, from, next) => {
//     if (to.matched.some(record => record.meta.authOnly)) {
//         if (!isLoggedIn()) {
//             next("/login");
//         } else {
//             next();
//         }
//     } else if (to.matched.some(record => record.meta.guestOnly)) {
//         if (isLoggedIn()) {
//             next("/about");
//         } else {
//             next();
//         }
//     } else {
//         next();
//     }
// });

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('header-component', HeaderComponent);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router
});
