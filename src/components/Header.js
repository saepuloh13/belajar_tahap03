import React from 'react';
import PropTypes from 'prop-types';


class Header extends React.Component {
    static PropTypes = {
        title: PropTypes.string,
    }
    static defaultProps ={
        title: 'Facebook',
    }
    render() {
        return (
            <div className="header">
                <div className="h-1">
                    <h1>facebook</h1>
                    <form className="formh" action="index.js" method="post">
                        <label for="">Email atau Telepon</label>
                        <label for="">Kata Sandi</label>
                        <input className='txtb' type="text" placeholder="" name=" uname " required />
                        <input className='txtb' type="password" placeholder="" name=" psw " required />
                        <button id='btn'>Masuk</button>
                        <a href="#">Lupa akun?</a>
                    </form>
                </div>
            </div>
        );
    }
}

export default Header;