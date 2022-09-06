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

  <p>My name is Mr. Goff, and I teach math.</p>
</article>
