import React, { Component } from 'react'
// const currentDate = new Date(); 
// const Date = currentDate.toGMTString(); 

export class Newscomponent extends Component {
    
    
    render() {
        let { title, description, newsUrl, imageUrl, Date, author,source } = this.props;
        return (
            <div >
                <div className="container text-center my-3">
                    <div className="row" style={{ width: "100%" }}>
                        <div className="col">
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={imageUrl} className="card-img-top" alt="..." />
                                <div className="card-body">

                                    <h5 className="card-title">{title}... </h5> <span className="position-absolute top-0 start-95 translate-middle badge rounded-pill bg-danger">{source}</span>
                                    <p className="card-text">{description}...</p>
                                    <p className="card-text"><small className="text-muted">By {author} on {Date}</small></p>
                                </div>
                                <div>
                                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Newscomponent

