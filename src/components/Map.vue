<template>
  <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25224.52154848855!2d-122.42338697337628!3d37.788511905789896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808a8ad5fa23%3A0xbc85fdd480db67b4!2sKong+Inc.!5e0!3m2!1sen!2sus!4v1547698800934"
      id="map"
      frameborder="0"
      align="middle"
      style="border:0"
      allowfullscreen
    ></iframe>
</template>

<style>
#map {  
  display: block;
  margin: 0 auto;
  border-radius: 20px;
  height: 30vw;
  width: 100vw;
}

@media screen and (max-width: 1000px) {
  #map {
    height: 60vw;
  }
}
</style>