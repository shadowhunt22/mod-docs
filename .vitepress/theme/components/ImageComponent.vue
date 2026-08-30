<script setup lang="ts">
defineProps<{
    projectName: string
    imageUrl: string
}>()

const isUrl = (icon: string): boolean => {
  if (!icon) return false
  return icon.startsWith('http') || icon.startsWith('/') || icon.includes('.')
}
</script>

<template>
    <div class="container">
        <img v-if="isUrl(imageUrl)" :src="imageUrl" />

        <p>{{ projectName }}</p>
    </div>
</template>

<style scoped>
.container {
  display: inline-flex;
  gap: 18px;
  justify-content: center;
  align-items: center;
}

p {
  font-size: 36px;
  font-weight: bold;
}

img {
  width: 96px;
  height: 96px;
  border-radius: 6px;
}
</style>