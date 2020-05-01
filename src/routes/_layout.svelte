<script>
  import Header from "../components/_partials/Header.svelte";
  import Footer from "../components/_partials/Footer.svelte";

  export let segment;
</script>

<div>
  <div class="max-w-screen-sm my-24 mx-auto shadow-lg text-lg">
    <div class="p-10 space-y-6 bg-gray-100">
      <Header {segment} />
      <main class="space-y-10">
        <slot />
      </main>
    </div>
    <Footer />
  </div>
</div>
