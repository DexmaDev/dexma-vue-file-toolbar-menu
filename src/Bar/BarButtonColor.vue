<template>
    <div class="bar-button" :class="button_class" :title="title" @mousedown="mousedown_handler">

        <BarIcon v-if="item.icon" :icon="item.icon" :color="css_color" />
        <div v-else class="color-square" :style="{ 'background-color': css_color }"></div>

        <div class="menu" :class="item.menu_class" :id="item.menu_id"
             @click="(e) => item.stay_open ? e.stopPropagation() : true">
            <component v-model="selectedColor" :is="item.type || 'compact'" />
        </div>

    </div>
</template>

<script>
import BarButtonGeneric from './BarButtonGeneric.vue'
import { components as VueColorComponents } from '@ckpack/vue-color'
import BarIcon from './BarIcon.vue'

export default {
    mixins: [BarButtonGeneric, BarIcon],
    components: VueColorComponents.reduce((acc, cur) => {
        acc[cur.name] = cur
        return acc
    }, {}),
    data() {
        return {
            selectedColor: this.item.color,
        }
    },

    computed: {
        is_menu() {
            return true
        },
        css_color() {
            return this.selectedColor.hex8 || this.selectedColor || '#000'
        },
    },

    methods: {
        mousedown_handler(e) {
            if (e.target.tagName.toLowerCase() != 'input') e.preventDefault()
        },
    },

    watch: {
        'item.color'(item_color) {
            if (this.selectedColor !== item_color) {
                this._prevent_next_color_update = true
                this.selectedColor = item_color
            }
        },
        selectedColor(new_color) {
            if (this.item.update_color && !this._prevent_next_color_update) {
                this.item.update_color(new_color)
            }
            this._prevent_next_color_update = false
        },
    },
}
</script>

<style scoped>
.bar-button > .color-square {
    width: 15px;
    height: 15px;
    border: solid 1px rgba(0, 0, 0, 0.7);
    margin: 0 3px;
}

.bar-button.disabled > .color-square {
    border: solid 1px var(--bar-button-disabled-color, rgba(0, 0, 0, 0.3));
}
</style>