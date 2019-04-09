<template>
  <div :class="['inshop-form', isInvalid ? 'is-invalid' : '']">
    <label :for="fieldId"><span v-if="required">* </span>{{ label }}</label>

    <div v-if="item[property]">
      <table class="table table-striped table-hover">
        <tbody>
        <tr v-for="file in item[property]" :key="file.id">
          <td>
            Preview
          </td>
          <td>
            {{ file.originalName }}
          </td>
          <td>
            <button type="button" @click.prevent="deleteFile(file.id)">Delete</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

    <div>
      <input type="file" :multiple="multiple" @change="fileSelected($event.target.files)" />
    </div>

    <div v-if="isInvalid" class="inshop-errors">{{ errors[property] }}</div>
  </div>
</template>

<script>
  export default {
    name: 'FormFile',
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
      formProperty: {
        type: String,
        required: true
      },
      route: {
        type: String,
        required: true
      },
      axios: {
        type: Object,
        default: null
      },
      multiple: {
        type: Boolean,
        default: false
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
    },
    methods: {
      fileSelected(files) {
        if (this.axios) {
          Array.from(files).forEach(file => {
            let config = {header: {'Content-Type': 'multipart/form-data'}}
            let data = new FormData();

            data.append(this.formProperty, file)

            this.axios.post(`${process.env.API_URL}/${this.route}`, data, config)
              .then(response => {
                this.$emit('formFileUploaded', response.data)
              })
              .catch(e => {
                this.$emit('formFileUploadFailed', e)
              })
          })
        }
      },
      deleteFile(id) {
        if (confirm('Are you sure?')) {
          this.$emit('formFileDeleted', id)
        }
      }
    }
  }
</script>

<style scoped>
  /*.inshop-form {*/
  /*  padding: 10px 0;*/
  /*  position: relative;*/
  /*}*/

  /*.inshop-form label {*/
  /*  margin-bottom: 5px;*/
  /*  display: block;*/
  /*  font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;*/
  /*  font-size: 14px;*/
  /*  font-weight: 700;*/
  /*  line-height: normal;*/
  /*  color: #333;*/
  /*}*/

  /*.inshop-form input {*/
  /*  font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;*/
  /*  font-size: 14px;*/
  /*  color: #555;*/
  /*  box-sizing: border-box;*/
  /*  border: none;*/
  /*  padding-left: 0;*/
  /*}*/
  /*.inshop-form.is-invalid label {*/
  /*  color: rgb(221, 80, 80);*/
  /*}*/

  /*.inshop-form.is-invalid .inshop-errors {*/
  /*  margin-top: 5px;*/
  /*  font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;*/
  /*  font-size: 12px;*/
  /*  line-height: normal;*/
  /*  color: rgb(221, 80, 80);*/
  /*}*/
</style>
