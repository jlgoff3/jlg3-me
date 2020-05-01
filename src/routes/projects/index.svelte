<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`projects.json`)
      .then(r => r.json())
      .then(projects => {
        return { projects };
      });
  }
</script>

<script>
  import Archive from "../../components/_partials/Archive.svelte";
  import Link from "../../components/Link"
  export let projects;
</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>

{#each projects as project}
<div><Link href="{`projects/${project.slug}`}">{project.title}</Link></div>
{/each}
