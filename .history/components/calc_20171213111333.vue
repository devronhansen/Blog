<template>
  <div class="nav">
    <div style="nav--item">
      Logo
    </div>

    <div class="nav-header">
      <div class="nav--item">
         Forum
      </div>

      <div class="nav--item">
        Profile
      </div>

      <div class="nav--item">
        Messages
      </div>
    </div>
  </div>
</template>

<style>
.nav--item{
  margin-right: 10px
}

.nav{
  display: flex;
  margin-right: 20px;
  justify-content: flex-end
}

.nav-header{
  display: flex;
  justify-content: space-between
}
</style>
