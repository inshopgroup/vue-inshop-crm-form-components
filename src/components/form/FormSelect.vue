<template>
  <div :class="['inshop-form', isInvalid ? 'is-invalid' : '']">
    <label :for="fieldId"><span v-if="required">* </span>{{ label }}</label>

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
    padding: 10px 0;
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

  .inshop-form.is-invalid label {
    color: rgb(221, 80, 80);
  }

  .inshop-form.is-invalid .inshop-errors {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    line-height: normal;
    color: rgb(221, 80, 80);
  }

  .inshop-form .v-select.searchable .dropdown-toggle {
    width: 100%;
    height: 38px;
    box-sizing: border-box;
    border: 1px solid #000;
    border-radius: 5px;
    outline: none;
  }

  .inshop-form .v-select .open-indicator:before {
    border-color: #000;
  }

  .inshop-form.is-invalid .v-select.searchable .dropdown-toggle {
    border: 1px solid rgb(221, 80, 80);
  }

  .inshop-form.is-invalid .v-select .open-indicator:before {
    border-color: rgb(221, 80, 80);
  }

</style>


