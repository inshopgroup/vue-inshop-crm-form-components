<template>
   <textarea
       :id="id"
       :value="item[property]"
       :rows="rows"
       @input="$emit('fieldUpdated', property, $event.target.value)"
   ></textarea>
</template>

<script>
  export default {
    name: 'FieldTeaxtarea',
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
      rows: {
        type: Number,
        default: 5
      }
    }
  }
</script>
