<template>
  <div class="wrapper">
    <el-card style="width: 500px">
      <form-create
        v-model="fApi"
        :rule="rule"
        :option="option"
        :value.sync="value"
      ></form-create>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'display',
  props: {
    rule: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      //实例对象
      fApi: {},
      //表单数据
      value: {},
      //表单生成规则

      //组件参数配置
      option: {
        //表单提交事件
        onSubmit: function (formData) {
          alert(JSON.stringify(formData))
        },

        global: {
          '*': {
            style: {
              width: '95%'
            }
          }
        },
      }
    }
  },
}
</script>

<style scoped>
.wrapper{
  display: flex;
  justify-content: center;
}
</style>