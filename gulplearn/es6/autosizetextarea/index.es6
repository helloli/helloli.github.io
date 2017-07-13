// https://github.com/ElemeFE/element/tree/master/packages/input/src

$(() => {
    new Vue({
      el: '#app',
      data: function() {
        return {
          textarea2: '',
          textarea3: ''
        }
      },
      mounted() {
        console.log(1)
        for( const i=0;i<10;i++) {
          console.log(i)
        }
      }
    })
})