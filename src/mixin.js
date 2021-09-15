export const mixins01 = {
    methods:{
        showName(){
            alert(this.Name);
        }
    },
    mounted() {
        console.log("你好，使用mixin混入");
    },
}
export const mixins02 = {
    data() {
        return {
            x:100,
            y:101
        }
    },
}