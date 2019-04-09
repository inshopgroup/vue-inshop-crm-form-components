<template>
  <div :class="['inshop-form', isInvalid ? 'is-invalid' : '']">
    <label :for="fieldId">{{ label }}</label>
    <span v-if="required">*</span>

    <field-teaxtarea 
        placeholder="Enter some text"
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

<style scoped>

  .inshop-form {
    margin-bottom: 30px;
    position: relative;
  }

  .inshop-form label {
    margin-bottom: 5px;
    display: block;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    line-height: normal;
    color: #000;
  }

  .inshop-form textarea {
    width: 100%;
    height: 120px;
    box-sizing: border-box;
    padding: 15px 10px;
    border: 1px solid rgb(221, 80, 80);
    border-radius: 5px;
    outline: none;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    line-height: normal;
    color: #000;
    resize: none;
  }

  .inshop-form textarea::placeholder {
    color: #ccc;
  }

  .inshop-form.is-invalid label {
    color: rgb(221, 80, 80);
  }

  .inshop-form.is-invalid textarea {
    border: 1px solid rgb(221, 80, 80);
  }

  .inshop-form.is-invalid .inshop-errors {
    margin-top: 5px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    line-height: normal;
    color: rgb(221, 80, 80);
  }

</style>
