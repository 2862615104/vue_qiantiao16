export default{
    //定义状态，data·数据
    state: {
        cart:{}//数据结构
    },
    mutations: {
      modify(state,data){
          let { id, num } = data; // es6的语法, 解构里面的id与num值
          state.cart[id] = num;// 根据id, 修改对应的购买数量值
          console.log(state.cart);
      }  
    }
}
