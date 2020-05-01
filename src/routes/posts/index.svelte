<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`posts.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  import Archive from "../../components/_partials/Archive.svelte";
  export let posts;
</script>

<svelte:head>
  <title>Posts</title>
</svelte:head>

<Archive {posts} />
