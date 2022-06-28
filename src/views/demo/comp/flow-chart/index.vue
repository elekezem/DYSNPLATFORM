<template>
  <PageWrapper
    title="审批流程管理"
    content="系统平台运用中的流程权限审批管理"
    contentFullHeight
    fixedHeight
  >
    <FlowChart :data="demoData" />
  </PageWrapper>
</template>

<script lang="ts">
  import { FlowChart } from '/@/components/FlowChart';
  import { PageWrapper } from '/@/components/Page';

  import demoData from './dataTurbo.json';
  export default {
    components: { FlowChart, PageWrapper },
    setup() {
      return { demoData };
    },
  };
</script>
