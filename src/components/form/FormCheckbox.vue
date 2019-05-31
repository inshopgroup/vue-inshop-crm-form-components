<template>
  <div :class="['inshop-form', isInvalid ? 'is-invalid' : '']">
    <field-checkbox
        :id="fieldId"
        :item="item"
        :property="property"
        @fieldUpdated="(property, value) => {$emit('formUpdated', property, value, id)}"
    ></field-checkbox>

    <label :for="fieldId" class="checkbox"><span v-if="required">* </span>{{ $t(label) }}</label>

    <div v-if="isInvalid" class="inshop-errors">{{ errors[property] }}</div>
  </div>
</template>

<script>
  import FieldCheckbox from "../field/FieldCheckbox";
  import "../../sass/styles.scss"

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
