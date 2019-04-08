<template>
  <input
      :id="id"
      :value="item[property]"
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

<style scoped>

  .inshop-form {
    margin-bottom: 30px;
    position: relative;
  }

</style>
