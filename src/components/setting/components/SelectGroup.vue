<template>
   <el-select v-model="value" placeholder="请选择" @change="valChange">
    <el-option-group
      v-for="group in formCreateInject.options"
      :key="group.label"
      :label="group.label">
      <el-option
        v-for="item in group.options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-option-group>
  </el-select>
</template>

<script>
export default {
  name: 'SelectGroup',
  props: {
    formCreateInject: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      value: ''
    }
  },
  methods: {
    valChange(val) {
      // console.log(val)
      this.$emit('input', val)
    }
  }
}
</script>

<style>
</style>