import method from '@/filters/method/method';
//过滤器
const vfilters: any = {
    tmsStatus: (items: any) => {// 物流信息
        let title;
        method.tmsStatus.forEach(function(res: any) {
            if (res.val == Number(items)) {
                title = res.title;
            }
        });
        return title;
    },
}
export default vfilters;