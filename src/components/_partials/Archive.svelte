<script>
  export let posts;

  function getDate(date) {
    let formatted = new Date(date);
    return `${formatted.getFullYear()}-${(formatted
      .getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${formatted
      .getDate()
      .toString()
      .padStart(2, "0")}`;
  }
</script>

<div>
  <h2 class="mt-2 mb-1 text-gray-700 font-semibold">some of my thoughts</h2>
  <table class="table-auto w-full">
    <thead>
      <tr class="text-base text-gray-600">
        <th class="px-4 py-2">Title</th>
        <th class="px-4 py-2">Reading Time</th>
        <th class="px-4 py-2">Categories</th>
        <th class="px-4 py-2">Date</th>
      </tr>
    </thead>
    <tbody>
      {#each posts as post}
        <tr>
          <td class="border px-4 py-2">
            <a
              class="underline hover:text-blue-700"
              rel="prefetch"
              href="posts/{post.slug}">
              <span>{post.title}</span>
            </a>
          </td>
          <td class="border px-4 py-2">{post.readTime} min read</td>
          <td class="border px-4 py-2">
            {#each post.categories as cat}
              <span>{cat}</span>
            {/each}
          </td>
          <td class="border px-4 py-2">{getDate(post.date)}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
