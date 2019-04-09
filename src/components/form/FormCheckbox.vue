<template>
  <div :class="['inshop-form', isInvalid ? 'is-invalid' : '']">
    <label :for="fieldId">{{ label }}</label>
      <field-checkbox
          :id="fieldId"
          :item="item"
          :property="property"
          @fieldUpdated="(property, value) => {$emit('formUpdated', property, value)}"
      ></field-checkbox>
      <span class="check__span"></span>
    <span v-if="required">*</span>
    <div v-if="isInvalid" class="inshop-errors">{{ errors[property] }}</div>
  </div>
</template>

<script>
  import FieldCheckbox from "../field/FieldCheckbox";

  export default {
    name: 'FormCheckbox',
    components: {FieldCheckbox},
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

  .inshop-form .inshop-checkbox-label {
    padding-left: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    line-height: normal;
  }

  .inshop-form label {
    margin-top: 16px;
    padding-left: 23px;
		position: relative;
		cursor: pointer;
		font-family: Arial, Helvetica, sans-serif;
		font-size: 16px;
    line-height: normal;
		color: #000;
  }

  .inshop-form.is-invalid label {
    color: #000;
  }

  input[type="checkbox"] + .check__span {
    position: absolute;
    top: 0;
    left: 0;
    width: 13px;
    height: 13px;
    background: #fff;
    border: 1px solid #000;
    border-radius: 3px;
  }

  input[type="checkbox"]:checked + .check__span::after {
    content: "";
    position: absolute;
    background: url(../../img/checked.png);
    background-repeat: no-repeat;
    background-position: center center;
    width: 14px;
    height: 11px;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }

  .inshop-form .check__hidden {
    display: none;
  }

  .check__hidden:not(:focus).check__hidden:not(:active),
  input[type="checkbox"].check__hidden,
  input[type="radio"].check__hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    bottom: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  .inshop-form input {
    position: absolute;
    left: -2px;
    top: -1px;
    z-index: 1;
    opacity: 0;
    border: none;
    cursor: pointer;
  }

  .inshop-form.is-invalid .inshop-errors {
    margin-top: 5px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    line-height: normal;
    color: rgb(221, 80, 80);
  }

</style>
