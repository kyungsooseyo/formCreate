<template>
  <div>
    <form-create
      v-model="fApi"
      :rule="rule"
      :option="option"
      :value.sync="value"
    ></form-create>
  </div>
</template>

<script>
import SelectGroup from './components/SelectGroup.vue'
import formCreate from '@form-create/element-ui'
formCreate.component(SelectGroup.name, SelectGroup)
import componentsJson from './constant/components.json'
import commonConfig from './constant/commonConfig.json'
export default {
  name: "setting",
  mounted() {
    // console.log(this)
    commonConfig.forEach(item => {
      this.fApi.append(item, 'type')
    })
    // - 固定api
    this.fApi.getRule('type').options = componentsJson
  },
  data() {
    return {
      //实例对象
      fApi: {},
      //表单数据
      value: {},
      //表单生成规则
      rule: [
        {
          type: 'input',
          field: 'title',
          title: '字段名称',
          validate: [{ type: 'string', required: true, message: '请输入字段名称' }]
        },
        {
          type: 'input',
          field: 'field',
          title: '字段key',
          validate: [{ type: 'string', required: true, message: '请输入字段key' }]
        },
        {
          type: 'SelectGroup',
          field: 'type',
          title: '字段类型',
          validate: [{ type: 'string', required: true, message: '请选择字段类型' }],
          options: []
        },
      ],
      //组件参数配置
      option: {
        //表单提交事件
        onSubmit: function (formData) {
          alert(JSON.stringify(formData))
        },
        form: {
          labelPosition: 'top',
          size: 'mini'
        },
        global: {
          '*': {
            style: {
              width: '95%'
            }
          }
        },
        submitBtn: false
      }
    }
  },
}
</script>

<style>
</style>