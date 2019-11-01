const category = "general, business, entertainment, health, science, sports, technology";
const url = 'https://newsapi.org/v2/';
const country = 'jp';
const key = 'f811a838a1134a3abc0190bffdc597d2';
const vm = new Vue({
    el: '#app',
    data: {
        results: [],
        sections: category.split(', '),
        section: 'general'
    },
    mounted :function(){
        this.getPosts('general');
    },
    methods: {
        getPosts(section) {
            axios.get(
                url + 'top-headlines' + 
                '?country=' + country + 
                '&category=' + this.section +
                '&apiKey=' + key
            )
                .then(response => this.results = response.data.articles)
                .catch(response => console.log(response))
        }
    }
});