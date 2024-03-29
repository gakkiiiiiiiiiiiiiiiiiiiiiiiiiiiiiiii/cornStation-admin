<template>
  <PageWrapper title="快递信息">
    <div class="mb-20px">
      <a-input style="width: 300px" v-model:value="queryParams.order" placeholder="快递单号" />
      <a-input style="width: 300px" v-model:value="queryParams.name" placeholder="用户姓名" />
      <a-button type="primary" @click="queryFn">查询</a-button>
    </div>
    <a-table :dataSource="tableData" :columns="columns">
      <template #bodyCell="{ column, record, index }">
        <template v-if="column.key === 'operation'">
          <a-button type="primary" @click="showDetail(record)">详情</a-button>
          <a-button>取件</a-button>
        </template>
        <template v-if="column.key === 'index'">
          {{ index + 1 }}
        </template>
        <template v-if="column.key === 'image'">
          <a-image :width="60" :src="record.image" />
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
      order: 'SF123',
      orderName: '柜子',
      orderType: '柜子',
      address: '27号菜鸟',
      time: '2023-02-27 00:00:12',
      image:
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg3.doubanio.com%2Fview%2Fgroup_topic%2Fl%2Fpublic%2Fp299392772.jpg&refer=http%3A%2F%2Fimg3.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1714294582&t=d266234743d301782460184ec60c8964',
      account: '12',
      name: '小明',
      phone: '13333333333',
    },
  ]
  const tableData = ref([...dataSource])
  const columns = [
    {
      title: '索引',
      key: 'index',
    },
    {
      title: '快递单号',
      dataIndex: 'order',
      key: 'order',
    },
    {
      title: '快递名称',
      dataIndex: 'orderName',
      key: 'orderName',
    },
    {
      title: '快递类型',
      dataIndex: 'orderType',
      key: 'orderType',
    },
    {
      title: '图片',
      dataIndex: 'image',
      key: 'image',
    },
    {
      title: '取件地点',
      key: 'address',
    },
    {
      title: '入库时间',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: '用户账号',
      dataIndex: 'account',
      key: 'account',
    },
    {
      title: '用户姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '用户电话',
      dataIndex: 'phone',
      key: 'phone',
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
