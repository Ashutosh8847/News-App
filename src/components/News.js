import React, { Component } from 'react'
import Newscomponent from './Newscomponent';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import '../App.css';



export class News extends Component {

    static defaultProps = {
        country: "in",
        pageSize: 9,
        category: "general"
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }


    articles = []
    constructor(props) {
        super(props);
        console.log("constructor is running good")
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1,
            totalResults: 0
        }
    }

    async updatenews() {
        this.props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2e331ea4cc564581b5bfd50b22ad897c&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url)
        this.props.setProgress(30)
        let parseddata = await data.json();
        this.props.setProgress(70)
        this.setState({ loading: false })
        console.log(parseddata)
        this.setState({ articles: parseddata.articles, 
            totalResults: parseddata.totalResults })
        this.props.setProgress(100);
        

    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2e331ea4cc564581b5bfd50b22ad897c&page=1&pagesize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url)
        let parseddata = await data.json();
        this.setState({ loading: false })
        console.log(parseddata)
        this.setState({ articles: parseddata.articles, totalResults: parseddata.totalResults })
    }
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1, loading: true })
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2e331ea4cc564581b5bfd50b22ad897c&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        try {
            let data = await fetch(url)
            let parseddata = await data.json();
            console.log(parseddata)
            this.setState({
                articles: this.state.articles.concat(parseddata.articles),
                // articles: parseddata.articles,
                totalResults: parseddata.totalResults,
                loading: false
            })
        }
        catch (error) {
            console.error("Error fetching data:", error);
            this.setState({ loading: false })
        }


    };

    // handlenextbutton = async () => {
    //     if (!(this.state.page + 1 > Math.ceil(this.props.pageSize))) {
    //         console.log("**********No news is here*********")
    //         console.log("next button is clicked")
    //         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2e331ea4cc564581b5bfd50b22ad897c&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`
    //         console.log("********url*********", url)
    //         this.setState({ loading: true })
    //         let data = await fetch(url)
    //         let parseddata = await data.json();
    //         console.log(parseddata)
    //         this.setState({ loading: false })
    //         this.setState({
    //             page: this.state.page + 1,
    //             articles: parseddata.articles

    //         })
    //     }

    // }

    // handlenextbutton = async () => {
    //     console.log("next button is clicked");

    //     // Make sure this.state.page is initialized before calling this function
    //     let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2e331ea4cc564581b5bfd50b22ad897c&page=${this.state.page + 1}`;

    //     try {
    //       let data = await fetch(url);
    //       let parseddata = await data.json();
    //       console.log(parseddata);

    //       this.setState({
    //         page: this.state.page + 1,
    //         articles: parseddata.articles,
    //       });
    //     } catch (error) {
    //       console.error("Error fetching data:", error);
    //       // Handle error state or display an error message to the user
    //     }




    // }

    // handlepevbutton = async () => {
    //     console.log("previous buton clicked")
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2e331ea4cc564581b5bfd50b22ad897c&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
    //     this.setState({ loading: true })
    //     let data = await fetch(url)
    //     let parseddata = await data.json();
    //     console.log(parseddata)
    //     this.setState({ loading: false })
    //     this.setState({
    //         page: this.state.page - 1,
    //         articles: parseddata.articles

    //     })
    // }



    render() {

       
        return (


            <div className='container text-center '>
                <h2>This is news app component</h2>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}>
                    {/* hasMore={false}
                    loader={<Spinner />} */}
                    <div className='container'>
                    <div className="row">
                        {this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.url} >
                                {/* <Newscomponent title={element?element.title.slice(0,45):" "} description={element?element.description.slice(0,50):" "} imageUrl={element.urlToImage} newsUrl={element.url} /> */}
                                <Newscomponent  title={element.title ? element.title.slice(0, 30) : ""}  description={element.description ? element.description.slice(0, 40) : ""} imageUrl={element.urlToImage || "https://static.independent.co.uk/2023/07/24/18/SEI165279671.jpg?quality=75&width=1200&auto=webp"} newsUrl={element.url || ""} author={element.author ? element.author : "unknown"} Date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div>
                
            </InfiniteScroll>
                
            </div >
            
            

        )
    }
}

export default News
