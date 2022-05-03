<script lang="ts">
	type ButtonVariant = 'text' | 'contained' | 'outlined';
	type ButtonType = 'button' | 'submit';

	export let type: ButtonType = 'button';
	export let variant: ButtonVariant = 'text';
	export let disabled: boolean = false;
	export let href: string | undefined = undefined;

</script>

<button {type} class={`button-${variant} ${disabled ? 'disabled' : ''}`} {disabled}>
	{#if href !== undefined }
		<a href={href}><slot/></a>
	{:else}
		<slot/>
	{/if}
</button>
