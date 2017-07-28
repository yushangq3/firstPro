<template>
  	<div>
  		<h1>得到{{score}}分</h1>
  		<div class="result_tip">{{scoreTips}}</div>
  	</div>
</template>

<script>

export default {
	name:'score',
	data(){
		return {
			showHide:false,
			score:0,
			scoreTips:'',
			 scoreTipsArr:['你说，是不是把知识都还给小学老师了？','还不错，但还需要继续加油哦！','不要嘚瑟还有进步的空间！','智商离爆表只差一步了！','你也太聪明啦，葡萄之家欢迎你！'],
		}
	},
	methods:{
		showCover:function(){
			this.showHide=!this.showHide;
		},
		getScoreTips:function(){
			alert(0)
			if(this.score<=50){
				this.scoreTips=this.scoreTipsArr[0];
			}else if(this.score<=70){
				this.scoreTips=this.scoreTipsArr[1];
			}else if(this.score <= 80) {
                this.scoreTips = this.scoreTipsArr[2];
                return
            }else if(this.score <= 90) {
                this.scoreTips = this.scoreTipsArr[3];
                return
            }else if(this.score <= 100) {
                this.scoreTips = this.scoreTipsArr[4];
            }
		}
	},
	beforeMount(){
        this.score = 80;
        document.body.style.backgroundImage='none'
        if(this.$root._isMounted) {
	      this.getScoreTips()
	    }
    }
}
</script>

<style lang="less">
   
</style>
