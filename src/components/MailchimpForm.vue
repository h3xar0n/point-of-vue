<template>
<!-- Begin MailChimp Signup Form -->
<div id="mc_embed_signup">
	<form action="https://herokuapp.us14.list-manage.com/subscribe/post?u=42dd73a709fbadb4a29ef1d0d&amp;id=f4c208334d" method="post"
	  id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
	  <div id="mc_embed_signup_scroll">
	    <label for="mce-EMAIL" class="signup-prompt">
	      Sign up for our weekly Vue newsletter
	    </label>
	    <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
	    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
	    <div style="position: absolute; left: -5000px;" aria-hidden="true">
	      <input type="text" name="b_42dd73a709fbadb4a29ef1d0d_f4c208334d" tabindex="-1" value="">
	    </div>
	    <div class="clear">
	      <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
	    </div>
	  </div>
	</form>
</div>

</template>

<script>

</script>

<style>
#mc_embed_signup {
  margin: 0 auto;
}

#mc_embed_signup_scroll {
  display: flex;
  flex-direction: column;
  height: 150px;
  justify-content: space-between;
  font-size: 20px;
}

.signup-prompt {
  font-size: 22px;
  margin-bottom: 5px;
}

.email {
  border: none;
  height: 50px;
  width: 300px;
  font-size: 20px;
  margin: auto;
  border-radius: 6px;
  text-align: left;
  padding-left: 15px;
  background: linear-gradient(127deg, #d8e5f9, #c6ddff);
}

.button {
  cursor: pointer;
  color: #fff;
  height: 50px;
  padding: 0 20px;
  border: none;
  border-radius: 6px;
  background: linear-gradient(240deg, #1cc7d0, #2dde98);
  transition: transform 0.1s;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}

.button:hover {
  transform: scale(1.03);
  transition: transform 0.1s;
}
</style>