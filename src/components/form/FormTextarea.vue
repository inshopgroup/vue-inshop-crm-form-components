<template>
  <div :class="['inshop-form', isInvalid ? 'is-invalid' : '']">
    <label class="inshop-label" :for="fieldId">{{ label }}</label>
    <span v-if="required">*</span>

    <field-teaxtarea
        :id="fieldId"
        :item="item"
        :property="property"
        :rows="rows"
        @fieldUpdated="(property, value) => {$emit('formUpdated', property, value)}"
    ></field-teaxtarea>

    <div v-if="isInvalid" class="inshop-errors">{{ errors[property] }}</div>
  </div>
</template>

<script>
  import FieldTeaxtarea from "../field/FieldTextarea";

  export default {
    name: 'FormTextarea',
    components: {FieldTeaxtarea},
    props: {
      id: {
        type: String,
        default: null
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
      },
      label: {
        type: String,
        default: null
      },
      errors: {
        type: Object,
        default: () => {}
      },
      required: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      fieldId() {
        return this.id || this.property
      },
      isInvalid() {
        return Object.keys(this.errors).length > 0 && this.errors[this.property]
      }
    }
  }
</script>

<style>

  #textarea {
    width: 100%;
    height: 120px;
    padding-left: 10px;
    padding-top: 15px;
    border: 1px solid rgb(221, 80, 80);
    border-radius: 5px;
    outline: none;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    line-height: normal;
    color: #ccc;
    resize: none;
  }

</style>
