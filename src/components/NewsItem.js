import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                    <div style={
                        {
                            display: 'flex',
                            justifyContent: 'flex-end',
                            position: 'absolute',
                            right: '0'
                        }
                    }>
                        <span className="badge rounded-pill bg-danger">
                            {source}
                        </span>
                    </div>
                    <img src={imageUrl} className="card-img-top" alt="Not available" />
                    <div className="card-body">
                        <h5 className="card-title">{title} </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {author ? author : 'Anonymous'} on {new Date(date).toLocaleString('en-GB', { timeZone: 'Asia/Kolkata' })}</small></p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
