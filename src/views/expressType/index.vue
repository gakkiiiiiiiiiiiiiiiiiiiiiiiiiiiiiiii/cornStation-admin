<template>
  <PageWrapper title="包裹管理">
    <div v-if="false">
      <!-- <a-button type="primary" @click="boxInboundOpen = true">
        <Icon icon="bx:home"></Icon> 包裹入库</a-button
      >
      <a-button type="primary" class="mx-6px"><Icon icon="bx:gift"></Icon> 包裹取件</a-button>
      <a-button type="primary"><Icon icon="bx:send"></Icon>包裹寄件</a-button> -->
      <a-button type="primary" @click="open2 = true" class="mx-6px"
        ><Icon icon="bx:time" />预约寄件</a-button
      >
      <a-button type="primary"><Icon icon="bx:search" />查看寄件订单</a-button>
    </div>

    <div v-else>
      <div class="mb-20px">
        <a-input style="width: 300px" v-model:value="queryParams.index" placeholder="包裹编号" />
        <a-input style="width: 300px" v-model:value="queryParams.phone" placeholder="用户电话" />
        <a-button type="primary" @click="queryFn">查询</a-button>
        <!-- <a-button type="danger" class="mx-6px">查看待发货包裹</a-button>
        <a-button type="danger">查看已发货包裹</a-button> -->
      </div>
      <a-table :dataSource="tableData" :columns="columns">
        <template #bodyCell="{ column, record, index }">
          <template v-if="column.key === 'operation'">
            <!-- <a-button type="primary" class="mx-8px">自取</a-button>
            <a-button type="danger">送货上门</a-button> -->
            <!-- <a-button type="danger">确认签收</a-button> -->
            <!-- <a-button type="danger">支付邮费</a-button> -->
            <a-button type="danger">确认收件</a-button>
          </template>
          <template v-if="column.key === 'index'">
            {{ index + 1 }}
          </template>
          <template v-if="column.key === 'avatar'">
            <a-image :width="60" :src="record.avatar" />
          </template>
        </template>
      </a-table>
    </div>
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
    <a-modal v-model:visible="boxInboundOpen" title="包裹入库">
      <div class="px-20px">
        <a-form :model="formData">
          <a-form-item label="收件人姓名" name="accountName">
            <a-input />
          </a-form-item>
          <a-form-item label="收件人电话" name="accountName">
            <a-input />
          </a-form-item>
          <a-form-item label="收件人地址" name="accountName">
            <a-input />
          </a-form-item>
          <a-form-item label="寄件人姓名" name="accountName">
            <a-input />
          </a-form-item>
          <a-form-item label="寄件人电话" name="accountName">
            <a-input />
          </a-form-item>
          <a-form-item label="寄件人地址" name="accountName">
            <a-input />
          </a-form-item>
        </a-form>
      </div>
    </a-modal>
    <a-modal v-model:visible="open2" title="预约寄件">
      <div class="px-20px">
        <a-form :model="formData">
          <a-form-item label="收件人姓名" name="accountName">
            <a-input />
          </a-form-item>
          <a-form-item label="收件人电话" name="accountName">
            <a-input />
          </a-form-item>
          <a-form-item label="收件人地址" name="accountName">
            <a-input />
          </a-form-item>
          <a-form-item label="寄件人姓名" name="accountName">
            <a-input />
          </a-form-item>
          <a-form-item label="寄件人电话" name="accountName">
            <a-input />
          </a-form-item>
          <a-form-item label="寄件人地址" name="accountName">
            <a-input />
          </a-form-item>
          <a-form-item label="寄件方式" name="accountName">
            <a-input />
          </a-form-item>
        </a-form>
      </div>
    </a-modal>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { reactive, ref } from 'vue'
  import { PageWrapper } from '/@/components/Page'
  import { Icon } from '/@/components/Icon'
  const queryParams = reactive({
    index: '',
    phone: '',
  })
  const boxInboundOpen = ref(false)
  const open2 = ref(false)
  const dataSource = [
    {
      name: '洪小平',
      phone: '135777777',
      address: '广东省湛江市雷州市七巷8号',
      sellerAddress: '浙江省温州市龙湾区沙城街道',
      sellerName: '迪奥旗舰店',
      sellerPhone: '1377777777',
      code: '638725',
      status: '正收件',
      index: '1',
    },
    {
      name: '洪小平',
      phone: '135777777',
      address: '广东省湛江市雷州市七巷8号',
      sellerAddress: '浙江省温州市龙湾区沙城街道',
      sellerName: '阿迪达斯旗舰店',
      sellerPhone: '1377777777',
      code: '638725',
      status: '正收件',
      index: '2',
    },
    {
      name: '洪小平',
      phone: '135777777',
      address: '广东省湛江市雷州市七巷8号',
      sellerAddress: '浙江省温州市龙湾区沙城街道',
      sellerName: 'nike旗舰店',
      sellerPhone: '1377777777',
      code: '638725',
      status: '正收件',
      index: '3',
    },
    {
      name: '洪小平',
      phone: '135777777',
      address: '广东省湛江市雷州市七巷8号',
      sellerAddress: '浙江省温州市龙湾区沙城街道',
      sellerName: '蕉下旗舰店',
      sellerPhone: '1377777777',
      code: '638725',
      status: '正收件',
      index: '4',
    },
  ]
  const tableData = ref(dataSource)
  const columns = [
    {
      title: '包裹编号',
      dataIndex: 'index',
      key: 'index',
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
      title: '用户地址',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '卖家名称',
      dataIndex: 'sellerName',
      key: 'sellerName',
    },
    {
      title: '卖家电话',
      dataIndex: 'sellerPhone',
      key: 'sellerPhone',
    },
    {
      title: '卖家地址',
      dataIndex: 'sellerAddress',
      key: 'sellerAddress',
    },
    // {
    //   title: '取件码',
    //   dataIndex: 'code',
    //   key: 'code',
    // },
    {
      title: '包裹状态',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '操作',
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
  // const showDetail = (row) => {
  //   open.value = true
  //   title.value = '详情'
  //   formData.value = { ...row }
  // }
  // const editDetail = (row) => {
  //   open.value = true
  //   title.value = '编辑'
  //   formData.value = { ...row }
  // }
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
