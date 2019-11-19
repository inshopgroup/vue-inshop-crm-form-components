<template>
  <div id="app">
    <div class="app-inner">
      <form-input :item="item" property="input" label="input" placeholder="some placeholder" :required="true" :errors="errors" @formUpdated="updateValue"></form-input>
      <form-number :item="item" property="number" label="number" placeholder="some placeholder" :required="true" :errors="errors" @formUpdated="updateValue"></form-number>
      <form-input type="email" :item="item" :required="true" property="email" label="email" placeholder="some placeholder" :errors="errors" @formUpdated="updateValue"></form-input>
      <form-password :item="item" property="password" label="password" placeholder="some placeholder" :required="true" :errors="errors" @formUpdated="updateValue"></form-password>
      <form-textarea :item="item" property="textarea" label="textarea" placeholder="some placeholder" :required="true" :errors="errors" @formUpdated="updateValue"></form-textarea>
      <form-checkbox :item="item" property="checkbox" label="checkbox" :required="true" :errors="errors" @formUpdated="updateValue"></form-checkbox>
      <form-time-picker :item="item" property="time" label="time" :required="true" :errors="errors" @formUpdated="updateValue"></form-time-picker>
      <form-date-picker :item="item" property="date" label="date" :required="true" :errors="errors" @formUpdated="updateValue"></form-date-picker>
      <form-date-time-picker :item="item" property="datetime" label="datetime" :required="true" :errors="errors" @formUpdated="updateValue"></form-date-time-picker>
      <form-file :item="item" property="files" form-property="file" :required="true" :multiple="true" route="/file" label="files" :errors="errors" @formFileDeleted="formFileDeleted"></form-file>
      <form-file preview :item="item" property="image" form-property="image" :required="true" :multiple="false" route="/image" label="image" :errors="errors" @formFileDeleted="formFileDeleted"></form-file>
      <form-select :item="item" property="select" option-store="someproperty" label="select" :required="true" :errors="errors" @formUpdated="updateValue"></form-select>
      <form-select-autocomplete :item="item" property="autocomplete" option-store="someproperty" optionUrl="someurl" label="select" :required="true" :errors="errors" @formUpdated="updateValue"></form-select-autocomplete>

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
          checkbox: true,
          time: null,
          date: null,
          datetime: null,
          files: [
            {
              id: 1,
              size: 1234235,
              mimeType: 'application/pdf',
              originalName: 'file1.txt',
              createdAt: '2019-03-16T20:59:57+01:00'
            },
            {
              id: 2,
              size: 1234235,
              mimeType: 'image/png',
              originalName: 'file2.txt',
              createdAt: '2019-03-16T20:59:57+01:00'
            }
          ],
          image:  {
            id: 1,
            size: 1234235,
            mimeType: 'image/png',
            originalName: 'image.png',
            createdAt: '2019-03-16T20:59:57+01:00'
          },
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
      },
      formFileDeleted(property, id) {
        Vue.set(this.item, property, this.item[property].filter(file => file.id != id))
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
  .app-inner {
    max-width: 600px;
    margin: auto;
    border: 1px solid #ccc;
    padding: 20px 30px 20px 30px;
  }
</style>
