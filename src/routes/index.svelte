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
  import Archive from "../components/_partials/Archive.svelte";
  import Link from "../components/Link"
  export let posts;
</script>

<svelte:head>
  <title>Jay Goff</title>
</svelte:head>

<p>
  Hi, I'm
  <Link href="about" class="underline font-semibold hover:text-blue-700">Jay.</Link>
  Or maybe you know me as James, Jimmy, Jake(?), Jason(?), or that
  <Link href="about#socials" class="underline font-semibold hover:text-blue-700">
    That Blue Jay.
  </Link>
  I've got about as many names as I have interests and as many interests as I do
  <Link href="projects" class="underline font-semibold hover:text-blue-700">
    projects
  </Link>
  and twice as many
  <Link href="posts" class="underline font-semibold hover:text-blue-700">
    thoughts
  </Link>
  as all of the above combined, so I decided to give myself a place to display
  them. Please enjoy my personal museum.
</p>

<Archive {posts} />
