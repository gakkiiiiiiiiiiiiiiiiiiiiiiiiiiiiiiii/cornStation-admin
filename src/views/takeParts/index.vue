<template>
  <PageWrapper title="公告管理">
    <div class="mb-20px">
      <a-input style="width: 300px" v-model:value="queryParams.index" placeholder="公告编号" />
      <a-input style="width: 300px" v-model:value="queryParams.title" placeholder="公告标题" />
      <a-button type="primary" @click="queryFn">查询</a-button>
    </div>
    <a-table :dataSource="tableData" :columns="columns">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'operation'">
          <a-button @click="showDetail(record)">详情</a-button>
        </template>
      </template>
    </a-table>
    <a-modal v-model:visible="open" :title="title">
      <div class="px-20px">
        <a-form :model="formData">
          <a-form-item label="用户账号" name="accountName">
            <a-input v-model:value="formData.accountName" />
          </a-form-item>
          <a-form-item label="用户姓名" name="name">
            <a-input v-model:value="formData.name" />
          </a-form-item>
          <a-form-item label="头像" name="avatar">
            <a-image :width="60" :src="formData.avatar" />
          </a-form-item>
          <a-form-item label="用户电话" name="phone">
            <a-input v-model:value="formData.phone" />
          </a-form-item>
          <a-form-item label="身份证号" name="idNumber">
            <a-input v-model:value="formData.idNumber" />
          </a-form-item>
        </a-form>
      </div>
    </a-modal>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { reactive, ref } from 'vue'
  import { PageWrapper } from '/@/components/Page'

  const queryParams = reactive({
    name: '',
    order: '',
  })
  const dataSource = [
    {
      title: '放假通知',
      index: '1',
      date: '2024-4-1',
      content: '放假一周',
    },
    {
      title: '营业时间',
      index: '2',
      date: '2024-4-1',
      content: '9:00～18:00',
    },
  ]
  const tableData = ref([...dataSource])
  const columns = [
    {
      title: '公告编号',
      dataIndex: 'index',
      key: 'index',
    },
    {
      title: '公告标题',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '公告时间',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: '公告内容',
      dataIndex: 'content',
      key: 'content',
    },
  ]

  const open = ref<boolean>(false)
  const title = ref('详情')
  const defaultFormData = () => {
    return {
      order: '',
      orderName: '',
      orderType: '',
      address: '',
      time: '',
      account: '',
      name: '',
      phone: '',
    }
  }
  const formData = ref(defaultFormData())
  const showDetail = (row) => {
    open.value = true
    title.value = '详情'
    formData.value = { ...row }
  }
  const queryFn = () => {
    tableData.value = Object.entries(queryParams).reduce(
      (pre, [key, val]) => {
        console.log({ key, val })
        return pre.filter((item) => val === '' || item[key] === val)
      },
      [...dataSource],
    )
    console.log({ dataSource, tableData })
  }
</script>
