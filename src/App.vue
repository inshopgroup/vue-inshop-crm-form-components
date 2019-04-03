<template>
  <div id="app">
    <div class="app-inner">
      <form-input :item="item" property="input" label="Input" :errors="errors" @formUpdated="updateValue"></form-input>
      <form-number :item="item" property="number" label="Number" :errors="errors" @formUpdated="updateValue"></form-number>
      <form-input placeholder="Enter email" type="email" :item="item" property="email" label="email" :errors="errors" @formUpdated="updateValue"></form-input>
      <form-password :item="item" property="password" label="Password" :errors="errors" @formUpdated="updateValue"></form-password>
      <form-textarea :item="item" property="textarea" label="Textarea" :errors="errors" @formUpdated="updateValue"></form-textarea>
      <form-checkbox :item="item" property="checkbox" label="Checkbox" :errors="errors" @formUpdated="updateValue"></form-checkbox>
      <form-time-picker :item="item" property="time" label="Time" :errors="errors" @formUpdated="updateValue"></form-time-picker>
      <form-date-picker :item="item" property="date" label="Date" :errors="errors" @formUpdated="updateValue"></form-date-picker>
      <form-date-time-picker :item="item" property="datetime" label="Datetime" :errors="errors" @formUpdated="updateValue"></form-date-time-picker>
      <form-file :item="item" property="files" form-property="file" route="/file" label="Files" :errors="errors" @formUpdated="updateValue"></form-file>
      <form-select :item="item" property="select" option-store="someproperty" label="Select" :errors="errors" @formUpdated="updateValue"></form-select>
      <form-select-autocomplete :item="item" property="autocomplete" option-store="someproperty" optionUrl="someurl" label="Select" :errors="errors" @formUpdated="updateValue"></form-select-autocomplete>

      <pre>{{ data }}</pre>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import FormInput from "./components/form/FormInput";
  import FormPassword from "./components/form/FormPassword";
  import FormTextarea from "./components/form/FormTextarea";
  import FormCheckbox from "./components/form/FormCheckbox";
  import FormTimePicker from "./components/form/date/FormTimePicker";
  import FormDatePicker from "./components/form/date/FormDatePicker";
  import FormDateTimePicker from "./components/form/date/FormDateTimePicker";
  import FormFile from "./components/form/FormFile";
  import FormSelect from "./components/form/FormSelect";
  import FormSelectAutocomplete from "./components/form/FormSelectAutocomplete";
  import FormNumber from "./components/form/FormNumber";

  export default {
    name: 'app',
    components: {
      FormNumber,
      FormSelect,
      FormSelectAutocomplete,
      FormDateTimePicker,
      FormDatePicker,
      FormTimePicker,
      FormFile,
      FormCheckbox,
      FormTextarea,
      FormPassword,
      FormInput
    },
    data() {
      return {
        item: {
          input: null,
          number: null,
          email: null,
          password: null,
          textarea: null,
          checkbox: null,
          time: null,
          date: null,
          datetime: null,
          files: null,
          select: null,
          autocomplete: null,
        },
        errors: {
          input: 'Some error',
          number: 'Some error',
          email: 'Some error',
          password: 'Some error',
          textarea: 'Some error',
          checkbox: 'Some error',
          time: 'Some error',
          date: 'Some error',
          datetime: 'Some error',
          files: 'Some error',
          select: 'Some error',
          autocomplete: 'Some error',
        }
      }
    },
    methods: {
      updateValue(property, value) {
        Vue.set(this.item, property, value)
      }
    },
    computed: {
      data() {
        return JSON.stringify(this.item, null, 2);
      }
    }
  }
</script>

<style>

  #app {
    max-width: 600px;
    margin: auto;
    border-radius: 5px;
    border: 1px solid #000;
  }

  .app-inner {
    padding: 20px 45px 20px 33px;
  }

  #email {
    width: 100%;
    height: 38px;
    padding-left: 10px;
    border: 1px solid rgb(221, 80, 80);
    border-radius: 5px;
    outline: none;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    line-height: normal;
    color: #ccc;
  }

  #email::placeholder {
    color: #ccc;
  }

  .VuePassword__Meter {
    margin: .2rem auto 0;
    padding-left: .4rem;
  }

  .VuePassword__Meter path {
    stroke-width: 1px;
  }

  #time {
    height: 38px;
    /* border: 1px solid rgb(221, 80, 80); */
  }

  #date {
    height: 38px;
    /* border: 1px solid rgb(221, 80, 80); */
  }

  #datetime {
    height: 38px;
    /* border: 1px solid rgb(221, 80, 80); */
  }

  #select {
    /* border: 1px solid rgb(221, 80, 80); */
    border-radius: 5px;
  }

  #autocomplete {
    /* border: 1px solid rgb(221, 80, 80); */
    border-radius: 5px;
  }

  .v-select.searchable .dropdown-toggle {
    height: 38px;
  }

  .inshop-form {
    margin-bottom: 30px;
    position: relative;
  }

  .inshop-errors {
    /* display: none; */
    position: absolute;
    bottom: -20px;
  }

  .help-block {
    color: rgb(221, 80, 80);
  }

  
</style>