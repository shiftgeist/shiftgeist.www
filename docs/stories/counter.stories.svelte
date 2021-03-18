<script>
  import { Template, Meta, Story } from "@storybook/addon-svelte-csf";
  import Counter from "../../src/lib/Counter.svelte";
</script>

<Meta title="Counter" component={Counter} />

<Template let:args>
  <Counter {...args} />
</Template>

<Story name="primary" />

<Story name="with initial value" source args={{ count: 3 }} />
