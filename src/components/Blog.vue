<template>
    <section class="sea-floor blog">
      <h2>Read our blog</h2>
      <br class="standard-break">
      <div class="flex-row" id="blog-articles">
        <article class="blog-card" 
                 v-for="article in articles">
          <header>
            <div class="blog-image-wrapper">
              <img class="blog-image" v-bind:src="article.image">
            </div>
            <div>
              <h3 class="card-title">{{ article.title }}</h3>
              <p class="card-text">{{ article.desc }}</p>
            </div>
          </header>
          <footer>
            <a v-bind:href="article.link" target="_blank">
              <div class="button">
                <i class="fab fa-medium"></i>
                &nbsp;
                Read now
              </div>
            </a>
          </footer>
        </article>
      </div>
    </section>

</template>

<script>

export default {
	data(){
		return {
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
	}
}
</script>

<style>
.sea-floor {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3vw;
  background: #4780d4;
}

.sea-floor h2 {
  font-size: 3.5vw;
  color: #fff;
}

.blog-card {
  flex: 1;
  margin: 20px;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(to bottom, #e8f1ff,#f8f8f8);
}

.blog-image-wrapper {
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #41b883;
  border-radius: 20px;
}

.blog-image {
  max-width: 100%;
}

.card-title {
  margin: 20px 0;
  font-size: 28px;
}

.card-text {
  margin: 20px 0;
  font-size: 16px;
}

</style>