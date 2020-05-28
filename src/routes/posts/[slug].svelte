<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`posts/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let post;

  function getDate(date) {
    let formatted = new Date(date).toDateString();
    return `${formatted}`;
  }
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<article class="space-y-4">
  <header>
    <h1 class="font-bold text-3xl">{post.title}</h1>
    <div class="flex space-x-4 text-sm">
      <span><span class="font-semibold">author</span>: {post.author ? post.author : 'me'}</span>
      <span><span class="font-semibold">published</span>: { getDate(post.date) }</span>
      <span>{post.readTime} min read</span>
    </div>
  </header>

  <div class="space-y-4">
    {@html post.html}
  </div>
</article>

<style>
a {
  @apply underline font-semibold;
}

a:hover {
  @apply text-blue-700;
}

ol {
  @apply list-decimal;
}

b {
  @apply font-bold;
}
</style>
