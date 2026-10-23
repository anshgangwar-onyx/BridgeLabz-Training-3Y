let count = 0;

function createCounterSystem() {
    function logCounterState(action) {
        console.log("Action: " + action + " | Current Count Value: " + count);
    }

    return {
        increment: function() {
            count++;
            logCounterState("Increment");
        },
        decrement: function() {
            count--;
            logCounterState("Decrement");
        }
    };
}

const counter = createCounterSystem();

counter.increment();
counter.increment();
counter.decrement();
