<template>
  <div :class="['inshop-form', isInvalid ? 'is-invalid' : '']">
    <label class="inshop-label" :for="fieldId">{{ label }}</label>
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

<style>

  .inshop-form {
    margin-bottom: 30px;
    position: relative;
  }

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

  #password {
    width: 100%;
    height: 38px;
    padding-right: 0;
    padding-left: 10px;
    border: 1px solid rgb(221, 80, 80);
    border-radius: 5px;
    outline: none;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    line-height: normal;
    color: #000;
  }

  #password::placeholder {
    color: #ccc;
  }

  .VuePassword__Meter {
    margin: .2rem auto 0;
    padding-left: .4rem;
  }

  .VuePassword__Meter path {
    stroke-width: 1px;
  }

</style>

