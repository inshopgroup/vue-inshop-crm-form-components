<template>
  <div :class="['inshop-form', isInvalid ? 'is-invalid' : '']">
    <label class="inshop-label" :for="fieldId">{{ label }}</label>
    <span v-if="required">*</span>

    <field-input 
        placeholder="Fill in the field"
        :id="fieldId"
        :item="item"
        :property="property"
        :type="type"
        @fieldUpdated="(property, value) => {$emit('formUpdated', property, value)}"
    ></field-input>

    <div v-if="isInvalid" class="inshop-errors">{{ errors[property] }}</div>
  </div>
</template>

<script>
  import FieldInput from "../field/FieldInput";

  export default {
    name: 'FormInput',
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
      type: {
        type: String,
        default: 'text'
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

  .inshop-label {
    margin-bottom: 5px;
    display: block;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    line-height: normal;
    color: #000;
  }

  .inshop-errors {
    position: absolute;
    bottom: -18px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    line-height: normal;
    color: rgb(221, 80, 80);
  }

  #input {
    width: 100%;
    height: 38px;
    padding-left: 10px;
    border: 1px solid rgb(221, 80, 80);
    border-radius: 5px;
    outline: none;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    line-height: normal;
    color: #000;
  }

  #input::placeholder {
    color: #ccc;
  }

  #email {
    width: 100%;
    height: 38px;
    padding-left: 10px;
    border: 1px solid rgb(221, 80, 80);
    border-radius: 5px;
    outline: none;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    line-height: normal;
    color: #000;
  }

  #email::placeholder {
    color: #ccc;
  }

</style>

