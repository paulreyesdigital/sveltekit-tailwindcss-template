<script>
  import Button from "../components/Button.svelte";
</script>


<h1 class='text-white text-2xl mb-4'>Buttons</h1>

<div class='border border-muted p-4 bg-container-color'>
  <Button>Hello World!</Button>
  <Button variant='contained'>Hello World!</Button>
  <Button variant='outlined'>Hello World!</Button>
  <Button href='paulreyes.dev' variant='outlined'>Hello World!</Button>

  <Button disabled>Hello World!</Button>
  <Button disabled variant='contained'>Hello World!</Button>
  <Button disabled variant='outlined'>Hello World!</Button>
</div>

