<template>
  <div :class="['inshop-form', isInvalid ? 'is-invalid' : '']">
    <label :for="fieldId"><span v-if="required">* </span>{{ label }}</label>

    <field-input
        :placeholder="placeholder"
        :id="fieldId"
        :item="item"
        :property="property"
        type="number"
        @fieldUpdated="(property, value) => {$emit('formUpdated', property, parseInt(value))}"
    ></field-input>

    <div v-if="isInvalid" class="inshop-errors">{{ errors[property] }}</div>
  </div>
</template>

<script>
  import FieldInput from "../field/FieldInput";

  export default {
    name: 'FormNumber',
    components: {FieldInput},
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
      label: {
        type: String,
        default: null
      },
      placeholder: {
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
    padding: 10px 0;
    position: relative;
  }

  .inshop-form label {
    margin-bottom: 5px;
    display: block;
    font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: normal;
    color: #333;
  }

  .inshop-form input {
    width: 100%;
    height: 38px;
    box-sizing: border-box;
    padding: 0 10px;
    border: 1px solid #d2d6de;
    outline: none;
    font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: normal;
    color: #555;
  }

  .inshop-form input:focus {
    border: 1px solid #3c8dbc;
  }

  .inshop-form input::placeholder {
    color: #ccc;
  }

  .inshop-form.is-invalid label {
    color: rgb(221, 80, 80);
  }

  .inshop-form.is-invalid .inshop-errors {
    margin-top: 5px;
    font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 12px;
    line-height: normal;
    color: rgb(221, 80, 80);
  }

  .inshop-form.is-invalid input {
    border: 1px solid rgb(221, 80, 80);
  }
</style>
