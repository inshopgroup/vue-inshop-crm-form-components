<template>
  <div :class="['inshop-form', isInvalid ? 'is-invalid' : '']">
    <label :for="fieldId"><span v-if="required">* </span>{{ $t(label) }}</label>

    <vue-ctk-date-time-picker
        :id="fieldId"
        :value="item[property]"
        @input="$emit('formUpdated', property, $event)"
        :format="format"
        :formatted="format"
    ></vue-ctk-date-time-picker>

    <div v-if="isInvalid" class="inshop-errors">{{ errors[property] }}</div>
  </div>
</template>

<script>
  import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
  import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';

  export default {
    name: 'FormDateTimePicker',
    components: {VueCtkDateTimePicker},
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
      format: {
        type: String,
        default: 'DD-MM-YYYY HH:mm'
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
