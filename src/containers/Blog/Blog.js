import React from 'react';

// import Post from '../../components/Post/Post';
// import FullPost from './FullPost/FullPost';
// import NewPost from './NewPost/NewPost';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import Fullpost from './FullPost/FullPost';

import {Route ,Switch,Link,NavLink} from 'react-router-dom';


const Blog =()=>{

        return (
            <div>
                <header className="Nav"><ul>
                    <li><NavLink to="/" exact
                    activeClassName="selected"
                    >Blog</NavLink></li>
                    
                    <li><NavLink to={{
                        pathname : "/NewPost",
                        search : '?sort=name',
                        hash : '#name'
                    }}>New blog</NavLink></li>
                    </ul>
                    </header>

                    <Switch>
          <Route exact path="/">
            <Posts/>
          </Route>
          <Route path="/NewPost">
            <NewPost />
          </Route>
          <Route path="/:id">
            <Fullpost />
          </Route>
         
        </Switch>
            
                {/* <section>
                    <FullPost id={this.state.postSelected} />
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }


export default Blog;