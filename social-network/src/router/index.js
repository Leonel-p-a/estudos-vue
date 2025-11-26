import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import Profile from "../pages/Profile.vue";
import Messages from "../pages/Messages.vue";

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/perfil",
        component: Profile
    },
    {
        path: "/mensagens",
        component: Messages
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;