<template>
  <PageWrapper title="个人中心">
    <a-form :label-col="{ style: { width: '150px' } }" class="bg-white">
      <a-form-item label="用户ID:"> {{ userInfo.userId }} </a-form-item>
      <a-form-item label="用户名:"> {{ userInfo.username }} </a-form-item>
      <a-form-item label="性别:"> 男 </a-form-item>
      <a-form-item label="电话"> 13333333333</a-form-item>
      <a-form-item label="邮箱:"> {{ userInfo.username }}@qq.com </a-form-item>
      <a-form-item label="地址:"> 广东省湛江市雷州市一巷1号</a-form-item>
      <a-form-item label="类型:"> 管理员 </a-form-item>
      <a-form-item label="修改:">
        <a-button>修改信息</a-button>
      </a-form-item>
      <a-form-item label="修改密码:">
        <a-button>修改密码</a-button>
      </a-form-item>
    </a-form>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { computed } from 'vue'
  import { PageWrapper } from '/@/components/Page'
  import { useUserStoreWithOut } from '/@/store/modules/user'

  const userStore = useUserStoreWithOut()
  const userInfo = computed(() => userStore.getUserInfo)
  console.log({
    userInfo,
  })
</script>
