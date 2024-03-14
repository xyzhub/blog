<script setup lang='ts'>
const data = Array(1000).fill(0).map((_, index) => ({
  id: index,
  name: `name${index}`,
  age: index,
  sex: index % 2 === 0 ? '男' : '女',
  address: `address${index}`,
  phone: '1234567890',
}))

function handleClickItem(item: any) {
  console.log(item)
}
</script>

<template>
  <n-virtual-list :data="data" @click-item="handleClickItem">
    <template #item="{ item }">
      <div class="virtual-item">
        {{ item.address }}
      </div>
    </template>
  </n-virtual-list>
</template>

<style scoped lang='less'>
.virtual-item {
  display: flex;
  justify-content: left;
}
</style>
