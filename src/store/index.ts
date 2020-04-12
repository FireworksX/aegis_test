import Vue from 'vue'
import Vuex from 'vuex'
import { IPersonalSkill } from '@/types'
import profile from '@/store/profile'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        personalSkills: [] /** @interface IPersonalSkill[] */,
    },
    mutations: {
        setPersonalSkills(state: any, skills: IPersonalSkill[]) {
            state.personalSkills = skills
        },
    },
    actions: {},
    modules: {
        profile,
    },
    getters: {
        personalSkills(state: any): IPersonalSkill[] {
            return state.personalSkills
        },
    },
})
