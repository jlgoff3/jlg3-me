<script>
  let data = [
    `<div class="`,
    { classes: `text-blue-700` },
    `">Welcome to the Tailwind Tour!</div>`
  ];

  $: content = data
    .map(item => {
      if (typeof item != "string") return item.classes;
      else return item;
    })
    .join("");
</script>

<div class="w-full resize-none border border-gray-600 rounded-sm my-0">
  {#each data as item}
    {#if typeof item == 'string'}
      <span>{item}</span>
    {:else}
      <input bind:value={item.classes} class="border border-gray-600 rounded py-1" />
    {/if}
  {/each}
</div>
<div class="border border-gray-600 rounded-sm my-0">
  {@html content}
</div>
