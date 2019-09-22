class RecipesController {

    constructor(props) {
        props.url = "/rb/recipes.json"
        props.baseUrl = '#ask'
        this.props = props

        if (this.props.$el) {
            this.$el = this.props.$el
        } else {
            this.$df = document.createDocumentFragment()
            this.$el = document.createElement('div')
            this.$df.appendChild(this.$el)
            
            if (this.props.data)
                this.createElements(this.props.data)
            else if (this.props.url)
                this.loadData(this.props.url)
        }
        
        this.$el.addEventListener('item.comment.click', event => {
            location.hash = location.hash+'/recipe/'+event.target.id
        })
    }

    render() {
        return this.$df
    }

    createElements(results) {
        let i = 1
        results.recipes.forEach ( result => {
            const hnItem = document.createElement('hn-item')
            hnItem.index = i
            hnItem.id = i
            hnItem.image = result.image
            hnItem.title = result.title
            hnItem.url = '/rb/#recipe/'+i
            hnItem.by = result.category
            hnItem.since = result.date
            hnItem.commentsCount = 1
            this.$el.appendChild(hnItem)
            i++
        })
    }

    loadData(url) {
        fetch(url).then( resp => { resp.json().then( results => {
            setTimeout( _ => {
                this.createElements(results)                
            },200)
        })})
    }
}
