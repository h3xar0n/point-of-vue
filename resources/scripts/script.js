var blog = new Vue({
  el: '#blog-articles',
  data: {
    articles: [
      {
        title: 'Build a Task List with Laravel 5.4 and Vue 2',
        image: 'https://cdn-images-1.medium.com/max/1600/1*1cxvzNwx9AaQkh9gYC4bzw.jpeg',
        desc:  'Build an application to create, view and delete tasks from a database using Vue and Laravel.',
        link:  'https://medium.com/point-of-vue/build-a-task-list-with-laravel-5-4-and-vue-2-9be0bba06801'
      },
      {
        title: 'Building a feature complete bookmarking app with Vue.js, Express and Sequelize ORM',
        image: 'https://cdn-images-1.medium.com/max/800/1*-6qHuOwJfWtkFkymMovJFQ.png',
        desc:  'This tutorial walks through building a Node.js, MySQL and front-end framework (Vue.js) application. Client side code is bundled with webpack.',
        link:  'https://medium.com/point-of-vue/building-a-feature-complete-bookmarking-app-with-vue-js-express-and-sequelize-orm-b36506ebcb4c'
      },
      {
        title: 'Build a shopping cart with Vue 2 and Vuex',
        image: 'https://cdn-images-1.medium.com/max/1600/1*FTqjfnhIFFrqNKPjkZO8CQ.png',
        desc:  'This tutorial goes through building out a shopping cart application with Vue.js and state management using Vuex. Users can browse products, add products to cart and view the total cost of their order. We set up routing using vue-router',
        link:  'https://medium.com/point-of-vue/build-a-shopping-cart-with-vue-2-and-vuex-5d58b93c513f'
      }
    ]
  }
})