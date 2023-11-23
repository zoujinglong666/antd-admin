<script setup lang="ts">
const { t } = useI18n()
const selectedKeys = ref(['1'])

const items = computed(() => {
  return [
    {
      key: '1',
      label: seti18n('1'),
      title: 'Navigation One',
    },
    {
      key: '2',
      label: seti18n('2'),
      title: 'Navigation Two',
    },
    {
      key: '3',
      label: seti18n('3'),
      title: 'Navigation Two',
    },
    {
      key: '4',
      label: seti18n('4'),
      title: 'Navigation Two',
    },
  ]
})

function seti18n(key: string) {
  switch (key) {
    case '1':
      return t('account.settings.basic-setting')
    case '2':
      return t('account.settings.security-setting')
    case '3':
      return t('account.settings.account-setting')
    case '4':
      return t('account.settings.message-setting')
  }
}
</script>

<template>
  <div>1</div>
</template>

<style scoped lang="less">

</style>
