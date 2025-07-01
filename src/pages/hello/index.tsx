import Hello from "../../packages/ui/components/hello";

import { useHello } from "../../packages/core/hooks";

export default function() {
    const props = useHello();
    console.log(props);
    return <Hello
        text="hell yeah!!!"
    />
}