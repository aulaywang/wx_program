// components/mymultislot/mymultislot.js
Component({
  properties:{
    title:{
      type: String,
      value: '',
      observer: function(newVal, oldVal){

      }
    }
  },
  //定义组件内部初始化数据
  data: {
    counter: 0
  },
  //定义组件内部函数
  methods:{

  },
  //定义组件配置选项
  options: {
    //让使用者可以给组件传入数据
    multipleSlots: true
  },
  //外界给组件传入额外的样式
  externalClasses: [],
  //监听properties/data的改变
  observers:{
    counter: function(newVal){
      console.log(newVal)
    }
  },
  //监听组件生命周期函数
  //监听所在页面的生命周期
  pageLifetimes: {
    show(){
      console.log('监听所在页面显示出来时')
    },
    hide(){
      console.log('监听所在页面隐藏起来时')
    },
    resize(){
      console.log('监听页面尺寸改变时')
    }

  },
  //监听组件本身生命周期
  lifetimes: {
    created(){
      console.log('组件被创建出来')
    },
    attached() {
      console.log('组件被添加到页面')
    },
    ready() {
      console.log('组件被渲染出来')
    },
    moved() {
      console.log('组件被移动到另一个节点')
    },
    detached() {
      console.log('组件被移除掉')
    }

  }
})
