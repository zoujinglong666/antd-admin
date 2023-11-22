<script setup lang="ts">
const route = useRoute()
const url = computed(() => route?.meta?.url)
const loading = ref(true)
function finishLoading() {
  loading.value = false
}
</script>

<template>
  <iframe w-full h-full flex flex-col flex-1 :src="url" style="border: none;width: 100%;height: 100vh" @load="finishLoading" />
</template>

<style>

</style>
