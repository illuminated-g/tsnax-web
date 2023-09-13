<script>
    import StepView from './step-view.svelte'

    export let sequence = {
        name: 'New Sequence',
        steps: [
            {number: 0, name: "test", type: "wait", description: "A cool step", id: "a"},
            {number: 1, name: "step 2", type: "wait", description: "Another cool step.", id: "b"},
            {number: 2, name: "step 2", type: "wait", description: "Another cool step.", id: "c"},
            {number: 3, name: "step 2", type: "wait", description: "Another cool step.", id: "d"},
            {number: 4, name: "step 2", type: "wait", description: "Another cool step.", id: "e"},
            {number: 5, name: "step 2", type: "wait", description: "Another cool step.", id: "f"},
            {number: 6, name: "step 2", type: "wait", description: "Another cool step.", id: "g"}
        ]
    };

    export let id = undefined;
    export let name = 'Sequence';

</script>

<div class="section sequence-view" id={id}>
    <div class="sequence-name"><h2>{name}</h2></div>
    <div class="step-list">
        {#each sequence.steps as step (step.id)}
            <StepView {step} />
        {/each}
    </div>
</div>

<style>
    .sequence-view {
        display: grid;
        overflow-y: hidden;
        grid-template-rows: 70px auto;
    }

    .sequence-name {
        margin-left: 6px;
        margin-top: 0;
    }

    .step-list {
        overflow-y: scroll;
        height: 100%;
    }
</style>