<template>
  <v-select
      :id="id"
      :value="item[property]"
      :options="options"
      :label="optionLabel"
      :multiple="multiple"
      @input="$emit('fieldUpdated', property, $event)"
      @search="(keyword, loading) => {$emit('loadOptions', keyword, loading)}"
  ></v-select>
</template>

<script>
  import VSelect from 'vue-select'

  export default {
    name: 'FieldSelect',
    components: {VSelect},
    props: {
      id: {
        type: String,
        required: true
      },
      item: {
        type: Object,
        required: true
      },
      property: {
        type: String,
        required: true
      },
      options: {
        type: Array,
        required: []
      },
      optionLabel: {
        type: String,
        default: 'name'
      },
      multiple: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
