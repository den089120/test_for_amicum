import { createRouter, createWebHashHistory } from 'vue-router'
import {RoutesPath} from "@/router/RouterPaths";
import JobComponent from "@/components/JobComponent";
import SchoolComponent from "@/components/SchoolComponent";
import MailComponent from "@/components/MailComponent";
import AchievementComponent from "@/components/AchievementComponent";
import HomeComponent from "@/components/HomeComponent";

const routes = [
    {
        path: RoutesPath.Main,
        name: 'HomeComponent',
        component: HomeComponent
    },
    {
        path: RoutesPath.book,
        name: 'SchoolComponent',
        component: SchoolComponent
    },
    {
        path: RoutesPath.mail,
        name: 'MailComponent',
        component: MailComponent
    },
    {
        path: RoutesPath.Job,
        name: 'JobComponent',
        component: JobComponent
    },
    {
        path: RoutesPath.starmedal,
        name: 'AchievementComponent',
        component: AchievementComponent
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
