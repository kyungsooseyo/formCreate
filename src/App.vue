<template>
  <div id="app">
    <el-button @click="display = !display">新增自定义字段</el-button>
    <el-button @click="getData">获取数据</el-button>
      <Display :rule="filedData"></Display>
    <el-dialog
      title="提示"
      :visible.sync="display"
      width="30%"
      :before-close="handleClose"
    >
      <div>
        <Setting ref="setting"></Setting>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="display = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Setting from './components/setting/index.vue'
import Display from './views/display'
export default {
  name: 'App',
  components: {
    Setting,
    Display
  },
  data() {
    return {
      display: false,
      filedData: []
    }
  },
  // mounted() {
  //   console.log(this)
  // },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(() => {
          done();
        })
        .catch(() => { });
    },
    submit() {
      // ~fApi 是内置的
      let fApi = this.$refs.setting.fApi
      console.log(this.$refs.setting)
      fApi.validate((valid) => {
        if (valid) {
          const formData = fApi.formData()
          console.log(formData)
          this.axios.post('http://localhost:3000/fields', formData).then(res => {
            console.log(res)
            this.display = false
          })
        }
      })
    },
    getData() {
      this.axios.get('http://localhost:3000/fields').then(res => {
        console.log('res',res)
        this.filedData=res.data
      })
    }
  }
}
</script>

<style>
</style>
