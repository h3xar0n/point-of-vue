<template>
  <section class="water news">
    <div>
      <h2>Join us at</h2>
      <a href="https://konghq.com/" target="_blank">
        <img id="kong-logo" src="../assets/kong.svg" alt>
      </a>
      <a target="_blank" href="https://www.meetup.com/vue-sf/events/257831667/">
        <h3>6PM-9PM January 24, 2019</h3>
      </a>
    </div>
  </section>
</template>

<style lang="scss">
.water {
  flex: auto;
  padding: 3vw;
  color: #ffffff;
  background: linear-gradient(to top, #9ddbff, #4780d4);
}

.water * {
  text-align: center;
}

.water h2 {
  font-size: 5vw;
  padding: 0;
  margin: 0 0 1vw 0;
}

.water h3 {
  font-size: 3.5vw;
}

#kong-logo {
  width: 24vw;
}
</style>