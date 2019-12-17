<template>
<article>
  <h1 class="dashboard-content-title m-0 text-center">Account</h1>
  <h3 class="dashboard-form-subtitle mt-0">Personal settings</h3>
  <section class="dashboard-form-row row text-center">
    <section class="dashboard-form-inline col-sm-3">
      <h4 class="dashboard-form-label">Avatar</h4>
      <section class="dashboard-form-group">
        <form class="upload-form" enctype="multipart/form-data" method="POST">
          <label for="user-avatar-form">
            <img
              class="user-avatar user-avatar-sm ml-3"
              src="http://graph.facebook.com/v2.6/1240704056090756/picture">
            <i class="fa fa-pencil pencil-hidden" />
          </label>
          <!-- <input type="file" id="user-avatar-form" name="user-avatar-form" accept="image/*"> -->
        </form>
        </section>
      </section>
      <section class="dashboard-form-inline col-sm-3">
        <h4 class="dashboard-form-label">Full name</h4>
        <span class="pl-3">Gor Vardanyan</span>
        <i class="fa fa-pencil pencil-hidden" />
      </section>
      <section class="dashboard-form-inline col-sm-3">
        <h4 class="dashboard-form-label">Email</h4>
        <span class="pl-3">gorvardanyan@mail.ru</span>
        <i class="fa fa-pencil pencil-hidden" />
      </section>
      <section class="dashboard-form-inline col-sm-3">
        <h4 class="dashboard-form-label">Password</h4>
        <span class="pl-3">•••••••••</span>
        <i class="fa fa-pencil pencil-hidden" />
      </section>
    </section>
    <h3 class="dashboard-form-subtitle">Connected accounts</h3>
    <section class="dashboard-form-row text-center ml-3">
      <section>
        <ul class="social-accounts row">
          <li class="col-sm-3">
            <section class="social-account">
              <a class="social-account-link social-account-connect">
                <i class="social-account-icon fa fa-soundcloud fa-3x" />
                Connect to update your username
              </a>
            </section>
          </li>
          <li class="col-sm-3">
            <div class="social-account social-account-connected">
              <a class="social-account-link">
                <i class="social-account-icon fa fa-facebook-square fa-3x" />
                Gor Vardanyan
              </a>
              <a class="social-account-disconnect">Disconnect</a>
            </div>
          </li>
          <li class="col-sm-3">
            <section class="social-account">
              <a class="social-account-link social-account-connect">
                <i class="social-account-icon fa fa-instagram fa-3x" />
                Connect
              </a>
            </section>
          </li>
          <li class="col-sm-3">
            <section class="social-account">
              <a class="social-account-link social-account-connect">
                <i class="social-account-icon fa fa-twitter fa-3x" />
                Connect
              </a>
            </section>
          </li>
        </ul>
        <ul class="social-accounts row">
          <li class="col-sm-3">
            <section class="social-account">
              <a class="social-account-link social-account-connect">
                <i class="social-account-icon fa fa-spotify fa-3x" />
                Connect
              </a>
            </section>
          </li>
          <li class="col-sm-3">
            <section class="social-account">
              <a class="social-account-link social-account-connect">
                <i class="social-account-icon fa fa-youtube-play fa-3x" />
                Connect
              </a>
            </section>
          </li>
          <li class="col-sm-3">
            <div class="social-account social-account-snapchat">
              <form class="upload-form" enctype="multipart/form-data" method="POST">
                <label for="user-snapcode-form">
                  <a class="social-account-link">
                    <i class="social-account-icon fa fa-snapchat fa-3x" />
                    Upload Snapcode
                  </a>
                </label>
                <!-- <input type="file" id="user-snapcode-form" name="user-snapcode-form" accept="image/png"> -->
              </form>
            </div>
          </li>
        </ul>
      </section>
    </section>
    <h3 class="dashboard-form-subtitle">Advanced settings</h3>
    <section class="dashboard-form-row text-left ml-3">
      <section class="dashboard-form-inline">
        <h4 class="dashboard-form-label">Email preference</h4>
        <section class="dashboard-form-group">
          <div class="checkbox">
            <label>
              <p>
                <input type="checkbox" value="on">
                Receive updates via email
              </p>
            </label>
          </div>
        </section>
      </section>
      <section class="dashboard-form-inline">
        <h4 class="dashboard-form-label">Automate</h4>
        <section class="dashboard-form-group">
          <div class="checkbox">
            <label>
              <p>
                <input type="checkbox" value="on">
                Automatically import music to The Artist Union
                whenever you upload new music to SoundCloud
              </p>
            </label>
          </div>
        </section>
      </section>
      <section class="dashboard-form-inline">
        <h4 class="dashboard-form-label">Facebook Tab</h4>
        <a class="account-facebook-tab">
          <p>Add a Facebook Tab to prompt fans to like your page.</p>
        </a>
      </section>
    </section>
    <section class="dashboard-form-row text-left ml-3">
      <section class="dashboard-form-inline">
        <h4 class="dashboard-form-label">Delete account</h4>
        <section class="dashboard-form-group">
          <p>
            Once your account is deleted, we cannot recover it.
            All of your music &amp; data will be removed.
          </p>
          <a class="btn btn-default btn-danger">Delete account</a>
        </section>
      </section>
    </section>
  </article>
</template>

<script>
export default {
}
</script>
