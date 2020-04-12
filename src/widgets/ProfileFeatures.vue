<template lang="pug">

  .profile-features
    profile-features-section.profile-features__interests(title="Интересы")
      .profile-features__interests-list
        base-text.profile-features__interests-item(color="primary") Пиво
        base-text.profile-features__interests-item(color="primary") Рыбалка
        base-text.profile-features__interests-item(color="primary") Компьютерные игры
    features-skills.profile-features__skills
    profile-features-section.profile-features__about(title="О себе")
      base-text.profile-features__about-text(color="gray-darken-4").
        В университете занимался организацией форумов и конференций.
        Окончил курсы актерского и ораторского мастерства, спокойно чувствую себя на сцене и перед большой аудиторией — помогает опыт выступления в составе команды КВН.
        Эффектно провожу презентации и легко завожу новые контакты

</template>

<script>
import ProfileFeaturesSection from '@/widgets/ProfileFeaturesSection.vue'
import BaseText from '@/components/BaseText.vue'
import FeaturesSkills from '@/widgets/ProfileFeaturesCells/FeaturesSkills.vue'

export default {
    name: 'ProfileFeatures',
    components: { FeaturesSkills, BaseText, ProfileFeaturesSection },
}
</script>

<style lang="scss">
.profile-features {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
}

.profile-features__skills {
    grid-column: 2 / 5;
}

.profile-features__about {
    grid-column: 1 / 5;
}

.profile-features__interests-list,
.profile-features__skills-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}

.profile-features__interests-item,
.profile-features__skills-item {
    margin-right: 8px;
    margin-bottom: 8px;
    &:last-child {
        margin-right: 0;
    }
}
</style>
