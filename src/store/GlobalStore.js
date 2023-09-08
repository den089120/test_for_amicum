import { defineStore } from 'pinia'
import {i18n} from "@/lib/i18n";

export const useGlobalStore = defineStore({
    id: 'globalStore',
    state: () => {
        return {
            isDark: false,
            isCollapsed: false,
            langApp: 'ru',
            isModal: false,
            isListArticles: 'big',
            profileUser: {
                id: '1',
                firstName: 'Иван',
                lastName: 'Иванов',
                surName: 'Иванович',
                date: '12.02.2000',
                category: 'Проходчик IV разряда',
                tabName: 'ТАБ № ГОКИ ОООО',
                widgets: {
                    briefing: 100,
                    preShiftExaminer: 35,
                    testsCompleted: 6,
                    fulTest: 12,
                    attestationThrough: 21,
                    allDaysAttes: 31,
                }
            }
        }
    },
    getters: {},
    actions: {
        changeLang (lang) {
            this.langApp = lang
            i18n.setLocale(this.langApp)
        },
        changeTheme () {
            this.isDark = !this.isDark
        },
    }
})
