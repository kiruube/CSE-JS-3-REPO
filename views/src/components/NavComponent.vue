<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
            <RouterLink to="/">Home</RouterLink>
          </a>
        </li>
        <li class="nav-item">
          <RouterLink to="/courses" > <a class="nav-link" href="#">Courses</a> 
          </RouterLink>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Students</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Staff</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"> 
            <RouterLink to="/departments">Departments</RouterLink>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Partners</a>
        </li>

      </ul>
    </div>
  </div>
        </nav>
    </div>
</template>


<script>
    export default {
        name: "NavComponent",

        data(){return {}},
        methods: {},
        compomponents: {},
    }
</script>


<style>

</style>