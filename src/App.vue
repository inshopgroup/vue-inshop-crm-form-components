<template>
  <div id="app">
    <form-input :item="item" property="input" label="Input" :errors="errors" @formUpdated="updateValue"></form-input>
    <form-number :item="item" property="number" label="Number" :errors="errors" @formUpdated="updateValue"></form-number>
    <form-input type="email" :item="item" property="email" label="email" :errors="errors" @formUpdated="updateValue"></form-input>
    <form-password :item="item" property="password" label="Password" :errors="errors" @formUpdated="updateValue"></form-password>
    <form-textarea :item="item" property="textarea" label="Textarea" :errors="errors" @formUpdated="updateValue"></form-textarea>
    <form-checkbox :item="item" property="checkbox" label="Checkbox" :errors="errors" @formUpdated="updateValue"></form-checkbox>
    <form-time-picker :item="item" property="time" label="Time" :errors="errors" @formUpdated="updateValue"></form-time-picker>
    <form-date-picker :item="item" property="date" label="Date" :errors="errors" @formUpdated="updateValue"></form-date-picker>
    <form-date-time-picker :item="item" property="datetime" label="Datetime" :errors="errors" @formUpdated="updateValue"></form-date-time-picker>
    <!--<form-files :item="item" property="files" label="Fiels" :errors="errors" @formUpdated="updateValue"></form-files>-->
    <!--<form-select :item="item" property="select" label="Select" :errors="errors" @formUpdated="updateValue"></form-select>-->
    <!--<form-select-autocomplete :item="item" property="autocomplete" label="Select" :errors="errors" @formUpdated="updateValue"></form-select-autocomplete>-->

    <pre>{{ data }}</pre>
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
  import FormSelect from "./components/form/FormSelect";
  import FormNumber from "./components/form/FormNumber";

  export default {
    name: 'app',
    components: {
      FormNumber,
      FormSelect,
      FormDateTimePicker,
      FormDatePicker,
      FormTimePicker,
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
