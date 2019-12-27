<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png">
	</div>
</template>

<script lang="ts">
import { Component, Vue, Model, Watch } from 'vue-property-decorator';

interface commodity {
    startDate?: string,
}

@Component({   
    components: {}
})
export default class index extends Vue {
    public tableData6:any = [];
    public searchReserved = {
        name: '1111'
    }
    private Paginationtotal:number = 100;
    //定义当前的搜索标格
    public formInline:commodity = {};
    //最先开始执行
    created():void {
        this.start(this.$route.query)
    }
    //监听路由变化
    @Watch('$route')
    onRouteChanged(route: any, oldRoute: any) :void {
        this.start(route.query)
        this.$forceUpdate()
    }
    /** 
     * 搜索
     */
    public search():void {
        // let _this = this;
        // let data = Utils.deep(this.formInline)
        // this.$store.dispatch('paramsUrl',data).then((res:any) => {
        //     this.$router.push(`${this.$route.path}${res}`)
        // })
    }
    /**
     * 开始执行
     * query 当前url上的搜索参数
     */
    public start (query:any){
        // 深拷贝
        // this.formInline = Utils.deep(query)
    }
    private activated() {
        console.log(2);
    }
    private deactivated() {
        console.log(4);
    }
}
</script>
<style lang="scss">

</style>