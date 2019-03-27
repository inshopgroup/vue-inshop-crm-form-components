import Vue from 'vue'
import FormTimePicker from './components/date/FormTimePicker'
import FormDatePicker from './components/date/FormDatePicker'
import FormDateTimePicker from './components/date/FormDateTimePicker'
import FormCheckbox from './components/FormCheckbox'
// import FormFiles from './components/FormFiles'
import FormInput from './components/FormInput'
import FormNumber from './components/FormNumber'
import FormPassword from './components/FormPassword'
// import FormSelect from './components/FormSelect'
// import FormSelectAutocomplete from './components/FormSelectAutocomplete'
import FormTextarea from './components/FormTextarea'

const Components = {
  FormTimePicker,
  FormDatePicker,
  FormDateTimePicker,
  FormCheckbox,
  // FormFiles,
  FormInput,
  FormNumber,
  FormPassword,
  // FormSelect,
  // FormSelectAutocomplete,
  FormTextarea
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
