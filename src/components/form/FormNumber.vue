<template>
  <div :class="['inshop-form', isInvalid ? 'is-invalid' : '']">
    <label :for="fieldId"><span v-if="required">* </span>{{ $t(label) }}</label>

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
  import "../../sass/styles.scss"

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
        default: () => ({})
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
