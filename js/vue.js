let vm = new Vue({
  el: '#app',
  data: {
    articles: []
  },
  mounted :function(){
    axios.get('https://newsapi.org/v2/top-headlines?country=jp&apiKey=f811a838a1134a3abc0190bffdc597d2')
          .then(response => this.articles = response.data)
          .catch(response => console.log(response))
  }
});