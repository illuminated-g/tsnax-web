<script>

    export let id = undefined;
    export let style = '';

    let paletteUI;

    let filterString = '';

    function updateFilter() {

    }

    //watch filterString reactivity to update the filter
    $: filterString, updateFilter();

</script>

<div bind:this={paletteUI} id={id} style={style}>
    <h2 class="section-header">Step Palette</h2>
    <input class="filter" type="text" placeholder="Search" bind:value={filterString}/>
    <ul>
        <li>AI</li>
        <li>AO</li>
        <li>DI</li>
        <li>DO</li>
        <li>Wait</li>
        <li>If</li>
    </ul>
</div>

<style>
    .section-header {
        margin-left: 6px;
        margin-top: 0;
        margin-bottom: 4px;
    }

    .filter {
        margin: 0.5rem;
        border-radius: 4px;
        width: 90%;
        margin-left: 10px;
        margin-right: 10px;
    }
</style>