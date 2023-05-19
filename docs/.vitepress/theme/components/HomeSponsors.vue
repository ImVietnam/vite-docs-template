<script setup lang="ts">
import { VPHomeSponsors } from 'vitepress/theme'
import { useSponsor } from '../composables/sponsor'

const { data } = useSponsor()
</script>

<template>
  <VPHomeSponsors
    v-if="data"
    message="Vite miễn phí và có mã nguồn mở, được thực hiện bởi các nhà tài trợ tuyệt vời."
    action-text="Trở thành một nhà tài trợ"
    action-link="https://github.com/sponsors/yyx990803"
    :data="data"
  />
</template>
