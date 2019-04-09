<template>
  <div :class="['inshop-form', isInvalid ? 'is-invalid' : '']">
    <label :for="fieldId"><span v-if="required">* </span>{{ label }}</label>

    <vue-ctk-date-time-picker
        :id="fieldId"
        :value="item[property]"
        @input="$emit('formUpdated', property, $event)"
        :only-time="true"
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
    name: 'FormTimePicker',
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
        default: 'HH:mm'
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
    margin-top: 5px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    line-height: normal;
    color: rgb(221, 80, 80);
  }

  .date-time-picker input.field-input {
    width: 100%;
    height: 38px;
    min-height: 38px;
    box-sizing: border-box;
    border: 1px solid #000;
    border-radius: 5px;
    outline: none;
  }

  .inshop-form.is-invalid .date-time-picker input.field-input {
    border: 1px solid rgb(221, 80, 80);
  }

</style>
