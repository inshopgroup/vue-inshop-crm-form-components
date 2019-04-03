<template>
  <div :class="['inshop-form', isInvalid ? 'is-invalid' : '']">
    <label :for="fieldId">{{ label }}</label>
    <span v-if="required">*</span>

    <div v-if="item[property]">
      <table class="table table-striped table-hover">
        <tbody>
        <tr v-for="file in item[property]" :key="file.id">
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
      <input type="file" :multiple="multiple" @change="fileSelected($event.target.files)"/>
    </div>

    <!-- <div class="upload">
      <label>
        <input class="upload-input" type="file" :multiple="multiple" @change="fileSelected($event.target.files)"/>
        <span class="upload-span">Attach SV</span>
      </label>
    </div> -->

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

<style>

  /* .upload {
  position: relative;
  overflow: hidden;
  display: inline-block;
  width: 200px;
  margin-left: 228px;
  vertical-align: middle;
  border: 1px solid #000;
  padding: 29px;
  text-align: center;
  transition: background-color .5s ease,color .5s ease;
}

.upload-input {
  display: none;
}

.upload-span {
  font-family: Helvetica,Arial,sans-serif;
  font-size: 14px;
  line-height: 1;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 3px;
} */

</style>
