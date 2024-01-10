import aboutViewVue from "@/views/aboutView.vue";
import contactsViewVue from "@/views/contactsView.vue";
import homeViewVue from "@/views/homeView.vue";
import projectsViewVue from "@/views/projectsView.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/',
        component: homeViewVue
    },
    {
        path: '/projects',
        component: projectsViewVue
    },
    {
        path: '/about',
        component: aboutViewVue
    },
    {
        path: '/contacts',
        component: contactsViewVue
    },
];

const Router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default Router;
