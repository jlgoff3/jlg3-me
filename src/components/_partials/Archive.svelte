<script>
  export let posts;

  function getDate(date) {
    let formatted = new Date(date);
    return `${formatted.getFullYear()}-${formatted
      .getMonth()
      .toString()
      .padStart(2, "0")}-${formatted
      .getDay()
      .toString()
      .padStart(2, "0")}`;
  }
</script>

<div>
  <h2 class="mt-2 mb-1 text-gray-700 font-semibold">some of my thoughts</h2>
  <div class="divide-y">
    <div class="flex justify-between space-x-6">
      <span>Title</span>
      <span>Reading Time</span>
      <span>Categories</span>
      <span>Date</span>
    </div>
    {#each posts as post}
      <a
        class="underline hover:text-blue-700"
        rel="prefetch"
        href="posts/{post.slug}">
        <div class="flex justify-between space-x-6">
          <span>{post.title}</span>
          <span>{post.readTime} min read</span>
          <span class="space-x-2">
            {#each post.categories as cat}
              <span>{cat}</span>
            {/each}
          </span>
          <span>{getDate(post.date)}</span>
        </div>
      </a>
    {/each}
  </div>
</div>
