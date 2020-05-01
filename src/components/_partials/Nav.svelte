<script>
  export let segment;

  let showMenu = false;
  let menu;

</script>

<nav
  class="flex items-center sm:justify-between flex-wrap font-bold text-md
  text-blue-900">
  <div class="flex-grow-0 sm:hidden">
    <button
      class="flex items-center px-3 py-2 border rounded text-black border-black
      hover:text-black-500 hover:border-black-500">
      <svg
        class="fill-current h-3 w-3"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg">
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
      </svg>
    </button>
  </div>
  <div class="flex items-center font-bold text-md sm:flex-grow">
    <a href="." class="underline hover:text-blue-700">
      <h1>Jay Goff</h1>
    </a>
  </div>

  <div
    class={`block space-x-3 sm:flex sm:items-center sm:shadow-none`}>
    <a
      class:active="{segment === undefined}"
      href="."
      class="block underline sm:inline-block hover:text-blue-700 visited:text-gray-800 active:text-orange-700">
      Home
    </a>
    <a
      class:active="{segment === 'about'}"
      href="about"
      class="block underline sm:inline-block hover:text-blue-700 visited:text-gray-800 active:text-orange-700">
      About
    </a>
    <a
      rel="prefetch"
      class:active="{segment === 'posts'}"
      href="posts"
      class="block underline sm:inline-block hover:text-blue-700 visited:text-gray-800 active:text-orange-700">
      Posts
    </a>
    <!-- <a
      rel="prefetch"
      class:active="{segment === 'projects'}"
      href="projects"
      class="block underline sm:inline-block hover:text-blue-700 visited:text-gray-800 active:text-orange-700">
      Projects
    </a> -->
  </div>
</nav>