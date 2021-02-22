<!--<template>
    <div>
        <custom-input :value="searchText" @input="searchText = $event.target.value"></custom-input>
        <img src="../assets/search.png" />
    </div>
</template>

<script>
    App.component('custom-input', {
        props: ['modelValue'],
        emits: ['update:modelValue'],
        template: `<input v-model="value">`,
        computed: {
            value: {
                get() {
                    return this.modelValue
                },
                set(value) {
                    this.$emit('update:modelValue', value)
                }
            }
        }
    });
    export default {
        
    }
</script>-->
