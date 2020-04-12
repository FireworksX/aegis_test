<template lang="pug">

  profile-features-section(
    title="Профессиональные навыки"
    :editable="hasSkills"
    @edit="state = 'editable'"
  )
    .profile-features__skills-list(v-if="state === 'visible' && hasSkills")
      base-text.profile-features__skills-item(
        v-for="(skill, index) in profileSkills"
        :key="index"
        color="primary"
      ) {{ skill.name }}
    template(v-else-if="state === 'editable'")
      wrap-submit(
        @accept="acceptEdit"
        @cancel="cancelEdit"
      )
        base-tags(
          v-model="value"
          :list="skillsList"
          :tags="tags"
          :filter-fn="filterFn"
          @select="selectTag"
          @delete="deleteTag"
        )
          base-text(slot-scope="{ item }" color="primary") {{ item.name }}
    template(v-else)
      base-button(mode="empty" @press="state = 'editable'")
        base-text(color="primary") Заполнить

</template>

<script>
import ProfileFeaturesSection from '@/widgets/ProfileFeaturesSection.vue'
import BaseText from '@/components/BaseText.vue'
import BaseTags from '@/components/BaseTags.vue'
import BaseButton from '@/components/BaseButton.vue'
import WrapSubmit from '@/components/WrapSubmit.vue'

export default {
    name: 'FeaturesSkills',
    components: { WrapSubmit, BaseButton, BaseTags, BaseText, ProfileFeaturesSection },
    computed: {
        skillsList() {
            return this.$store.getters.personalSkills
        },
        hasSkills() {
            return this.profileSkills.length > 0
        },
        profileSkills() {
            return this.$store.getters['profile/skills']
        },
    },
    data() {
        return {
            tags: [],
            value: '',
            state: 'visible',
            selectedSkills: [],
        }
    },
    methods: {
        selectTag(tag) {
            this.tags.push({
                text: tag.name,
            })
            this.selectedSkills.push(tag)
        },
        deleteTag(tag) {
            this.selectedSkills.splice(
                this.selectedSkills.findIndex((el) => el.id === tag.id),
                1
            )
            this.tags = this.selectedSkills.map((skill) => {
                return {
                    text: skill.name,
                }
            })
        },
        filterFn(list, val) {
            if (val !== undefined && val.length > 0) {
                return list.filter((el) => {
                    const findEl = el.name.toLowerCase().indexOf(val.toLowerCase()) !== -1
                    const hasInStore =
                        this.selectedSkills.findIndex((skill) => skill.name === el.name) !== -1
                    return findEl && !hasInStore
                })
            }
            return []
        },
        acceptEdit() {
            this.state = 'visible'
            this.$store.commit('profile/setSkills', [...this.selectedSkills])
        },
        cancelEdit() {
            this.state = 'visible'
            this.selectedSkills = this.profileSkills
            this.tags = this.selectedSkills.map((skill) => {
                return {
                    text: skill.name,
                }
            })
        },
    },
}
</script>

<style scoped></style>
