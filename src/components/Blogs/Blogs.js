import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div>
            <div className='first-div'>

                <h2>What is context API?</h2>
                <p>
                    The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.
                </p>

            </div>

            <div className='second-div'>

                <h2>What is semantic tag?</h2>
                <p>
                    The HTML semantics refers to the tags that provide meaning to an HTML page rather than just presentation. It makes HTML more comprehensible by better defining the different sections and layout of web pages.
                    List of a few semantic elements like;
                    article,details,aside,time,nav,mark,main,header etc

                </p>

            </div>

            <div className='last-div'>

                <h2>What is different Inline and Inline block elements?</h2>
                <p>
                    Inline :The elements does't start on a new line and only occupy just the width it requires.It's not possible to set the width and height.
                </p>
                <p>
                    Inline block:In other words, inline elements do NOT start on a new line and only takes up as much width as its content.But you can set it's width and height values.

                </p>



            </div>
        </div>
    );
};

export default Blogs;