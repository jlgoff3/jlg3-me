<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`projects/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { project: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import Link from "../../components/Link";
  export let project;
</script>

<svelte:head>
  <title>{project.title}</title>
</svelte:head>

<article class="space-y-4">
  <header>
    <h1 class="font-bold text-3xl">{project.title}</h1>
    <div class="flex space-x-4 text-sm">
      <span><span class="font-semibold">link</span>: <Link href="{project.href}" external>{project.href}</Link></span>
    </div>
  </header>

  <div class="content">
    {@html project.html}
  </div>
</article>
