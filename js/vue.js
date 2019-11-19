const url = 'https://newsapi.org/v2/';
const country = 'jp';
const key = 'f811a838a1134a3abc0190bffdc597d2';
const vm = new Vue({
    el: '#app',
    data: {
        results: [],
        sections: [
            { 
                name: "全て表示",
                value: "general",
            },
            { 
                name: "ビジネス",
                value: "business",
            },
            { 
                name: "エンタメ",
                value: "entertainment",
            },
            { 
                name: "健康",
                value: "health",
            },
            { 
                name: "科学",
                value: "science",
            },
            { 
                name: "スポーツ",
                value: "sports",
            },
            { 
                name: "技術",
                value: "technology",
            },
        ],
        section: 'general',
        sectionName: '全て表示'
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