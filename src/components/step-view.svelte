<script>
    export let step = undefined;
</script>

<div class="step-view">
    <div class="step-number">{step ? step.number : ''}</div>
    <div class="step-type"></div>
    <div class="step-name">{step ? step.name : ''}</div>
    <div class="step-description">{step ? step.description : ''}</div>
</div>

<style>
    .step-view {
        display: grid;
        grid-template-columns: 40px 40px 150px auto;
    }

    .step-number {
        text-align: right;
    }
</style>