import React, {Component}  from 'react'


class ClassCard extends Component{
    render(){
        return(
            <>
                <h2>This is working from class componnet.</h2>
                <hr/>
                <h2>{this.props.name}</h2>
            </>
        )
    }
}

export default ClassCard;