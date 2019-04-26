<template>
  <div>
    <iframe :src="src" v-if="isPdf && src" :type="file.mimeType" width="400" height="300"></iframe>
    <img :src="src" v-if="isImage && src" :type="file.mimeType" width="400" :alt="file.originalName" />
    <div v-if="!this.isImage && !this.isPdf" class="preview-not-available">Preview not available</div>
  </div>
</template>

<script>
  export default {
    name: 'FilePreview',
    props: {
      file: {
        type: Object,
        required: true
      },
      axios: {
        type: Function,
        required: true
      },
      route: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        src: null,
      }
    },
    mounted () {
      if (this.isImage || this.isPdf) {
        this.load(this.file)
      }
    },
    computed: {
      isImage() {
        return ['image/jpeg', 'image/gif', 'image/png'].includes(this.file.mimeType)
      },
      isPdf() {
        return ['application/pdf', 'text/plain', 'text/xml', 'text/rtf'].includes(this.file.mimeType)
      }
    },
    methods: {
      load (file) {
        axios({
          url: this.route + '/download/' + file['id'],
          method: 'GET',
          responseType: 'blob',
        }).then(response => {
          this.src = window.URL.createObjectURL(new Blob([response.data], {type: file.mimeType})) + '#view=FitH'
        });
      }
    }
  }
</script>

<style>
  .preview-not-available{
    width: 400px;
    height: 300px;
    text-align: center;
    padding-top: 130px;
    border: 1px solid #c6c6c6;
    color: #c6c6c6;
  }
</style>
