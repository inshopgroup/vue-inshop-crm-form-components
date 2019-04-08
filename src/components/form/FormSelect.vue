<template>
  <div :class="['inshop-form', isInvalid ? 'is-invalid' : '']">
    <label class="inshop-label" :for="fieldId">{{ label }}</label>
    <span v-if="required">*</span>

    <field-select
        :id="fieldId"
        :item="item"
        :property="property"
        :options="options"
        :label="optionLabel"
        :multiple="multiple"
        @input="$emit('formUpdated', property, $event)"
    ></field-select>

    <div v-if="isInvalid" class="inshop-errors">{{ errors[property] }}</div>
  </div>
</template>

<script>
  import FieldSelect from "../field/FieldSelect";

  export default {
    name: 'FormSelect',
    components: {FieldSelect},
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
      optionLabel: {
        type: String,
        default: 'name'
      },
      optionStore: {
        type: String,
        required: true
      },
      multiple: {
        type: Boolean,
        default: false
      },
      errors: {
        type: Object,
        default: () => {}
      },
      label: {
        type: String,
        default: null
      },
      required: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      options() {
        if (this.$store) {
          return this.$store.getters[this.optionStore + '/items'] || []
        }

        return []
      },
      fieldId() {
        return this.id || this.property
      },
      isInvalid() {
        return Object.keys(this.errors).length > 0 && this.errors[this.property]
      }
    },
    mounted() {
      this.getOptions()
    },
    methods: {
      getOptions() {
        if (this.$store) {
          this.$store.dispatch(this.optionStore + '/getItems')
        }
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

</style>

