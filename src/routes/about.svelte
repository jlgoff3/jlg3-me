<script>
  import Link from "../components/Link";
  let socials = [
    {
      name: "Twitter",
      icon: "twitter-square",
      profile: "that_blue_jay",
      link: "https://twitter.com/that_blue_jay",
      color: "text-blue-500"
    },
    {
      name: "Instagram",
      icon: "instagram-square",
      profile: "that.bluejay",
      link: "https://www.instagram.com/that.bluejay",
      color: "text-red-500"
    }
  ];
</script>

<svelte:head>
  <title>About</title>
  <script
    src="https://kit.fontawesome.com/5ed62b6ab2.js"
    crossorigin="anonymous">

  </script>
</svelte:head>

<article class="space-y-6">
  <h1 class="text-lg font-bold">About me</h1>

  <p>All the important stuff about me is probably somewhere else, but here's the basics. I'm a <span class="font-semibold">designer, developer, musician, writer, actor, <Link href="https://www.worldcubeassociation.org/persons/2019GOFF02" external>speed(slow)cuber</Link>, and freethinker</span> from central Michigan, and as a rule, I'm slightly below average at all of them.</p>
  <p>I use <Link href="https://vuejs.org/" external>Vue</Link>, <Link href="https://vuetifyjs.com/" external>Vuetify</Link>, and <Link href="https://nodejs.org/" external>Node</Link>/<Link href="https://expressjs.com/" external>Express</Link> at my day job, but this site was built using <Link href="https://svelte.dev/" external>Svelte</Link>/<Link href="https://sapper.svelte.dev/" external>Sapper</Link> and <Link href="https://tailwindcss.com/" external>TailwindCSS</Link>, because I like to try new things.</p>
  <div id="socials">
    <p>If you're just looking for my socials, well here they are, you filthy animals.</p>
    <div class="flex space-x-6">
      {#each socials as social}
        <a href={social.link} class="flex self-center space-x-2">
          <i class={`fab fa-${social.icon} fa-2x ${social.color}`} />
          <span class="font-semibold hover:text-blue-700">@<span class="underline">{social.profile}</span></span>
        </a>
      {/each}
    </div>
  </div>
</article>
