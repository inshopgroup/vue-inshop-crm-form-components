<template>
  <input
      :id="id"
      :value="item[property]"
      :type="type"
      @input="$emit('fieldUpdated', property, $event.target.value)"
  />
</template>

<script>
  export default {
    name: 'FieldInput',
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
      type: {
        type: String,
        default: 'text'
      }
    }
  }
</script>
