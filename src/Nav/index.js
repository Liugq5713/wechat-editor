import React, { Component } from 'react'
import qrcode from './qrcode.jpg'

export default class Nav extends Component {
    componentDidMount() {
        const elemsTooltip = document.querySelectorAll('.tooltipped');
        M.Tooltip.init(elemsTooltip);// eslint-disable-line
        const elemsModal = document.querySelectorAll('.modal');
        M.Modal.init(elemsModal);// eslint-disable-line
    }
    render() {
        return (
            <div>

                <nav className='grey darken-4'>
                    <div className='nav-wrapper'>
                        <ul id='nav-mobile' className='right hide-on-med-and-down'>
                            <li>
                                <a href="#!" className="tooltipped " data-position="bottom" data-tooltip="不要赞赏，关注我吧">赞赏</a>
                            </li>
                            <li>
                                <a className="waves-effect waves-light modal-trigger" href="#modal1">
                                    关注
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="modal1" className="modal">
                        <div className="modal-content center-align">
                            <img src={qrcode} alt='微信公众号二维码' />
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}