# Getting started with `vue-ws-product-details`

This is a coding challenge developed by Jezz Lucena. The main purpose is to showcase Front-End engineering skills, including UX/UI design and unit testing.

## Running

Use an HTTP server of your preference, then open *http://localhost:8000* on a ES6 compatible browser. Here are some server suggestions (given you have one of these packages installed):

``` bash
python -m SimpleHTTPServer 8000
```

OR

``` bash
php -S localhost:8000
```

## Unit Tests

Unit tests were written for all major features on each of the implemented Components using npm, vue-test-utils, and jest. To check it out, run the following command on terminal:

``` bash
npm install
npm test
```

## Final Notes

When I started this challenge, I was not at all familiar with Vue.js, but thought it would be a good opportunity to dive into this up-and-coming JavaScript view framework.

What was particularly interesting to me about Vue is its implementation of the Model-View-View-Model pattern, which is not widespread as the older cousin Model-View-Controller. In Vue, the Model and the View of the UI are connected via two way data bindings, which improves on many of the shortcomings of React's state management topology. Vue also seems to be extremely scalable, offering great performance and ease of development for both small and large teams. Robust frameworks like Angular or React tend to work better with larger production applications, but can be a lot of hassle for smaller projects.

One misconception I had when I started this challenge is that Vue would allow me to use vanilla JavaScript for a way larger part of the application than it actually did (queries, events, etc. as described on the challenge). Taking that into consideration, I still feel good about this framework - it did not take away too much of the vanilla ES6 paradigm, nor did it separate the DOM from the execution of the application, which allowed for neat transitions to be added to the Carousel UI.

## Future Development

I was not able to get the json file asynchronously from Williams-Sonoma's servers due to Cross-Origin Resource Sharing policies implemented on the server and on most modern web browsers. To circumvent this issue, I downloaded the data and included it in local storage - although I still make the asynchronous call using ES6's fetch API.

If the server eventually starts allowing CORS requests (by adding 'Access-Control-Allow-Origin: *' to it's HTTP headers), the json data source should be seamlessly interchangeable on line 29 of /js/app.js.


## Resources

- [vue docs](https://vuejs.org/v2/guide/)

- [vue-test-utils docs](https://vue-test-utils.vuejs.org)
- [vue-test-utils repo](https://github.com/vuejs/vue-test-utils)
