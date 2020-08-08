<template>
  <QBtn color="primary" flat @click="$emit('cancel')">
    <slot> {{ $t("labels.cancel") }}</slot>
  </QBtn>
</template>

<script>
export default {
  name: "GenericCancelButton",
}
</script>
