<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`posts.json`)
      .then((r) => r.json())
      .then((posts) => {
        return { posts };
      });
  }
</script>

<script>
  import Archive from "../components/_partials/Archive.svelte";
  import Link from "../components/Link";
  export let posts;
</script>

<svelte:head>
  <title>Jay Goff</title>
</svelte:head>

<p>
  Hi, I'm
  <Link href="about" class="underline font-semibold hover:text-blue-700">
    Mr. Goff,
  </Link>
  and I teach math. To learn more about me, visit my
  <Link href="about" class="underline font-semibold hover:text-blue-700">
    about page.
  </Link>
</p>
