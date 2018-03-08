export default{
    //定义状态，data·数据
    state: {
        cart:JSON.parse(localStorage.getItem('cart'))||{}//数据结构
    },
    mutations: {
      modify(state,data){
          let { id, num } = data; // es6的语法, 解构里面的id与num值
          state.cart[id] = num;// 根据id, 修改对应的购买数量值
          // 每次状态变化后, 把新的状态记录在本地storage里, 放置页面刷新后数据丢失
          localStorage.setItem('cart',JSON.stringify(state.cart))
          console.log(state.cart);
      }  
    }
}
