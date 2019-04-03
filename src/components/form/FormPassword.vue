<template>
  <div :class="['inshop-form', isInvalid ? 'is-invalid' : '']">
    <label class="inshop-label" :for="fieldId">{{ label }}</label>
    <span v-if="required">*</span>

    <vue-password placeholder="Enter password"
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

  #password {
    width: 100%;
    height: 38px;
    padding-right: 0;
    padding-left: 10px;
    border: 1px solid rgba(60,60,60,.26);
    border-radius: 5px;
    outline: none;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    line-height: normal;
    color: #ccc;
  }

  #password::placeholder {
    color: #ccc;
  }

  #password:focus {
    border: 1px solid #287d66;
  }

</style>

