<template lang="pug">
	.songListRecom_module(v-if="dataModel.cdlist")
		.img_box
			img(:src="dataModel.cdlist[0].logo")
			.gradient_bg
			.info_box
				.txt_cont
					p {{dataModel.cdlist[0].dissname}}
					p {{dataModel.cdlist[0].desc}}
				.broad_cast
		.songs_list
			ul
				li(v-for="(item,i) in dataModel.cdlist[0].songlist",class="item_box")
					span.num_cont {{i+1}}
					div.song_cont
						p.song_name {{item.title}}
						p.singer_name {{item.singer[0].name}}
</template>
<script>

	export default {
		name:"songListRecom_module",
		data(){
			return {
				dataModel:"",
			}	
		},
		created(){
			this.getList();
		},
		methods:{
			getList:function(){

				this.$http({

                    url:"https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg?g_tk=5381&uin=0&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&new_format=1&pic=500&disstid="+this.$route.params.disstid+"&type=1&json=1&utf8=1&onlysong=0&nosign=1&_=1486633911911",
                    method:"jsonp",
                    jsonp:"jsonpCallback"

                }).then((response) => {

                    //console.log(response);
                    let res_data = response.data;
                    this.dataModel = res_data;
                    
                }).catch((response)=>{

                    console.log(response);

                });
			}
			
		}
	}
</script>
<style lang="scss" scoped>
	.songListRecom_module {
		%base-ellipsis {
			overflow: hidden;
			text-overflow:ellipsis;
			white-space: nowrap;
		}
		.img_box {
			display: block;
			position: relative;
			width: 100%;
			height: 12rem;
			img {
				position: absolute;
				width: 100%;
				height: 100%;
				left: 0;
				top: 0;
				z-index: 0;
				object-fit:cover;
			}
			.gradient_bg {
				position: absolute;
				left: 0;
				bottom: 0;
				width: 100%;
				height: 4rem;
				background: -webkit-linear-gradient(to bottom,transparent,rgba(0,0,0,.4));
				background: linear-gradient(to bottom,transparent,rgba(0,0,0,.4));
				z-index: 1;
			}
			.info_box {
				position: absolute;
				left: 0;
				bottom: .15rem;
				width: 100%;
				padding: 0 .3rem;
				display: flex;
				display: -webkit-flex;
				justify-content: center;
				align-items: center;
				z-index: 2;
				.txt_cont {
					color: #fff;
					font-size: .6rem;
					flex:1;
					-webkit-flex:1;
					overflow: hidden;
					p {
						@extend %base-ellipsis;
					}
					p:last-child {
						font-size: .4rem;
					}
				}
				.broad_cast {
					position: relative;
					width: 2rem;
					height:2rem;
					border-radius: 50%;
					border: 3px solid #fff;
					&:after {
						content: "";
					    position: absolute;
					    top: 50%;
					    left: 50%;
					    transform: translate(-50%,-50%);
					    -webkit-transform: translate(-50%,-50%);
					    height: 0;
					    width: 0;
					    overflow: hidden;
					    border-color: transparent transparent transparent #fff;
					    border-width: .5rem 0 .5rem .6rem;
					    border-style: solid;
					}
				}
			}
		}
		.songs_list {
			background:#000;
			.item_box {
				display: block;
				padding-top: .3rem;
				display: flex;
				display: -webkit-flex;
				color: #fff;
				line-height: 1.6;
				.num_cont {
					width: 1.5rem;
					text-align: center;
					font-size: .6rem;
				}
				.song_cont {
					-webkit-flex:1;
					flex:1;
					width: 0%;
					padding: 0 .3rem .3rem 0;
					border-bottom: 1px solid rgba(255,255,255,.35);
					.song_name {
						font-size: .55rem;
						@extend %base-ellipsis;
					}
					.singer_name {
						font-size: .45rem;
						color: rgba(255,255,255,.6);
						@extend %base-ellipsis;
					}
				}
				&:last-child {
					.song-cont {
						border-bottom: none;
					}
				}
			}
		}
	}
</style>