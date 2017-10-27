import React, { Component } from 'react';
import { getUserInfo, getAllUsers } from './../../ducks/users';
import { connect } from 'react-redux';
import './Dashboard.css';

class Dashboard extends Component {

    componentDidMount() {
        this.props.getUserInfo();
        this.props.getAllUsers();
    }

    render() {
        return (
            <div className="dashboard">
                <nav className="header-nav">
                    <div className="header-parent">
                        <div className="header-left"></div>
                        <span className="header-title">Helo</span>
                        <a href="/">
                            <img className="header-home" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAXCAYAAAAV1F8QAAAAAXNSR0IArs4c6QAAAZ9JREFUSA3tlL1KA0EUhXc1QlCwShNimcIu2giChV36YBB7C3vxCcwL6CMEgo3gE2hnH/zBKrGztBQEcf1OuBt2Bmcza+3A596595wzJrvZJKmwsixrw73RrmBNlmLFhB+jHcOKMbZebES5jrAG3MAXDKBmqFZPs0Z5yoIpAV14g1fY8+Xq2Uyarj9fuMdUhwv4hiGsh0yamUZaeeohrdNH2IEneIdDZ1iykdY88naCUoYpnMIn3MFGUBwYyGNeZSgrdaQ0WnALEpyBK3DU5Rt5LUNZymzNHBQ90Nf0DFvlMfFTZVmmsnsJfx7hEuJuYvxZytZDpewHx0bjBXad5h82ylBW0eq/GTYZVn4IioFWK0NZ81WbVxEF/+URsgOTXqdpehVhm0n8TxT0cciA4Qh0L8WI3jnX6gujVt930muC3msn+Uy19Zp5L7/S70OW73WN/UTbaJdhKJMt1epptnDFHrSmJO7JR55YqGezvB+6xh4U8kf3/w+K/qp84W8/2H2ezFVPuOPti9uq+kQvwYme/8CaFtNVo5sGtGpPivofLh2TqPQC754AAAAASUVORK5CYII=" alt="home" />
                        </a>
                        <a href="/search/1">
                            <img className="header-search" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAAXNSR0IArs4c6QAAAeJJREFUSA2tlM0rBGEcx3dWEREp4oBVrvsXLJEoTsR/QDk6ydt1E2ccuIniKGeEi4MLbY6SAzaRUt5C1uer9pkZM7PM2m99muf5vT0zz/yeJxLxUSaTKYch2IJzeIF7SMECdPikeUzWTwuJI9iSUA0HcAhpKIVm6IEWkG/UsqwUz9yiaAmswScsQ31QBr4uOIEnGAyKM3aCVFjB/caYY0CcXmYVPqA7MBTnCOiN/1Q4W4h4C/Rf9D9qs3bzxKifdwNLxhhiQF4V3MGiJw2juuIN6jzOPxrInYRnKHOlYNBnbbuMISfkx0Dqc6ZGmcRB7Za3aMcLkq9BtYxUXC2nPv6vVMPVvir+Ajog/5VqvDqLqPgVxJzGsGP2uoicBlAtIxXfh15jyW+QIK0CdCXYYtV2kDpta7gRuRtwBpYnE+MeHEOxx/mLgZxW0Oke9g3FEYdHWAHv6r5ZkQixTZCGXdAW+wvnALzDJlT6R9lWYhKgwtKM7QkYEaSrVJfQLYxDozOUeRTaYB20FTuQBGnKGes7JqgG5kHXr3QJR3AKDyDp5+lO+t4KnhMguRYI3F8CdSh0T+tI6+TpgKiP1W7HHPkMTyPiJ5jMwTS+WeMo1EALgOT6gkLVVwdlF9CXFF4sMAapL60vtT4ftHlFAAAAAElFTkSuQmCC" alt="search" />
                        </a>
                        <div className="header-mid">
                            <span className="header-text-logo">Dashboard</span>
                        </div>
                        <div className="header-right">
                            <a href='http://localhost:3005/auth/logout'><span className="header-logout">Logout</span></a>
                        </div>
                    </div>
                </nav>
                <main className="dashboard-container">
                    <div className="dashboard-user">
                        <div className="profile-top">
                            <div className="user-container">
                                <div className="user-left">
                                    <img className="user-image" src="https://robohash.org/me" alt="user" />
                                </div>
                                <div className="user-right">
                                    <span className="name">Bender</span>
                                    <span className="name">Futurama</span>
                                    <a href="/profile">
                                        <button className="user-edit-btn">Edit Profile</button>
                                    </a>
                                </div>
                            </div>
                            <div className="content-container">
                                <span className="content-text">Welcome to Helo! Find recommended friends based on your similarities, and even search for them by name. The more you update your profile, the better recommendations we can make!</span>
                            </div>
                        </div>
                        <div className="friends-parent">
                            <div className="friends-child">
                                <div className="friends-header"></div>
                                <span className="header-span">Recommended Friends</span>
                                <span className="select-span">Sorted By</span>
                                <select className="filter-menu">
                                    <option value="first">First Name</option>
                                    <option value="last">Last Name</option>
                                    <option value="gender">Gender</option>
                                    <option value="hobby">Hobby</option>
                                    <option value="h_color">Hair Color</option>
                                    <option value="e_color">Eye Color</option>
                                    <option value="birthday">Birthday</option>
                                </select>
                                <div className="friends-display">
                                    <div className="friend"></div>
                                    <div className="friend"></div>
                                    <div className="friend"></div>
                                    <div className="friend"></div>
                                    <div className="friend"></div>
                                    <div className="friend"></div>
                                    <div className="friend"></div>
                                    <div className="friend"></div>
                                    <div className="friend"></div>
                                    <div className="friend"></div>
                                    <div className="friend"></div>
                                    <div className="friend"></div>
                                    <div className="friend"></div>
                                    <div className="friend"></div>
                                    <div className="friend"></div>
                                    <div className="friend"></div>
                                    <div className="friend"></div>
                                    <div className="friend"></div>
                                    <div className="friend"></div>
                                    <div className="friend"></div>
                                    <div className="friend"></div>
                                    <div className="friend"></div>
                                    <div className="friend"></div>
                                    <div className="friend"></div>
                                    <div className="friend"></div>
                                    <div className="friend"></div>
                                    <div className="friend"></div>
                                    <div className="friend"></div>
                                    <div className="friend"></div>
                                    <div className="friend"></div>
                                    <div className="friend"></div>
                                    <div className="friend"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { getUserInfo, getAllUsers })(Dashboard);