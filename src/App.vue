<template>
  <div id="app">
    <form-input :item="item" property="input" label="Input" :errors="errors" @fieldUpdated="updateValue"></form-input>
    <form-number :item="item" property="number" label="Number" :errors="errors" @fieldUpdated="updateValue"></form-number>
    <form-password :item="item" property="password" label="Password" :errors="errors" @fieldUpdated="updateValue"></form-password>
    <form-textarea :item="item" property="textarea" label="Textarea" :errors="errors" @fieldUpdated="updateValue"></form-textarea>
    <form-checkbox :item="item" property="checkbox" label="Checkbox" :errors="errors" @fieldUpdated="updateValue"></form-checkbox>
    <form-time-picker :item="item" property="time" label="Time" :errors="errors" @fieldUpdated="updateValue"></form-time-picker>
    <form-date-picker :item="item" property="date" label="Date" :errors="errors" @fieldUpdated="updateValue"></form-date-picker>
    <form-date-time-picker :item="item" property="datetime" label="Datetime" :errors="errors" @fieldUpdated="updateValue"></form-date-time-picker>
    <!--<form-files :item="item" property="files" label="Fiels" :errors="errors" @fieldUpdated="updateValue"></form-files>-->
    <!--<form-select :item="item" property="select" label="Select" :errors="errors" @fieldUpdated="updateValue"></form-select>-->
    <!--<form-select-autocomplete :item="item" property="select" label="Select" :errors="errors" @fieldUpdated="updateValue"></form-select-autocomplete>-->

    <pre>{{ data }}</pre>
  </div>
</template>

<script>
  import Vue from 'vue'
  import FormInput from "./components/FormInput";
  import FormNumber from "./components/FormNumber";
  import FormPassword from "./components/FormPassword";
  import FormTextarea from "./components/FormTextarea";
  import FormCheckbox from "./components/FormCheckbox";
  import FormTimePicker from "./components/date/FormTimePicker";
  import FormDatePicker from "./components/date/FormDatePicker";
  import FormDateTimePicker from "./components/date/FormDateTimePicker";
  import FormSelect from "./components/FormSelect";

  export default {
    name: 'app',
    components: {
      FormSelect,
      FormDateTimePicker,
      FormDatePicker, FormTimePicker, FormCheckbox, FormTextarea, FormPassword, FormNumber, FormInput},
    data() {
      return {
        item: {},
        errors: {}
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
