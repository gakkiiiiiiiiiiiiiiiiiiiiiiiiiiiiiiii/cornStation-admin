<template>
  <PageWrapper title="用户管理">
    <div class="mb-20px">
      <a-input
        style="width: 300px"
        v-model:value="queryParams.accountName"
        placeholder="用户账号"
      />
      <a-button type="primary" @click="queryFn">查询</a-button>
    </div>
    <a-table :dataSource="tableData" :columns="columns">
      <template #bodyCell="{ column, record, index }">
        <template v-if="column.key === 'operation'">
          <a-button @click="showDetail(record)">详情</a-button>
          <a-button type="primary" @click="editDetail(record)" class="mx-8px">修改</a-button>
          <a-button type="danger" @click="tableData.splice(index, 1)">删除</a-button>
        </template>
        <template v-if="column.key === 'index'">
          {{ index + 1 }}
        </template>
        <template v-if="column.key === 'avatar'">
          <a-image :width="60" :src="record.avatar" />
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
    accountName: '',
  })
  const dataSource = [
    {
      accountName: '123',
      name: '456',
      gender: '男',
      avatar:
        'https://img1.baidu.com/it/u=3130960825,4175655092&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
      phone: '13333333333',
      idNumber: '4409811111111111',
    },
  ]
  const tableData = ref([
    {
      accountName: '123',
      name: '456',
      gender: '男',
      avatar:
        'https://img1.baidu.com/it/u=3130960825,4175655092&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
      phone: '13333333333',
      idNumber: '4409811111111111',
    },
  ])
  const columns = [
    {
      title: '索引',
      key: 'index',
    },
    {
      title: '用户账号',
      dataIndex: 'accountName',
      key: 'accountName',
    },
    {
      title: '用户姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '性别',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: '头像',
      key: 'avatar',
    },
    {
      title: '用户电话',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: '身份证号',
      dataIndex: 'idNumber',
      key: 'idNumber',
    },
    {
      title: '操作',
      fixed: 'right',
      key: 'operation',
    },
  ]

  const open = ref<boolean>(false)
  const title = ref('详情')
  const defaultFormData = () => {
    return {
      accountName: '',
      name: '',
      gender: '',
      phone: '',
      idNumber: '',
      avatar: '',
    }
  }
  const formData = ref(defaultFormData())
  const showDetail = (row) => {
    open.value = true
    title.value = '详情'
    formData.value = { ...row }
  }
  const editDetail = (row) => {
    open.value = true
    title.value = '编辑'
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
