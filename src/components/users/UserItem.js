import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const UserItem = ({ user: { name, company, avatar_url, location, bio, blog, login, html_url, followers, following, public_repos, public_gists, hireable } }) => {
    return (
        <div className="card text-center">
            <img src={avatar_url} alt="" className="round-img" style={{ width: '60px' }}></img>
            <h3>{login}</h3>
            <div>
                <Link to={`/user/${login}`} className="btn btn-black btn-sm my-1">More</Link>
            </div>
        </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem
