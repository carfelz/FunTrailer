<template>
  <div class="row q-gutter-sm q-mt-lg justify-end">
    <FormSubmitButton
      v-if="!hideSubmit"
      :loading="loading"
      :type="submitType"
      :class="$style.button"
      :disable="disable || disableSubmit || loading"
      @click="$emit('submit-click')"
    >
      <slot name="submit-label"> </slot>
    </FormSubmitButton>
    <FormCancelButton
      v-if="!hideCancel"
      v-show="!loading"
      :loading="loading"
      :disable="disable || disableCancel || loading"
      :class="$style.button"
      @cancel="$emit('cancel')"
    >
      <slot name="cancel-label"></slot>
    </FormCancelButton>
  </div>
</template>

<script>
import FormSubmitButton from "@/components/buttons/FormSubmit"
import FormCancelButton from "@/components/buttons/FormCancel"
export default {
  components: {
    FormSubmitButton,
    FormCancelButton,
  },
  props: {
    hideCancel: {
      type: Boolean,
      default: false,
    },
    hideSubmit: {
      type: Boolean,
      default: false,
    },
    disable: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disableSubmit: {
      type: Boolean,
      default: false,
    },
    disableCancel: {
      type: Boolean,
      default: false,
    },
    submitType: {
      type: String,
      default: "submit",
    },
  },
}
</script>

<style lang="scss" module>
.button {
  @media only screen and (max-width: $max-page-width) {
    width: 100%;
  }
}
</style>
