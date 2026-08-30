<script setup lang="ts">

interface ChoiceItem {
  name: string
  href: string
  icon: string
}

defineProps<{
    choices: Array<ChoiceItem>
}>()

const isUrl = (icon: string): boolean => {
  if (!icon) return false
  return icon.startsWith('http') || icon.startsWith('/') || icon.includes('.')
}
</script>

<template>
  <div class="choice-grid">
    <a 
      v-for="item in choices" 
      :key="item.name" 
      :href="item.href" 
      class="choice-card"
      :style="'--card-hover-border'"
    >
      <div class="icon-wrapper">
        <img v-if="isUrl(item.icon)" :src="item.icon" :alt="item.name" class="choice-icon-img" />
        <span v-else :class="item.icon" class="choice-icon-class"></span>
      </div>

      <h3 class="choice-name">{{ item.name }}</h3>
    </a>
  </div>
</template>

<style scoped>
.choice-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin: 24px 0;
}

.choice-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  border: 1px solid var(--vp-c-bg-soft);
  background-color: var(--vp-c-bg-soft);
  border-radius: 12px;
  text-decoration: none !important;
  transition: border-color 0.25s, background-color 0.25s, transform 0.25s;
}

.choice-card:hover {
  border-color: var(--card-hover-border, var(--vp-c-brand-1));
  background-color: var(--vp-c-bg-mute);
  transform: translateY(-2px);
}

.icon-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
  width: 64px;
  height: 64px;
}

.choice-icon-img {
  width: 64px;
  height: 64px;
  object-fit: contain;
  border-radius: 6px;
}

.choice-name {
  margin: 0 !important;
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  text-align: center;
  width: 100%;
}
</style>