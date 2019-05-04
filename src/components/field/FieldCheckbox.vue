<template>
  <input
      :id="id"
      :checked="item[property]"
      type="checkbox"
      @input="$emit('fieldUpdated', property, $event.target.checked)"
  />
</template>

<script>
  export default {
    name: 'FieldCheckbox',
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
      }
    }
  }
</script>
