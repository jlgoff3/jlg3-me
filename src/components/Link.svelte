<script>
  export let href;
  export let external = false;
</script>

<a
  {href}
  target={external ? '_blank' : '_self'}
  class="underline font-semibold hover:text-blue-700">
  <slot />
</a>
