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
        @loadOptions="loadOptions"
    ></field-select>

    <div v-if="isInvalid" class="inshop-errors">{{ errors[property] }}</div>
  </div>
</template>

<script>
  import debounce from 'lodash.debounce'
  import FieldSelect from "../field/FieldSelect";

  export default {
    name: 'FormSelectAutocomplete',
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
      optionUrl: {
        type: String,
        required: true
      },
      searchField: {
        type: String,
        default: 'name'
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
    methods: {
      loadOptions(keyword, loading) {
        loading(true);
        this.search(loading, keyword, this);
      },
      search() {
        if (this.$store) {
          debounce(
            (loading, keyword, vm) => {
              vm.$store.dispatch('general/loadingAllow', false)
              vm.$store.dispatch(vm.optionStore + '/getItems', '/' + vm.optionUrl + '?' + vm.searchField + '=' + keyword)
              loading(false);
            },
            800
          )
        }
      }
    }
  }
</script>

<style>

  .inshop-label {
    margin-bottom: 5px;
    display: block;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    line-height: normal;
  }

  .inshop-errors {
    position: absolute;
    bottom: -20px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    line-height: normal;
    color: rgb(221, 80, 80);
  }

</style>
