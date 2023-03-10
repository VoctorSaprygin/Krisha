import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export const i18n = new VueI18n({ 
    locale: 'ru',
    fallbackLocale: 'kk',
    messages: {
        ru: {
            navFav: 'Избранное', 
            signUp: 'Регистрация',
            perAcc: 'Личный кабинет'
        },
        kk: {
            navFav: 'Таңдаулы', 
            signUp: 'Тіркелу',
            perAcc: 'Жеке кабинет'
        }
    }
})
