<template>
  <div :class="['inshop-form', isInvalid ? 'is-invalid' : '']">
    <label :for="fieldId"><span v-if="required">* </span>{{ $t(label) }}</label>

    <vue-password
        :placeholder="placeholder"
        :id="fieldId"
        :value="item[property]"
        :user-inputs="[item[fieldUsername]]"
        @input="$emit('formUpdated', property, $event)"
    ></vue-password>

    <div v-if="isInvalid" class="inshop-errors">{{ errors[property] }}</div>
  </div>
</template>

<script>
  import VuePassword from 'vue-password'
  import "../../sass/styles.scss"

  export default {
    name: 'FormPassword',
    components: {VuePassword},
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
      fieldUsername: {
        type: String,
        default: 'username'
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
