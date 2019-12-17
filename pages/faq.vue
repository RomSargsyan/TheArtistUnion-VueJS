<template>
  <div class="container" id="app">
    <article class="static animated fadeIn">
      <div id="home-bg"></div>
      <h1>Frequently Asked Questions</h1>
      <section class="static-content">
        <p class="lead">
          Please read over the following questions and answers to understand how our website works.
          If you have any additional questions, please
          <a href="mailto:info@theartistunion.com">email us</a>
        </p>
        <section>
          <h3>I'm new to The Artist Union, what can I do?</h3>
          <h4>What's is this?</h4>
          <p>
            The Artist Union is the best platform for artists to organically grow their fanbase.
            We provide free tools for artists of any size to better market themselves and expand
            their following. We help artists identify and reach their 10x fans. See our
            <nuxt-link title="about" aria-label="about" to="/about">About Page</nuxt-link>
            to learn more about our mission.
          </p>
          <h4>I'm not an artist, what can I do?</h4>
          <p>
            Because of all the amazing artists on our platform, fans can enjoy free and unlimited
            music for streaming and downloads. Check out the
            <nuxt-link title="Charts" aria-label="Charts" to="/charts/tracks">
              Charts
            </nuxt-link>
            to start listening!
          </p>
          <h4>Why do you need to access my SoundCloud?</h4>
          <p>If you're an artist, we ask you to connect to SoundCloud so that we can seamlessly
            setup download gates for your music. If you're a fan, we ask for SoundCloud access
            to support the artist in exchange for a free download. We promise to never do anything
            with your SoundCloud account without asking for your permission first.
          </p>
        </section>
        <section>
          <h3>I'm an artist</h3>
          <h4>What is a download gate?</h4>
          <p>
            A download gate is a landing page for your music where you give fans free downloads in
            exchange for social and/or monetary support. This is the best way to grow your fanbase in
            a fair and organic way.
          </p>
          <h4>How do fans support me?</h4>
          <p>
            You can easily customize how your fans should support you in the following ways:
          </p>
          <ul>
            <li>SoundCloud follow</li>
            <li>SoundCloud favorite</li>
            <li>SoundCloud repost</li>
            <li>SoundCloud comment</li>
            <li>Spotify follow</li>
            <li>Facebook like</li>
            <li>YouTube subscribe</li>
            <li>Email address</li>
            <li>Direct donation</li>
          </ul>
          <h4>How do I get paid?</h4>
          <p>
            We email you whenever you receive a donation. Once you accumulate $20, we'll contact you
            and begin the payout process via
            <a href="https://paypal.com" target="_blank">PayPal</a>. All donations are subject to the
            following rules:
          </p>
          <ul>
            <li>
              <strong>Payment processing fee</strong>
              : for each donation, our payment processor
              <a href="https://stripe.com" target="_blank">Stripe</a>
              charges a fee of 2.9% + $0.30.
            </li>
            <li>
              <strong>Money transfer fee</strong>:
              <ul>
                <li>U.S. artists: 2% of amount transferred capped at $1.</li>
                <li>International artists: 2% of amount transferred capped at $20.</li>
              </ul>
            </li>
          </ul>
        </section>
      </section>
    </article>
  </div>
</template>

<script>
export default {
}
</script>
