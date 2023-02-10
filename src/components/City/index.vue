<template>
  <div class="city_body">
				<div class="city_list">
					<div class="city_hot">
						<h2>热门城市</h2>
						<ul class="clearfix">
							<li v-for="city in hotCity" :key="city.id" @touchstart="chooseCity(city.name,city.id)">{{city.name}}</li>
						</ul>
					</div>
					<div class="city_sort" ref="city_sort">
						<div v-for="cityItem in cities" :key="cityItem.id">
							<h2>{{cityItem.index}}</h2>
							<ul>
								<li v-for="citylist in cityItem.list" :key="citylist.id" @touchstart="chooseCity(citylist.name,citylist.id)">{{citylist.name}}</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="city_index">
					<ul>
						<li v-for="(letterItem ,index) in cities" :key="letterItem.index" @touchstart="scrollToIndex(index)">{{letterItem.index}}</li>
					</ul>
				</div>
                </div>
</template>

<script>

export default {
	name:"City",
	data(){
		return{
			hotCity:[],
			cities:[],
			letter:[]

		}
	},
	created(){
	
	},
	mounted(){
		this.getCities()
	},
	methods:{
		getCities(){
			var hotCity=window.localStorage.getItem('hotCity');
			var cities=window.localStorage.getItem('cities');
			if(hotCity&&cities){
				this.hotCity=JSON.parse(hotCity)
				this.cities=JSON.parse(cities)
			}else{
				// this.axios.get('https://www.fastmock.site/mock/771c626f9140555d1ae5a7aadca5ddb2/api/cityList').then((res)=>{
				this.axios.get('/api/cityList').then((res)=>{
				var cities=res.data.data.cities;
				for(var i=0;i<cities.length;i++){
					if(cities[i].isHot==1){//热门城市
						this.hotCity.push({name:cities[i].name,id:cities[i].id})
					}
					var letter=cities[i].py.substring(0,1).toUpperCase();//获取首字母大写
					if(this.letter.indexOf(letter)==-1){
						this.letter.push(letter)
						this.cities.push({index:letter,list:[{id:cities[i].id,name:cities[i].name}]})
					}else{
						for(var j=0;j<this.cities.length;j++){
							if(letter==this.cities[j].index){
								this.cities[j].list.push({id:cities[i].id,name:cities[i].name})
							}
						}
					}
				}
				this.cities.sort((n1,n2)=>{
					if(n1.index>n2.index){
						return 1
					}else if(n1.index<n2.index){
						return -1

					}
				});
				window.localStorage.setItem('hotCity',JSON.stringify(this.hotCity));
				window.localStorage.setItem('cities',JSON.stringify(this.cities));
			})
			}	
		},
		chooseCity(name,id){
			this.$store.commit('city/changeCity',{name,id});
			this.$router.push('/moive/nowPlaying')
			window.localStorage.setItem('cityName',name)
			window.localStorage.setItem('cityId',id)
		},
		scrollToIndex(index){
			var h2=this.$refs.city_sort.getElementsByTagName('h2');
			this.$refs.city_sort.parentNode.scrollTop=h2[index].offsetTop;

		}
	}

}
</script >

<style scoped>
#content .city_body{ margin-top: 45px; display: flex; width:100%; position: absolute; top: 0; bottom: 0;}
.city_body .city_list{ flex:1; overflow: auto; background: #FFF5F0;}
.city_body .city_list::-webkit-scrollbar{
    background-color:transparent;
    width:0;
}
.city_body .city_hot{ margin-top: 20px;}
.city_body .city_hot h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
.city_body .city_hot ul{}
.city_body .city_hot ul li{ float: left; background: #fff; width: 29%; height: 33px; margin-top: 15px; margin-left: 3%; padding: 0 4px; border: 1px solid #e6e6e6; border-radius: 3px; line-height: 33px; text-align: center; box-sizing: border-box;}
.city_body .city_sort{}
.city_body .city_sort div{ margin-top: 20px;}
.city_body .city_sort h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
.city_body .city_sort ul{ padding-left: 10px; margin-top: 10px;}
.city_body .city_sort ul li{ line-height: 30px; line-height: 30px;}
.city_body .city_index{ width:20px; display: flex; flex-direction:column; justify-content:center; text-align: center; border-left:1px #e6e6e6 solid;}
</style>