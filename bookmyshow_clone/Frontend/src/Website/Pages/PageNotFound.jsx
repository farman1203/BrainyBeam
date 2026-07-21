import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <div>
            <div className='pnf'>
                <img src="https://assets-in.bmscdn.com/discovery-catalog/lib/tr:w-600/no-entertainement-in-area-202007011731.png" alt="" />
                <h2>
                    Page Not Found
                </h2>
                {/* <Link path='/'>go to homepage</Link> */}
            </div>
        </div>
    )
}

export default PageNotFound
