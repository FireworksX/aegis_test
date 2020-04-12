<template lang="pug">

  .base-tags(:class="{ 'base-tags_open': isOpen }")
    .base-tags__input(@click="isOpen = !isOpen")
      vue-tags-input(
        :add-only-from-autocomplete="true"
        :value="value"
        :tags="tags"
        @input="inputValue"
        @before-deleting-tag="beforeDelete"
      )
    .base-tags__list(v-show="isOpen && filteredList.length > 0")
      .base-tags__item(
        v-for="(item, index) in filteredList"
        :key="index"
        @click="selectTag(item)"
      )
        slot(:item="item")

</template>

<script>
import { VueTagsInput } from '@johmun/vue-tags-input'

export default {
    name: 'BaseTags',
    components: {
        VueTagsInput,
    },
    props: {
        value: { type: String, required: true },
        tags: { type: Array, default: () => [] },
        list: { type: Array, default: () => [] },
        filterFn: { type: Function, default: (list) => list },
    },
    computed: {
        filteredList() {
            return this.filterFn(this.list, this.value)
        },
    },
    data() {
        return {
            isOpen: false,
        }
    },
    methods: {
        autoHide(evt) {
            if (!this.$el.contains(evt.target)) {
                this.isOpen = false
            }
        },
        inputValue(val) {
            this.$emit('input', val)
        },
        selectTag(tag) {
            this.$emit('input', '')
            this.$emit('select', tag)
        },
        beforeDelete(tag) {
            this.$emit('delete', this.list[tag.index])
            tag.deleteTag()
        },
    },
    mounted() {
        document.addEventListener('click', this.autoHide, false)
    },
    destroyed() {
        document.removeEventListener('click', this.autoHide, false)
    },
}
</script>

<style lang="scss">
.base-tags {
    position: relative;

    .vue-tags-input {
        max-width: none;
    }

    .ti-input {
        font-size: 14px;
        color: var(--color-gray-darken-4);
        padding: 6px 15px;
        border: 1px solid var(--color-gray-lighten-1);
        width: 100%;
        outline: none;
        box-sizing: border-box;
    }

    .ti-new-tag-input {
        font-family: var(--font-main);
        font-size: 14px;
    }

    .ti-tag {
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 10px;
        padding: 4px 6px 4px 15px;
        font-family: var(--font-main);
        font-size: 12px;
        color: var(--color-gray-darken-4);
        background: var(--color-gray-darken-1-500);
    }
}

.base-tags__list {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    max-height: 400px;
    overflow-y: auto;
    z-index: 1;
    padding: 10px 0;
    background: var(--color-white);
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
        0px 2px 4px rgba(0, 0, 0, 0.14);
}

.base-tags__item {
    padding: 6px 15px;
    cursor: pointer;
}

.base-tags_open {
    .ti-input {
        border-color: var(--color-primary);
    }
}
</style>
