<template>
	<section class="water news">
      <div>
        <h2>Join us at
          <a href="https://goo.gl/maps/5CzGkbvc3Bs" target="_blank">
            <img id="okta-logo" src="https://i.imgur.com/KLhqUhg.png" alt="">
          </a>
        </h2>
        <br>
        <a target="_blank" href="https://www.meetup.com/Point-of-Vue/">
          <h3>
            6PM-9PM August 1, 2018
          </h3>
        </a>
      </div>
      <br class="standard-break">
      <div class="container">
        <div class='row'>
          <Mailchimp-Form></Mailchimp-Form>
        </div>
      </div>
    </section>
</template>
<script>
	export default {

	}
</script>
<style lang="scss">
.water {
  flex: auto;
  padding: 3vw;
  color: #ffffff;
  background: linear-gradient(to bottom, #a9ccff,#4780d4);
}

.water * {
  text-align: center;
}

.water h2 {
  font-size: 5vw;
}

.water h3 {
  font-size: 3.5vw;
}

#okta-logo {
  width: 12vw;
}

.standard-break {
  line-height: 6vw;
}



</style>