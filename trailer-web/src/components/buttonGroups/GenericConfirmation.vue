<template>
  <div class="row q-gutter-x-sm q-mt-lg justify-end">
    <GenericCancelButton @cancel="$emit('cancel')">
      <slot name="cancel-label"> </slot>
    </GenericCancelButton>
    <GenericSubmitButton :disabled="submitDisabled" @submit="$emit('submit')">
      <slot name="submit-label"> </slot>
    </GenericSubmitButton>
  </div>
</template>

<script>
import GenericSubmitButton from "@/components/buttons/GenericSubmit"
import GenericCancelButton from "@/components/buttons/GenericCancel"
export default {
  components: {
    GenericSubmitButton,
    GenericCancelButton,
  },
  props: {
    submitType: {
      type: String,
      default:  "button",
    },
    submitDisabled: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
