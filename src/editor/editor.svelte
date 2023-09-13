<script>

    import Palette from '../components/palette.svelte';
    import SequenceView from '../components/sequence-view.svelte'
    import StepParameters from '../components/step-parameters.svelte';
    import StepEditor from '../components/step-parameters.svelte'

    let editorUI;

</script>

<div class="fullscreen editor" bind:this={editorUI}>
    <div class="toolbar section">
        <span>Toolbar</span>
    </div>

    <div class="left section">
        <Palette/>
    </div>
    
    <div class="center">
        <SequenceView id="main_sequence" name="Main Sequence"/>
        <SequenceView id="abort_sequence" name="Abort Sequence"/>
    </div>

    <div class="right section">
        <StepParameters/>
    </div>

    <div class="footer section">

    </div>
</div>

<style>
    .editor {
        display:grid;
        grid-template-rows: 50px auto 50px;
        grid-template-columns: 1fr 2fr 1fr;
        grid-template-areas:
            "t t t"
            "l m r"
            "b b b";
    }
    
    .toolbar {
        grid-area: t;
    }

    .left {
        grid-area: l;
    }

    .center {
        grid-area: m;
        display: grid;
        grid-template-rows: 3fr 2fr;
    }

    .right {
        grid-area: r;
    }

    .footer {
        grid-area: b;
    }
</style>