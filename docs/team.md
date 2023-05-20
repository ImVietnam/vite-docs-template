---
layout: page
title: Hãy gặp nhóm
description: Sự phát triển của Vite được hướng dẫn bởi một nhóm quốc tế.
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamPageSection,
  VPTeamMembers
} from 'vitepress/theme'
import { core, emeriti } from './_data/team'
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>Hãy gặp nhóm</template>
    <template #lead>
      Sự phát triển của Vite được hướng dẫn bởi một nhóm quốc tế, một số người trong số họ 22 đã chọn để được giới thiệu dưới đây.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members="core" />
  <VPTeamPageSection>
    <template #title>Nhóm danh dự</template>
    <template #lead>
      Ở đây chúng tôi vinh danh một số thành viên nhóm không còn hoạt động, những người đã tạo ra nhiều đóng góp giá trị trong quá khứ.
    </template>
    <template #members>
      <VPTeamMembers size="small" :members="emeriti" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
