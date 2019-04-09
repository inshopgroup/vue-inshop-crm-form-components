<template>
  <div :class="['inshop-form', isInvalid ? 'is-invalid' : '']">
    <label :for="fieldId">{{ label }}</label>
    <span v-if="required">*</span>

    <vue-password 
        placeholder="Enter password"
        :id="fieldId"
        :value="item[property]"
        :user-inputs="[item[fieldUsername]]"
        @input="$emit('formUpdated', property, $event)"
    ></vue-password>

    <div v-if="isInvalid" class="inshop-errors">{{ errors[property] }}</div>
  </div>
</template>

<script>
  import VuePassword from "vue-password/src/components/VuePassword";

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
    padding-right: 80px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    line-height: normal;
    color: rgb(221, 80, 80);
  }

</style>

<style>

  .inshop-form .VuePassword input {
    width: 100%;
    height: 38px;
    box-sizing: border-box;
    padding: 0 10px;
    border: 1px solid #000;
    border-radius: 5px;
    outline: none;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    line-height: normal;
    color: #000;
  }

  .inshop-form .VuePassword input::placeholder {
    color: #ccc;
  }

  .inshop-form.is-invalid .VuePassword input {
    border: 1px solid rgb(221, 80, 80);
  }

  .VuePassword__Meter {
    margin: .2rem auto 0;
    padding-left: 0;
  }

  .VuePassword__Meter path {
    stroke-width: 1px;
  }

  .VuePassword__Message {
    position: absolute;
    right: 0;
    bottom: -23px;
  }

</style>
