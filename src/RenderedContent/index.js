import React, {
    Component
} from 'react'
export default class Content extends Component {
    createMarkup = content => {
        return {
            __html: content
        }
    }
    render() {
        const {
            content
        } = this.props
        return ( <div dangerouslySetInnerHTML = {
                this.createMarkup(content)
            }
            /> )
        }
    }