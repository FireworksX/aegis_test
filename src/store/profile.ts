import { IPersonalSkill } from '@/types'

export default {
    namespaced: true,
    state: {
        skills: [] /** @interface IPersonalSkill[] */,
        avatar:
            'https://sun9-38.userapi.com/impg/c857724/v857724621/1b6e3e/KoXYOW5Hyqs.jpg?size=400x0&quality=90&sign=dcc04caefe741c98fcd1bbfccd9d9e93',
    },
    mutations: {
        setSkills(state: any, skills: IPersonalSkill[]) {
            state.skills = skills
        },
        setAvatar(state: any, url: string) {
            state.avatar = url
        },
    },
    getters: {
        skills(state: any): IPersonalSkill[] {
            return state.skills
        },
        avatar(state: any): string {
            return state.avatar
        },
    },
}
