<template>
  <main>
    <nav id="large-screen">
      <div id="black-nav"></div>
      <a id="name" href="#home">John's Bakery</a>
      <div id="links">
        <a href="#home">Home</a>
        <a href="#service">Service</a>
        <a href="#about">About</a>
        <a href="#bread">Bread</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
    <nav id="small-screen">
      <div id="black-nav"></div>
      <a id="name" href="#home">John's Bakery</a>
      <div id="dropdown">
        <button type="button">
          <i class="fas fa-bars"></i>
        </button>
        <div id="dropdown-content">
          <a onclick="window.location.href='#home'" >
            <i class="fas fa-home"></i>
            <p>Home</p>
          </a>
          <a onclick="window.location.href='#service'">
            <i class="fas fa-cookie-bite"></i>
            <p>Service</p>
          </a>
          <a onclick="window.location.href='#about'">
            <i class="fas fa-user"></i>
            <p>About</p>
          </a>
          <a onclick="window.location.href='#bread'">
            <i class="fas fa-bread-slice"></i>
            <p>Bread</p>
          </a>
          <a onclick="window.location.href='#contact'">
            <i class="fas fa-envelope"></i>
            <p>Contact</p>
          </a>
        </div>
      </div>
    </nav>
    <section id="home">
      <img src="../assets/home/bread-min.jpg" alt="Lots of bread">
      <h1>Your Daily Bread</h1>
      <h3>Todays Special: Pretzel</h3>
      <div id="down" href="#service">
        <i class="fas fa-chevron-down" id="small"></i>
        <i class="fas fa-chevron-down" id="big"></i>
      </div>
      <div id="social-media">
        <a href="#">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="#">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#">
          <i class="fab fa-twitter"></i>
        </a>
      </div>
    </section>
    <section id="service">
      <h1>Our Service</h1>
      <div id="container">
        <div class="stages">
          <img src="../assets/home/bake-min.jpg" alt="Baking bread">
          <h1>Bake</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin nibh nisl condimentum id venenatis a. Enim blandit volutpat maecenas volutpat blandit aliquam etiam. In egestas erat imperdiet sed euismod. Mollis aliquam ut porttitor leo a diam.</p>
        </div>
        <div class="stages">
          <img src="../assets/home/pick-up-min.jpg" alt="Bakery">
          <h1>Pick-up</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin nibh nisl condimentum id venenatis a. Enim blandit volutpat maecenas volutpat blandit aliquam etiam. In egestas erat imperdiet sed euismod. Mollis aliquam ut porttitor leo a diam.</p>
        </div>
        <div class="stages">
          <img src="../assets/home/eat-min.jpg" alt="Breakfast">
          <h1>Eat</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin nibh nisl condimentum id venenatis a. Enim blandit volutpat maecenas volutpat blandit aliquam etiam. In egestas erat imperdiet sed euismod. Mollis aliquam ut porttitor leo a diam.</p>
        </div>
      </div>
    </section>
    <section id="about">
      <img src="../assets/home/about-min.jpg" alt="Baking Bread">
      <h1>About Us</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis at tellus. Vitae ultricies leo integer malesuada nunc vel. Elementum nisi quis eleifend quam adipiscing. Nisl pretium fusce id velit ut. Sapien pellentesque habitant morbi tristique et malesuada. Vitae turpis massa sed elementum tempus egestas sed sed.</p>
    </section>
    <section id="bread">
      <h1>Our Bread Collection</h1>
      <div id="container">
        <div class="bread" v-for="bun in state.edibleBuns" :key="bun.id">
          <img :src="bun.image_url" alt="Bread type">
          <h1>{{bun.type[0].toUpperCase() + bun.type.slice(1, bun.type.length)}}</h1>
          <p>ingridients : </p>
          <div v-for="ingr in bun.ingridients" :key="ingr">
            <p>{{ingr}}</p>
          </div>
        </div>
      </div>
    </section>
    <section id="contact">
      <img src="../assets/home/contact-min.jpg" alt="A lot of bread">
      <h1>Contact Us</h1>
      <div id="container">
        <div class="info">
          <h3>Call</h3>
          <p>(566) 893-7742</p>
        </div>
        <div class="info">
          <h3>Email</h3>
          <p>service@johnsbakery.com</p>
        </div>
      </div>
    </section>
    <footer>
      <h1>John's Bakery</h1>
      <div id="social-media">
        <a href="#">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="#">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#">
          <i class="fab fa-twitter"></i>
        </a>
      </div>
    </footer>
  </main>
</template>

<script>
import { reactive } from 'vue';
import axios from 'axios';

export default {
  setup() {
    let state = reactive({
      edibleBuns: []
    });

    (async() => {
      let res = await axios.get('http://localhost:5000/edibleBuns');
      state.edibleBuns = res.data.items
    })();

    return {
      state
    }
  }
}
</script>

<style lang="sass" scoped>

main
  width: 100%
  height: 100%
  margin: 0px
  padding: 0px
  color: white
  overflow-x: hidden
  scroll-behavior: smooth
  -webkit-tap-highlight-color: transparent
  font-family: 'Rubik', sans-serif

  nav
    position: fixed
    width: 100%
    height: 100px
    z-index: 5

    #black-nav
      position: absolute
      width: 100%
      height: 100%
      background-color: black
      opacity: 0.4
      z-index: 0

    #name
      position: absolute
      left: 2.5%
      top: 50%
      transform: translateY(-50%)
      margin: 0px
      padding: 5px
      font-size: 1.75em
      font-family: 'Pacifico', cursive
      color: white
      text-decoration: none

      @media(max-width: 400px)
        font-size: 1.5em

      @media(max-width: 300px)
        font-size: 1.25em

      @media(max-width: 225px)
        font-size: 1em

  #large-screen
    @media(max-width: 800px)
      display: none

    #links
      display: flex
      flex-direction: row
      position: absolute
      right: 2.5%
      top: 50%
      transform: translateY(-50%)

      a
        margin: 0px 20px
        padding: 5px
        color: white
        text-align: center
        text-decoration: none
        font-size: 1.25em

      a:hover
        text-decoration: underline

  #small-screen
    display: none

    @media(max-width: 800px)
      display: block

    #dropdown
      overflow: hidden

      button
        position: absolute
        right: 5%
        top: 50%
        transform: translateY(-50%)
        outline: none
        color: white
        margin: 0
        background: none
        border: none

        i
          font-size: 3em
          padding: 14px 16px
          text-align: center
          text-shadow: 0px 0px 25px black

          @media(max-width: 300px)
            font-size: 2.5em

      button:focus ~ #dropdown-content
        display: flex

      button:hover
        cursor: pointer

      #dropdown-content
        display: none
        position: absolute
        right: 3%
        top: 100px
        background-color: #f9f9f9
        min-width: 160px
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2)
        z-index: 1

        @media(max-width: 660px)
          flex-direction: column

        a
          display: block
          flex-direction: row
          color: black
          padding: 12px 16px
          text-decoration: none

          i
            position: relative
            font-size: 2em
            width: 50px
            height: 40px
            bottom: 0%
            left: 50%
            transform: translateX(-50%)
            text-align: center

          p
            position: relative
            text-align: center
            margin: 0

        a:hover
          background-color: #ddd
          color: black
          cursor: pointer

      #dropdown-content:hover
        display: flex

    #dropdown:hover .dropdown-content
      display: block

  section
    position: relative
    width: 100%
    height: auto
    margin: 0
    padding: 0

  #home
    height: 100vh
    background: black
    box-shadow: 0px 0px 25px black
    z-index: 2
    position: relative

    img
      position: absolute
      width: 100%
      height: 100%
      object-fit: cover
      opacity: 0.75

    h1
      position: absolute
      width: 1100px
      left: 50%
      top: 47.5%
      transform: translate(-50%, -50%)
      text-align: center
      margin: 0
      font-size: 7.5em
      font-family: 'Pacifico', cursive
      text-shadow: 0px 0px 100px black
      color: #FFFF33

      @media(max-width: 1100px)
        top: 50%
        width: 800px

      @media(max-width: 800px)
        font-size: 6em
        width: 600px

      @media(max-width: 600px)
        font-size: 4em
        width: 400px

      @media(max-width: 400px)
        font-size: 3em
        width: 300px

      @media(max-width: 300px)
        font-size: 2em
        width: 200px

      @media(max-width: 250px)
        font-size: 1.75em
        width: 175px

    h3
      position: absolute
      bottom: 5%
      left: 2.5%
      margin: 0
      font-size: 2em
      text-shadow: 0px 0px 25px black

      @media(max-width: 1000px)
        font-size: 1.75em

      @media(max-width: 800px)
        font-size: 1.5em

      @media(max-width: 700px)
        font-size: 1.25em

      @media(max-width: 600px)
        font-size: 1em

      @media(max-width: 500px)
        display: none

    #down
      position: absolute
      left: 50%
      bottom: 4.5%
      transform: translateX(-50%)
      width: 50px
      height: 50px
      cursor: pointer
      transition: 0.25s

      #small
        position: absolute
        left: 50%
        top: 30%
        transform: translate(-50%, -50%)
        font-size: 1.75em
        text-shadow: 0px 0px 25px black
        color: #FFFF33

      #big
        position: absolute
        left: 50%
        bottom: 0%
        transform: translateX(-50%)
        font-size: 2.5em
        text-shadow: 0px 0px 25px black
        color: #FFFF33

    #down:hover
      bottom: 4%

    #social-media
        position: absolute
        bottom: 4.5%
        right: 2.5%
        display: flex
        flex-direction: row

        @media(max-width: 500px)
          display: none

        a
          color: white
          margin-left: 25px
          height: 50px
          width: 50px

          @media(max-width: 600px)
            margin-left: 12.5px

          i
            position: relative
            left: 50%
            top: 50%
            transform: translate(-50%, -50%)
            font-size: 3em
            transition: 0.25s

            @media(max-width: 700px)
              font-size: 2.5em

            @media(max-width: 600px)
              font-size: 2em

          i:hover
            font-size: 3.5em

          i:active
            font-size: 2.5em


  #service

    h1
      position: relative
      top: 162.5px
      text-align: center
      font-size: 5em
      margin: 0
      color: black

      @media(max-width: 800px)
        font-size: 4.5em

      @media(max-width: 700px)
        font-size: 4em

      @media(max-width: 600px)
        font-size: 3.5em

      @media(max-width: 500px)
        font-size: 3em

      @media(max-width: 400px)
        font-size: 2.5em

      @media(max-width: 300px)
        font-size: 2em

      @media(max-width: 200px)
        font-size: 1.5em

    #container
      display: grid
      grid-template-columns: repeat(3, 1fr)
      position: relative
      left: 50%
      transform: translateX(-50%)
      margin-top: 250px
      padding-bottom: 50px
      width: 80%
      height: auto

      @media(max-width: 1600px)
        width: 85%

      @media(max-width: 1500px)
        width: 90%

      @media(max-width: 1400px)
        width: 95%

      @media(max-width: 900px)
        grid-template-columns: 100%
        grid-template-rows: repeat(3, 1fr)
        margin-top: 225px

      .stages
        position: relative
        left: 50%
        transform: translateX(-50%)
        width: 80%
        min-height: 600px
        height: auto
        margin-bottom: 150px
        background-color: black
        box-shadow: 10px 10px 25px -15px black

        @media(max-width: 1300px)
          width: 85%

        @media(max-width: 900px)
          width: 75%
          min-height: 400px
          margin-bottom: 50px

        img
          position: absolute
          width: 100%
          height: 100%
          object-fit: cover
          opacity: 0.5

        h1
          position: relative
          top: 25px
          left: 50%
          transform: translateX(-50%)
          width: 80%
          text-align: left
          border-bottom: 2px solid grey
          font-size: 4em
          text-shadow: 0px 0px 25px black
          color: #FFFF33

          @media(max-width: 1300px)
            font-size: 3.5em

          @media(max-width: 1000px)
            font-size: 3em

          @media(max-width: 900px)
            text-align: center
            font-size: 4em
            top: 35px
            padding-bottom: 15px

          @media(max-width: 500px)
            font-size: 3em

          @media(max-width: 350px)
            font-size: 2em

        p
          position: relative
          margin-top: 50px
          left: 50%
          transform: translateX(-50%)
          width: 75%
          text-align: left
          font-size: 1.5em
          text-shadow: 0px 0px 25px black

          @media(max-width: 1300px)
            font-size: 1.25em

          @media(max-width: 900px)
            font-size: 1.5em
            text-align: center
            margin-top: 65px
            width: 70%
            padding-bottom: 15px

          @media(max-width: 600px)
            font-size: 1.25em

          @media(max-width: 450px)
            font-size: 1em

  #about
    color: black
    background: black
    box-shadow: 0px 0px 25px black
    z-index: 2

    img
      position: absolute
      width: 100%
      height: 100%
      object-fit: cover
      opacity: 0.625

    h1
      position: relative
      top: 162.5px
      text-align: center
      font-size: 5em
      margin: 0
      color: #FFFF33

      @media(max-width: 700px)
        font-size: 4.5em

      @media(max-width: 600px)
        font-size: 4em

      @media(max-width: 500px)
        font-size: 3.5em

      @media(max-width: 400px)
        font-size: 3em

      @media(max-width: 300px)
        font-size: 2.5em

      @media(max-width: 200px)
        font-size: 2em

    p
      position: relative
      width: 50%
      left: 50%
      transform: translateX(-50%)
      margin: 225px 0px 0px 0px
      padding-bottom: 175px
      text-align: center
      font-size: 2em
      color: white

      @media(max-width: 900px)
        width: 60%

      @media(max-width: 700px)
        width: 70%

      @media(max-width: 600px)
        width: 75%
        font-size: 1.75em

      @media(max-width: 450px)
        font-size: 1.5em

      @media(max-width: 300px)
        font-size: 1.25em

      @media(max-width: 200px)
        font-size: 1em


  #bread

    h1
      position: relative
      top: 162.5px
      text-align: center
      font-size: 5em
      margin: 0
      color: black

      @media(max-width: 1200px)
        font-size: 4.5em

      @media(max-width: 1100px)
        font-size: 4em

      @media(max-width: 1000px)
        font-size: 3.5em

      @media(max-width: 900px)
        font-size: 3em

      @media(max-width: 800px)
        font-size: 2.5em

      @media(max-width: 500px)
        font-size: 2em

      @media(max-width: 400px)
        font-size: 1.5em

      @media(max-width: 300px)
        font-size: 1em

    #container
      display: grid
      grid-template-columns: repeat(2, 1fr)
      position: relative
      left: 50%
      transform: translateX(-50%)
      margin-top: 250px
      padding-bottom: 50px
      width: 80%
      height: auto

      @media(max-width: 1600px)
        width: 85%

      @media(max-width: 1500px)
        width: 90%

      @media(max-width: 1400px)
        width: 95%

      @media(max-width: 900px)
        grid-template-columns: 100%
        grid-template-rows: repeat(4, 1fr)
        margin-top: 225px

      .bread
        position: relative
        left: 50%
        transform: translateX(-50%)
        width: 80%
        min-height: 450px
        height: auto
        margin-bottom: 150px
        background-color: black
        box-shadow: 10px 10px 25px -15px black

        @media(max-width: 1300px)
          width: 85%

        @media(max-width: 900px)
          width: 75%
          margin-bottom: 50px
          min-height: 400px

        img
          position: absolute
          width: 100%
          height: 100%
          object-fit: cover
          opacity: 0.5

        h1
          position: relative
          top: 25px
          left: 50%
          transform: translateX(-50%)
          width: 80%
          text-align: left
          border-bottom: 2px solid grey
          font-size: 4em
          text-shadow: 0px 0px 25px black
          color: #FFFF33

          @media(max-width: 1300px)
            font-size: 3.5em

          @media(max-width: 1000px)
            font-size: 3em

          @media(max-width: 900px)
            text-align: center
            font-size: 4em
            top: 35px
            padding-bottom: 15px

          @media(max-width: 500px)
            font-size: 3em

          @media(max-width: 350px)
            font-size: 2em

          @media(max-width: 300px)
            font-size: 1.5em

        p
          position: relative
          margin-top: 50px
          left: 50%
          transform: translateX(-50%)
          width: 75%
          text-align: left
          font-size: 1.5em
          text-shadow: 0px 0px 25px black

          @media(max-width: 1300px)
            font-size: 1.25em

          @media(max-width: 900px)
            font-size: 1.5em
            text-align: center
            margin-top: 65px
            width: 70%
            padding-bottom: 15px

          @media(max-width: 600px)
            font-size: 1.25em

          @media(max-width: 450px)
            font-size: 1em


  #contact
    color: black
    background: black
    box-shadow: 0px 0px 25px black
    z-index: 2

    img
      position: absolute
      width: 100%
      height: 100%
      object-fit: cover
      opacity: 0.625

    h1
      position: relative
      top: 162.5px
      text-align: center
      font-size: 5em
      margin: 0
      color: #FFFF33

      @media(max-width: 800px)
        font-size: 4.5em

      @media(max-width: 700px)
        font-size: 4em

      @media(max-width: 600px)
        font-size: 3.5em

      @media(max-width: 500px)
        font-size: 3em

      @media(max-width: 400px)
        font-size: 2.5em

      @media(max-width: 300px)
        font-size: 2em

      @media(max-width: 200px)
        font-size: 1.5em

    #container
      display: grid
      grid-template-columns: repeat(2, 1fr)
      position: relative
      left: 50%
      transform: translateX(-50%)
      margin-top: 250px
      width: 80%
      height: auto

      @media(max-width: 1300px)
        width: 90%

      @media(max-width: 900px)
        width: 75%
        grid-template-columns: 100%
        grid-template-rows: repeat(2, 1fr)
        padding-bottom: 50px

      .info
        position: relative
        left: 50%
        transform: translateX(-50%)
        width: 80%
        height: auto
        padding-bottom: 75px
        margin-bottom: 175px
        box-shadow: 0px 0px 25px black

        @media(max-width: 1500px)
          width: 85%

        @media(max-width: 1150px)
          width: 90%

        @media(max-width: 900px)
          margin-bottom: 50px

        h3
          position: relative
          top: 60px
          font-size: 4em
          text-shadow: 0px 0px 25px black
          text-align: center
          color: white
          margin: 0

          @media(max-width: 600px)
            font-size: 3.5em

          @media(max-width: 500px)
            font-size: 3em

          @media(max-width: 400px)
            font-size: 2.5em

          @media(max-width: 300px)
            font-size: 2em

          @media(max-width: 200px)
            font-size: 1.5em

        p
          position: relative
          margin: 100px 0px 0px 0px
          text-shadow: 0px 0px 25px black
          text-align: center
          font-size: 2em
          color: white

          @media(max-width: 1050px)
            font-size: 1.75em

          @media(max-width: 600px)
            font-size: 1.5em

          @media(max-width: 500px)
            font-size: 1.25em

          @media(max-width: 400px)
            font-size: 1em

          @media(max-width: 350px)
            font-size: 0.9em

          @media(max-width: 300px)
            font-size: 0.75em

          @media(max-width: 250px)
            font-size: 0.6em


  footer
    position: relative
    width: 100%
    height: auto
    margin: 0
    padding: 0
    background-color: #202020
    box-shadow: 0px 0px 25px black
    z-index: 3

    h1
      position: relative
      top: 100px
      font-size: 3em
      margin: 0px
      color: white
      text-decoration: none
      text-align: center

      @media(max-width: 500px)
        font-size: 2.5em

      @media(max-width: 400px)
        font-size: 2em

      @media(max-width: 300px)
        font-size: 1.5em

      @media(max-width: 200px)
        font-size: 1em

    #social-media
        position: relative
        width: 300px
        left: 50%
        transform: translateX(-50%)
        margin-top: 150px
        padding-bottom: 100px
        display: flex
        flex-direction: row

        @media(max-width: 400px)
          width: 250px

        @media(max-width: 300px)
          width: 200px

        @media(max-width: 200px)
          width: 150px

        a
          position: relative
          color: white
          margin: 0px 25px
          height: 50px
          width: 50px

          @media(max-width: 500px)
            margin: 0px 25px

          @media(max-width: 400px)
            margin: 0px 20px

          @media(max-width: 300px)
            margin: 0px 15px

          @media(max-width: 200px)
            margin: 0px 10px

          i
            position: relative
            left: 50%
            top: 50%
            transform: translate(-50%, -50%)
            font-size: 4em
            transition: 0.25s

            @media(max-width: 500px)
              font-size: 3.5em

            @media(max-width: 400px)
              font-size: 3em

            @media(max-width: 300px)
              font-size: 2.5em

            @media(max-width: 200px)
              font-size: 2em

          i:hover
            font-size: 4.5em

          i:active
            font-size: 3.5em
</style>
