import React from 'react';

const Blogs = () => {
  return (
    <div id="blogs">
      <h2 className='fw-semibold py-4'>Blog Section</h2>
      <div className="accordion accordion-flush" id="singleBlog">
        <div className="accordion-item rounded-3 mb-3">
          <h2 className="accordion-header" id="blog1">
            <button className="accordion-button collapsed shadow-none rounded-sm" type="button" data-bs-toggle="collapse" data-bs-target="#blogOne" aria-expanded="false" aria-controls="blogOne">
              What Is React & How Does React Works?
            </button>
          </h2>
          <div id="blogOne" className="accordion-collapse collapse" aria-labelledby="blog1" data-bs-parent="#singleBlog">
            <div className="accordion-body">
              <p>ReactJS is known as one of the most popularly used JavaScript libraries for web app development. It is a product of Facebook. React comes with a varied collection of JavaScript code snippets that are reusable and can be used for user interface (UI) building which are called components. ReactJS is not a JavaScript framework and the reason behind it is that it is only responsible for rendering the web components of a view layer of the app. Basically, React is just an alternative to frameworks like Vue and Angular. It enables web app developers to create complex functions.</p>
              <p>React is a very simple and straightforward JavaScript library. Working with it is very easy for anyone who has basic JavaScript knowledge. And one of the biggest benefits of using React library is that it enables the app developers to import HTML code with JavaScript code while creating a React application. With React, the web developers can create a representation of a DOM node and this can be done by declaring the Element function in React. </p>
            </div>
          </div>
        </div>
        <div className="accordion-item rounded-3 mb-3">
          <h2 className="accordion-header" id="blog2">
            <button className="accordion-button collapsed shadow-none rounded-sm" type="button" data-bs-toggle="collapse" data-bs-target="#blogTwo" aria-expanded="false" aria-controls="blogTwo">
              What is the difference between props and state?
            </button>
          </h2>
          <div id="blogTwo" className="accordion-collapse collapse" aria-labelledby="blog2" data-bs-parent="#singleBlog">
            <div className="accordion-body">
              <p>Props are a Component’s attributes in React that are useful for customization. Since a prop modifies a component’s behavior or output, it can be compared to a parameter.</p>
              <p>A built-in React object called the state is used to store data or details about the component. A component may change over time, and a new rendering of the component is produced each time it happens. The component’s behavior and rendering are determined by changes in state, which may occur in reaction to user input or system-generated events.</p>
            </div>
          </div>
        </div>
        <div className="accordion-item rounded-3 mb-3">
          <h2 className="accordion-header" id="blog3">
            <button className="accordion-button collapsed shadow-none rounded-sm" type="button" data-bs-toggle="collapse" data-bs-target="#blogThree" aria-expanded="false" aria-controls="blogThree">
              What is the use of useEffect without loading api data?
            </button>
          </h2>
          <div id="blogThree" className="accordion-collapse collapse" aria-labelledby="blog3" data-bs-parent="#singleBlog">
            <div className="accordion-body">
              <h5>Running on state change: validating input field</h5>
              <p>Validating an input while it's receiving characters is another great application for useEffect. Whilst the input is being stored in a state using useState, the validation takes place every time the input changes, giving immediate feedback to the user.</p>

              <h5>Running on state change: live filtering</h5>
              <p>We can use useEffect to filter an array "on the fly" by typing letters into an input element. To do so, we will need to use a state to save the input, and a filter implementation inside the useEffect that will be triggered when the input changes, thanks to useEffect dependencies.</p>

              <h5>Running on state change: trigger animation on new array value</h5>
              <p>We can use the useEffect hook to trigger an animation on a shopping cart as a side effect of adding a new product to it. In this case, we'll need a state to handle the cart items, and another state to handle the animation trigger.

                As we are using a timer inside the useEffect, It is a good practice to clear it before it gets set again by using the return statement of the useEffect, which gets executed before the main body of the useEffect hook gets evaluated (except for the first render).</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;